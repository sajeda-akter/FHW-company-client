import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <div className=" w-11/12 mx-auto mt-24">
      <h3 className="text-3xl text-center mt-10 mb-7 font-medium border-y-2 border-[#FFC5C5] w-96 py-2 mx-auto">
        Why you choose us?
      </h3>

      <div className="hero min-h-full bg-base-200 lg:p-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeFM1VfrXdb-bQtyQ2F3AFN9af7R3Qv6atg&usqp=CAU"
            className="lg:w-2/4 w-96  rounded-lg shadow-2xl"
          />
          <div className="lg:w-2/4">
            <h1 className="text-5xl font-bold text-[#DA0037]">About Us</h1>
            <p className="py-6">
            A service provider is an individual or entity that provides services to another party. The relationship is typically governed by a service agreement.
            </p>
            <Link to='/contact'>
              <button className="btn text-[#DA0037] border-2 hover:border-[#DA0037] border-[#DA0037]">
                Contact us{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
