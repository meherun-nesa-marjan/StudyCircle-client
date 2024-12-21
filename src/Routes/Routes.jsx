import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import Assignments from "../Pages/Assignments ";
  

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
                path:'/Assignments',
                element:<Assignments />
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