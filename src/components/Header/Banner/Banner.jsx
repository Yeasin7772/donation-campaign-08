

const Banner = () => {
    return (
        <div className="h-[70vh] bg-green-300">
            <div className="hero h-[70vh] bg-white" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl text-[#0B0B0B] font-bold py-10">I Grow By Helping People In Need</h1>
                        <input type="text" placeholder="Search here...." className="input bg-white  w-full max-w-xs" />
                        <button className="btn btn-ghost text-white bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;