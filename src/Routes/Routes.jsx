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
import AssignmentDetails from "../Pages/AssignmentDetails";
import EvaluateAssignment from "../Pages/EvaluateAssignment";
import Error from "../Pages/Error";
import AboutUs from "../Pages/AboutUs";



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        //errorElement:<Error />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/AboutUs',
                element: <AboutUs />,

            },
            {
                path: '/CreateAssignments',
                element: <PrivateRoutes><CreateAssignments /></PrivateRoutes>,
            },
            {
                path: '/Assignments',
                element: <Assignments />,
              
            },
            {
                path: '/AssignmentsUpdate/:id',
                element: <PrivateRoutes><AssignmentsUpdate /></PrivateRoutes>,
                
            },
            {
                path: '/AssignmentDetails/:id',
                element: <PrivateRoutes><AssignmentDetails /></PrivateRoutes>,
               
            },

            {
                path: '/MyAttemptedAssignments',
                element: <PrivateRoutes><MyAttemptedAssignments /></PrivateRoutes>,

            },
            {
                path: '/PendingAssignments',
                element: <PrivateRoutes><PendingAssignments /></PrivateRoutes>
            },
            {
                path: '/evaluateAssignment/:id',
                element: <PrivateRoutes><EvaluateAssignment /></PrivateRoutes>,
            },
            {
                path: '/SignUp',
                element: <SignUp />,
            },
            {
                path: '/SignIn',
                element: <SignIn />,
            },

        ],

    },
]);
export default Routes;