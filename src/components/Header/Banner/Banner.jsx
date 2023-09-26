

const Banner = () => {
    return (
      
        <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/2NNRxN2/Rectangle-4281.png)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                <h1 className=" sm:text-3xl md:text-4xl lg:text-5xl text-[#0B0B0B] font-bold py-10">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center">
                       <input type="text" placeholder="Search here...." className="input input-bordered w-full max-w-xs" />

                      <button className="btn  text-white bg-[#FF444A]">Search</button>
                       </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;