import { Elements } from "@stripe/react-stripe-js";
import PaymentCheck from "../Dashboard/EmployeeList/PayModal/PaymentCheck/PaymentCheck";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";


const TestPayment = () => { 
  const singleUser=useLoaderData()
    const stripePromise=loadStripe(import.meta.env.VITE_REACT_PAYMENT_KEY)
    console.log(singleUser)
    return (
        <Elements stripe={stripePromise}>
        <PaymentCheck singleUser={singleUser} />
      </Elements>
    );
};

export default TestPayment;