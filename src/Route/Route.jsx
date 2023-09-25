import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationItem from "../Pages/DonationItem/DonationItem";



const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donations.json')

            },
            {
                path: '/donations',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },

            {
                path: '/donation/:id',
                element:<DonationItem></DonationItem>,
                loader: () => fetch('/donations.json')
            }
           
        ]
    }

])
export default myCreatedRoute;