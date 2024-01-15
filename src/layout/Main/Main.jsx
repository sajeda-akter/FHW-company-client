import { Outlet } from "react-router-dom";
import Headers from "../../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Headers/>
            <Outlet/>            
        </div>
    );
};

export default Main;