import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const users=useLoaderData()
    console.log(users)
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="max-w-lg">
            <h1>{users.user}</h1>
            <img src={users.image} alt="" />
            <p>{users.role}</p>
          </div>
        </div>
      </div>
    );
};

export default CheckOut;