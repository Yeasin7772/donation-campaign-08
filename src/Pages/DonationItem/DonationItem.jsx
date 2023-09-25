import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationItemCard from "./DonationItemCard";


const DonationItem = () => {
    const [donation, setDonation] = useState()
    const { id } = useParams()
   // console.log(id);
    const donations = useLoaderData()
    //console.log(donations);
    //console.log(donation);

    useEffect(() => {
     const findDonation = donations?.find(donation => donation.id == id)
        
        setDonation(findDonation)

    }, [id,donations])
  


    return (
        <div className="bg-white">
           <div>
            <DonationItemCard donation={donation}></DonationItemCard>
           </div>

        </div>
    );
};

export default DonationItem;