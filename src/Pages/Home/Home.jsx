import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../Donations/Donations";


const Home = () => {
    const donations = useLoaderData()
   // console.log(donations);
    return (
        <div>
           
            <h1 className="text-[#FF444926]"> Home </h1>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;