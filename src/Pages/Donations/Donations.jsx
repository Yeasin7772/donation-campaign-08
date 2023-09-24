import DonationsCard from "./DonationsCard/DonationsCard";


const Donations = ({ donations }) => {
    console.log(donations);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
             
               {
                donations?.map(donation =>
                <DonationsCard key={donation.id} donation={donation} > 
                </DonationsCard>)
               }
              
             
            </div>

        </div>
    );
};

export default Donations;