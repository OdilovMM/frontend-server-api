import { IoIosHeartEmpty } from "react-icons/io";
import { BiCartAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <nav className=" bg-base-200">
      <div className="navbar make-center">
        <div className="navbar-start">
          {/*  */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center "
          >
            <span className="text-2xl text-accent">Estor</span>
          </NavLink>
          {/* dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <IoIosHeartEmpty className="h-6 w-6" color="blue" />
              <span className="badge badge-sm badge-primary indicator-item">
                2
              </span>
            </div>
          </NavLink>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BiCartAlt className="h-6 w-6" color="blue" />
              <span className="badge badge-sm badge-primary indicator-item">
                5
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
