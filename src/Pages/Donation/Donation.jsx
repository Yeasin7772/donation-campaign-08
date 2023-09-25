import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donations, setDonations] = useState([])
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if (donationItems) {
            setDonations(donationItems)
        } else{
            console.log('no data');
        }
    }, [])
    return (
        <div>
          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {
                donations.map(donation => 
                <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
           </div>
        </div>
    );
};

export default Donation;