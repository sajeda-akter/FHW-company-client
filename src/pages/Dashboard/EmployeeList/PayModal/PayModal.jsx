import { Elements } from "@stripe/react-stripe-js";
import PaymentCheck from "./PaymentCheck/PaymentCheck";
import { loadStripe } from "@stripe/stripe-js";

const PayModal = ({user}) => {
    const stripePromise=loadStripe(import.meta.env.VITE_REACT_PAYMENT_KEY)
      const handlePayment=(e)=>{
        e.preventDefault()
        const form=e.target
    console.log(form.month.value)

      }
  
    return (
    <div>
     
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
           
        <form className="card-body" onSubmit={handlePayment}>
        {/* <div className="form-control">
          
          <input type="text" placeholder="" readOnly defaultValue={user?.salary} className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="text" name="month" placeholder="Enter the month"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="text" name="year" placeholder="Enter the year" className="input input-bordered" required />
        </div> */}
       
        <Elements stripe={stripePromise}>
      <PaymentCheck  singleUser={user}/>
    </Elements>
   
        {/* <div className="form-control mt-6">
          <button className="btn btn-primary">
            
            
            Pay</button>
        </div> */}
      </form>
      </div>
      </dialog>
    </div>
  );
};

export default PayModal;
