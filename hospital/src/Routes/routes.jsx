
import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Compenents/LoginForm";
import Register from "../Compenents/Register";
import Dashboorduser from "../Compenents/Dashboorduser";
import AddRdv from "../Compenents/AddRdv";
import CreateDoctor from "../Compenents/Admin/CreateDoctor";
import AllDoctors from "../Compenents/Admin/AllDoctors";
import AllPatient from "../Compenents/Admin/AllPatient";
import CreateUser from "../Compenents/Admin/CreateUser";
import CreateRdv from "../Compenents/CreateRdv";
import Profile from "../Compenents/Profile";
import AllRdv from "../Compenents/Admin/AllRdv";
import MyRdv from "../Compenents/MyRdv";
import ProfileUser from "../Compenents/ProfileUser";
import NotFound from "../Compenents/NotFound";
import ProfilePageDoctor from "../Compenents/Doctor/ProfilePageDoctor";
import DoctorTasks from "../Compenents/Doctor/DoctorTasks";
import UpdateDoctor from "../Compenents/Admin/UpdateDoctor";
import UpdatePatient from "../Compenents/Admin/UpdatePatient";
import SuccessOp from "../Compenents/SuccessOp";
import PatientInfo from "../Compenents/Doctor/PatientInfo";
import UpdatProfilePat from "../Compenents/UpdateProfilePat";
import Home from "../Compenents/Doctor/Home";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
  
    {
      path: "/register",
      element: <Register />,
    },

  {
      path: "/profilePatient",
      element: <ProfileUser />,
    },
    {
      path: "/dashboord",
      element: <Dashboorduser />,
    },
    {
      path: "/AddRdv",
      element: <AddRdv />,
    },
  
    {
      path: "/createrdv/:idcorotr/:idpatient",
      element: <CreateRdv />,
    },
    {
      path: "/doctor/update/:id",
      element: <UpdateDoctor />,
    },
    {
      path: "/patient/update/:id",
      element: <UpdatePatient />,
    },
    
    {
      path: "/myRdv",
      element: <MyRdv />,
    },
    
    {
      path: "/alldoctors",
      element: <AllDoctors />,
    },
    {
      path: "*",
      element: <NotFound/>
    },
    {
      path: "/allPatients",
      element: <AllPatient />,
    },
    {
      path: "/allRdv",
      element: <AllRdv />,
    },
  
    {
      path: "/createDoctor",
      element: <CreateDoctor />,
    },
    {
      path: "/home/doctor",
      element: <Home/>,
    },
    {
      path: "/createPatient",
      element: <CreateUser />,
    },
    {
      path: "/updateProfilePatient",
      element: <UpdatProfilePat/>,
    },
    {
      path: "/succesOperation/:description",
      element: <SuccessOp />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
{
  path :"/patientInfo/:id",
  element : <PatientInfo/>
},

    {
      path: "/profileDoctor",
      element: <ProfilePageDoctor />,
    },

    {
      path: "/doctortasks",
      element: <DoctorTasks />,
    },
   
  ]);