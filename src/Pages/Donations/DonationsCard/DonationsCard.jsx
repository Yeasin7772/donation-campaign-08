
import { Link } from 'react-router-dom';

const DonationsCard = ({ donation }) => {
    const { id, img, name, Title, Category_bg_color, Card_bg_color, Text_button_bg_color, Description, Price } = donation || {};


    const backgroundStyle = {
        background: Category_bg_color,
    }
    const priceStyle = {
        color: Card_bg_color,
    };



    return (

        <Link to={`/donation/${id}`}>
            <div style={backgroundStyle} className="relative flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative   overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={img}
                        className="h-40 w-full object-cover"
                        alt={name}
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p style={{ ...priceStyle, ...backgroundStyle }}
                            className="block font-sans text-base font-medium leading-relaxed px-4 border antialiased">
                            {name}
                        </p>
                      
                    </div>
                    <p style={priceStyle} className="block font-sans text-xl font-semibold leading-normal antialiased opacity-75">
                        {Title}
                    </p>

                </div>
            </div>
        </Link>
    );
};

export default DonationsCard;
