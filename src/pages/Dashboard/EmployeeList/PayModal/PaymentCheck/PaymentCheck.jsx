import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../../../components/useAxiosSecure";
import { AuthContext } from "../../../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";



const PaymentCheck = ({ singleUser }) => {
  const salary = singleUser.salary;

  // date related info
  const [startDate,setStartDate]=useState(new Date())
  const [startMonth,setStartMonth]=useState(new Date())
  const month=moment(startDate).format('MMM')
  const year=moment(startMonth).format('yyyy')

  const { user } = useContext(AuthContext);

  // stripe connect
  const stripe = useStripe();
  const elements = useElements();
  
  // client secret ,error and transaction id
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = UseAxiosSecure();
  const navigate=useNavigate()

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
          transactionId:paymentIntent.id,
          month,
          year
        };
        
        axiosSecure.post("/payment", paymentInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Successfully payment, TransactionId ${paymentIntent.id}`,
              showConfirmButton: false,
              timer: 1000,
            });
            navigate("/")
          }
          else{
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
    <form onSubmit={handleSubmit} className="mx-auto my-12 p-12 text-center lg:w-10/12 bg-slate-400">
      <div className="form-control"  >
      <input type="text" placeholder="" readOnly name="salary" defaultValue={salary} className="input input-bordered" required />

    </div>
      
      <div className="flex flex-row justify-around">
      <div className="form-control">
      <p className="text-xl">
          {" "}
         Select Month :{" "}
          <ReactDatePicker
            className="w-52 rounded-md pl-3"
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
            className="w-52 rounded-md pl-3"
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
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {/* {transactionId && (
        // <p className="text-green-700 font-bold">{`Your transaction id ${transactionId}`}</p>
      )}{" "} */}
      <p className="text-red-700 font-bold">{error}</p>
    </form>
  );
};

export default PaymentCheck;
