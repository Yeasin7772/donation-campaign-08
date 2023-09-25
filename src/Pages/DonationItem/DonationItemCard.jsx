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

            {/* <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative  h-56 overflow-hidden ">
                    <img
                        src={img}
                        alt="img-blur-shadow"

                    />
                </div>
                <div className="p-6 pt-0">
                    <button style={backgroundStyle} onClick={handelAddDonation}
                        className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Donation {Price}
                    </button>
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {Description}.
                    </p>
                </div>

            </div> */}

            <div className="card h-auto bg-base-100 shadow-xl">
                <figure><img className="  w-full h-[400px]" src={img} alt="Shoes" /></figure>
                <div className= " py-5 w-full bg-black opacity-80 ">
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