import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import Assignments from "../Pages/Assignments ";
import PrivateRoutes from "./PrivateRoutes";
import CreateAssignments from "../Pages/CreateAssignments";
import MyAttemptedAssignments from "../Pages/MyAttemptedAssignments";
import PendingAssignments from "../Pages/PendingAssignments";
import AssignmentsUpdate from "../Pages/AssignmentsUpdate";
  

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element: <Home />,

            },
            {
                path:'/CreateAssignments',
                element:<PrivateRoutes><CreateAssignments /></PrivateRoutes>,
            },
            {
                path:'/Assignments',
                element:<Assignments />,
                loader: () => fetch('http://localhost:5000/assignmentData'),
            },
            {
                path:'/AssignmentsUpdate/:id',
                element: <PrivateRoutes><AssignmentsUpdate /></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/assignmentData/${params.id}`)
            },
            
            {
                path:'/MyAttemptedAssignments',
                element:<PrivateRoutes><MyAttemptedAssignments /></PrivateRoutes>,

            },
            {
                path:'/PendingAssignments',
                element:<PrivateRoutes><PendingAssignments /></PrivateRoutes>
            },
            {
                path:'/SignUp',
                element:<SignUp />,
            },
            {
                path:'/SignIn',
                element:<SignIn />,
            },

        ],
    
    },
  ]);
  export default Routes;