import { Outlet } from "react-router-dom";
import Headers from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Headers/>
            <Outlet/>  
            <Footer/>          
        </div>
    );
};

export default Main;