import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const About = () => {
    return (
       <div className="lg:w-11/12 mx-auto mt-20 mb-2">
         <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcnZpY2UlMjBwcm92aWRlciUyMGNvbXBhbnl8ZW58MHx8MHx8fDA%3D)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
            <p className="text-xl text-red-200">Welcome to FHW coompany</p>
            <h1 className="mb-5 text-4xl mt-4 font-bold text-[#FFC5C5] uppercase">Boost Personal Productivity with us</h1>
            <p className="mb-5">A Service Provider is an organization that provides services, such as consulting, legal, real estate, communications, storage, and processing services, to other organizations. Although a service provider can be a sub-unit of the organization that it serves, it is usually a third-party or outsourced supplier.</p>
            <Link to='/contact'><button className="btn bg-[#FFC5C5] text-[#DA0037] hover:border-2 hover:border-[#DA0037]">Get Started</button></Link>
          </div>
        </div>
      </div>
      <Banner/>
       </div>
    );
};

export default About;