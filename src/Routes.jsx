import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import LoginRegisterLayout from "./Layout/LoginRegisterLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";



const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />,
        children:[
            { index:true , element:<HomePage />},
            { path:"about", element:<About />},
            { path:"products", element:<Products />},
            { path:"cart", element:<Cart />},
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