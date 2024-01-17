import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const users=useLoaderData()
    return (
        <div>
            {users._id}
        </div>
    );
};

export default CheckOut;