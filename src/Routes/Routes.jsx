import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Doctors from "../pages/Dotors/Doctors";
import DoctorProfile from "../pages/DoctorsProfile/DoctorProfile";
import PatientProfile from "../pages/PatientProfile/PatientProfile";

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
            },
            {
                path: '/doctorprofile',
                element: <DoctorProfile></DoctorProfile>
            },
            {
                path: '/patientprofile',
                element: <PatientProfile></PatientProfile>
            }
        ]
    }
]);