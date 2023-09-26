import swal from "sweetalert";


const DonationItemCard = ({ donation }) => {
    const { id, img, name, Title, Category_bg_color, Card_bg_color, Text_button_bg_color, Description, Price } = donation || {};
    //console.log(donation);

    const handelAddDonation = () => {
        const addedDonationArray = []
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if (!donationItems) {
            addedDonationArray.push(donation)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Thanks You For Your Donation!", "success");
        } else {
            const isExits = donationItems.find(donation => donation.id === id)
            if (!isExits) {
                addedDonationArray.push(...donationItems, donation)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                swal("Good job!", "Thanks You For Your Donation!", "success");
            } else {
                swal("error!", "All Ready Donated!", "error");
            }
        }

    }
    const backgroundStyle = {
        background: Text_button_bg_color,
    }
    return (
        <div className="flex justify-center items-center  mt-6">

            <div className="card w-[90vh] h-[90vh] bg-base-100 shadow-xl">
                <figure><img className=" relative w-full h-[400px]" src={img} alt="Shoes" /></figure>
                <div className= " absolute bottom-[250px] py-3 w-full bg-black bg-opacity-70 ">
                    <button style={backgroundStyle} onClick={handelAddDonation}
                        className="select-none rounded-lg py-3 ml-8 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Donation {Price}
                    </button>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-[#0B0B0B]">
                    {Title}
                      
                    </h2>
                    <p className="text-[#0B0B0BB3]"><small>{Description}</small></p>
                   
                </div>
            </div>

        </div>
    );
};

export default DonationItemCard;