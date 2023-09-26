import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donations, setDonations] = useState([]);
    //console.log(donations);
    const [donationLength, setDonationLength] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonations(donationItems);
        } else {
            //console.log('no data');
        }
    }, []);
    //console.log(donationLength);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {donationLength ? (
                    donations.map(donation => (
                        <DonationCard key={donation.id} donation={donation}></DonationCard>
                    ))
                ) :
                 (
               donations.slice(0, 4).map(donation => (
                        <DonationCard key={donation.id} donation={donation}></DonationCard>
                    ))
                )}
            </div>

            <div className="flex justify-center mt-10">
                {donations.length > 4 && !donationLength && (
                    <button
                        onClick={() => setDonationLength(true)}
                        className="btn btn-primary"
                    >
                        Show all
                    </button>
                )}
            </div>
        </div>
    );
};


export default Donation;