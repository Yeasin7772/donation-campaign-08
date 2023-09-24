import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";


const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/donations.json')

            },
            {
                path:'/donation',
                element:<Donation></Donation>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            }
        ]
    }

])
export default myCreatedRoute;