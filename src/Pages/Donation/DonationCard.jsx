const DonationCard = ({ donation }) => {
    const { id, img, name, Title, Category_bg_color, Card_bg_color, Text_button_bg_color, Description, Price } = donation || {};
   
    const backgroundStyle = {
        background: Category_bg_color,
    }
    const priceStyle = {
        color: Card_bg_color,
    };

    const btnColor ={
        background:Text_button_bg_color,
    };
    return (
        <div>
            <div style={backgroundStyle} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
               <div>
               <p style={priceStyle}
                            className=" font-sans text-base font-medium leading-relaxed  antialiased">
                            {name}
                        </p>
               </div>
                    <h4 className="mb-2 block font-sans  md:text-base lg:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {Title}
                    </h4>
                    <p style={priceStyle} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                       {Price}
                    </p>
                    <a className="inline-block" href="#">
                        <button style={btnColor}
                            className="flex select-none items-center gap-2 text-white rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            View Details
                         
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;