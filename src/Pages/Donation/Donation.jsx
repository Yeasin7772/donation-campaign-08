import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donations, setDonations] = useState([])
    const [donationLength, setDonationLength] = useState(4)
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if (donationItems) {
            setDonations(donationItems)
        } else {
            console.log('no data');
        }
    }, [])
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    donations.slice(0, donationLength).map(donation =>
                        <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }


            </div>

            <div className={donationLength === donations.length ? 'hidden' : ''}>
                <button onClick={() => setDonationLength(donations.length)}
                className="btn btn-primary ">Show all</button>
            </div>
        </div>
    );
};

export default Donation;