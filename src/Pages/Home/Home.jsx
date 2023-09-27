import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../Donations/Donations";
import { useState } from "react";



const Home = () => {
    const donations = useLoaderData()



    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    // const [donations,setDonations] = useState([])

    // const handelSearch = (searchValue) => {
    //    let value = searchValue.toLowerCase()
    //    const newSearchItems = donations.filter((donation) = => {
    //     const donationName = donation.name.toLowerCase()
    //     return donationName.startsWith(value)
    //    })
    //    setDonations(newSearchItems)


    // }
    // console.log(donations);
    return (
        <div>

            <h1 className="text-[#FF444926]"> Home </h1>
            <Banner inputValue={inputValue} handleInputChange={handleInputChange} ></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;