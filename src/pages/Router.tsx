import { createBrowserRouter } from "react-router-dom";
import UpperNavbar from "./header/upperNavbar";
// import Home from "./Home/Home";
import SignIn from "./header/signIn/signIn";
import SignUp from "./header/signIn/SignUp";
import Player from "./player/player";

const router = createBrowserRouter([
    // {
    //     path:"/",
    //     element:<Home/>
    // },
    {
        path:"/",
        element:<Player/>
    },
    {
        path:'/home',
        element: <UpperNavbar/>,
    },
    {
        path:'/signin',
        element: <SignIn/>
    },
    {
        path:'/signup',
        element: <SignUp/>
    }
])

export default router;