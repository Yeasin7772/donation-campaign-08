import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className=" flex   justify-between py-5 px-10">
                <Logo></Logo>
               
                <ul className="flex gap-11">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" :
                                    isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            <h1 className=" text-xl"> Home</h1>
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

                            <h1 className=" text-xl"> Donation</h1>
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

                            <h1 className=" text-xl"> Statistics</h1>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;