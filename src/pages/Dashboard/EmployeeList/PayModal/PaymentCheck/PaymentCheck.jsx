import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../../../components/useAxiosSecure";
import { AuthContext } from "../../../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "./PaymentCheck.css";

const PaymentCheck = ({ singleUser }) => {
  const salary = singleUser.salary;

  // date related info
  const [startDate, setStartDate] = useState(new Date());
  const [startMonth, setStartMonth] = useState(new Date());
  const month = moment(startDate).format("MMM");
  const year = moment(startMonth).format("yyyy");

  const { user } = useContext(AuthContext);
console.log(salary)
  // stripe connect
  const stripe = useStripe();
  const elements = useElements();

  // client secret ,error and transaction id
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    if (salary > 0) {
      axiosSecure
        .post("/create-payment-intent", { salary: salary })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosSecure, salary]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error");
      setError(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        // now save payment info
        const paymentInfo = {
          email: singleUser.email,
          name: singleUser?.user,
          salary: singleUser?.salary,
          transactionId: paymentIntent.id,
          month,
          year,
        };

        axiosSecure.post("/payment", paymentInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Successfully payment, TransactionId ${paymentIntent.id}`,
              showConfirmButton: false,
              timer: 1000,
              customClass: {
                width: "50%", // Set the desired width here
              },
            });
            navigate("/");
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Already payment ",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
      }
    }
  };

  return (
    <div>
      <h3 className="text-3xl text-center mt-10 mb-7 font-medium border-y-2 border-[#FFC5C5] w-80 py-2 mx-auto">
       Payment Here
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-8 p-12 lg:text-center w-11/12 lg:w-8/12 bg-slate-500 text-base-200 rounded-xl"
      >
        <div className="form-control text-xl">
          <input
            type="text"
            placeholder=""
            readOnly
            name="salary"
            defaultValue={salary}
            className="input input-bordered text-black"
            required
          />
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row justify-around md:mt-6">
          <div className="form-control my-5 md:my-0">
            <p className="text-xl">
              {" "}
              Select Month :{" "}
              <ReactDatePicker
                className="w-72   text-black rounded-md p-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM"
              />
            </p>
          </div>
          <div className="form-control">
            <p className="text-xl">
              {" "}
              Select Year:{" "}
              <ReactDatePicker
                className="w-72 mb-4 md:mb-9 text-black rounded-md p-2"
                selected={startMonth}
                onChange={(date) => setStartMonth(date)}
                dateFormat="yyyy"
              />
            </p>
          </div>
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",

                color: "#E1F0DA",
                "::placeholder": {
                  color: "#E1F0DA",
                },
              },
              invalid: {
                color: "#E1F0DA",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn mt-12 ml-20 w-32 mx-auto border-2 border-[#DA0037] text-[#DA0037] md:w-52 md:ml-52 lg:ml-12"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {/* {transactionId && (
        // <p className="text-green-700 font-bold">{`Your transaction id ${transactionId}`}</p>
      )}{" "} */}
        <p className="text-red-700 font-bold">{error}</p>
      </form>
    </div>
  );
};

export default PaymentCheck;
