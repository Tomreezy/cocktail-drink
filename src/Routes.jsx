import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import LoginRegisterLayout from "./Layout/LoginRegisterLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";



const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />,
        children:[
            { index:true , element:<HomePage />},
            { path:"contact", element:<Contact />}
        ]
    },
    {
        path:"/User",
        element: <LoginRegisterLayout />,
        children :[
            {path:"login", element:<Login />},
            {path:"register", element:<Register />}
        ]
    }
])

export default routes