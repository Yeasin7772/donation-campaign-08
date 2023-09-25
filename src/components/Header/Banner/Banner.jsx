

const Banner = () => {
    return (
        <div className="h-[70vh]">
            <div className="hero h-[70vh] bg-opacity-100" style={{backgroundImage: 'url(https://i.ibb.co/2NNRxN2/Rectangle-4281.png)'}}>
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