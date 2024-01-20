import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-32">
            <img className="lg:w-8/12 w-full mx-auto h-96" src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" alt="" />
        <div className="w-2/4 mx-auto">
        <Link to='/'><button className="border-2 border-red-500 px-12 py-4 rounded-md lg:ml-72 text-2xl mt-6">Go Back to Home</button></Link>

        </div>
        </div>
    );
};

export default ErrorPage;