import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks= <>
    <NavLink to="/"><li><a>Home</a></li></NavLink>
    <NavLink to="/allCraft"><li><a>All Arts & Crafts</a></li></NavLink>
    <NavLink to="/addCraft"><li><a>Add Craft Item</a></li></NavLink>
    <NavLink to="/myCraft"><li><a>My Art&Craft List</a></li></NavLink>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className="font-bold text-5xl Rancho text-[#4f7942]">Maple</span><sub className="text-md">whisper</sub></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to="/register"><button className="btn">Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;