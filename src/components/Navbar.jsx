import { IoIosHeartEmpty } from "react-icons/io";
import { BiCartAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  acid: "acid",
  dracula: "dracula",
};

const getThemeLocalStorage = () => {
  return localStorage.getItem("theme") || theme.acid;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeLocalStorage);

  const changeTheme = () => {
    const { acid, dracula } = themes;
    const newTheme = theme === acid ? dracula : acid;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={changeTheme} className="hidden" />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <IoIosHeartEmpty className="h-6 w-6" color="white" />
              <span className="badge badge-sm badge-primary indicator-item">
                2
              </span>
            </div>
          </NavLink>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BiCartAlt className="h-6 w-6" color="white" />
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
