import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Doctors from "../pages/Dotors/Doctors";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        //   errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/doctors',
                element: <Doctors></Doctors>
            }
        ]
    }
]);