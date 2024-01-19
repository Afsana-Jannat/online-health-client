import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;