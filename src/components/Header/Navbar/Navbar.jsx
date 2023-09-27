import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <nav className=" flex  flex-col md:flex-row lg:flex-row gap-5  justify-between py-5 px-10">
            <img className="w-42 h-10" src="https://i.ibb.co/SnTVMFT/Logo.png" alt="" />
               
                <ul className="flex gap-11">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                    isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            <h1 className=" sm:text-lg lg:text-xl"> Home</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donations"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                    isActive ? "text-[#FF444A] underline" : ""
                            }
                        >

                            <h1 className=" sm:text-lg lg:text-xl"> Donation</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                    isActive ? "text-[#FF444A] underline" : ""
                            }
                        >

                            <h1 className="  sm:text-lg lg:text-xl"> Statistics</h1>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;