import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuthStore } from "../contentStore/authStore";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthStore();
  const handleSignOut = () => {
    console.log("Heyyyy");
    logout();
  };
  return (
    <>
      <nav className="bg-gray-900 text-white shadow-md py-6">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-green-400 ml-11">
            Debadarsana Consultant Pvt.ltd
          </div>

          {/* Desktop Menu */}
          <ul className="flex  space-x-6 text-md font-semibold mr-36">
            <NavLink
              to={"/"}
              className="hover:text-green-400 transition-all ease-in-out duration-300 hover:scale-110"
            >
              Home
            </NavLink>
            <NavLink
              to={"/optimization"}
              className="hover:text-green-400 transition-all ease-in-out duration-300 hover:scale-110"
            >
              Optimization
            </NavLink>
            <NavLink className="hover:text-green-400 transition-all ease-in-out duration-300 hover:scale-110">
              Suppliers
            </NavLink>
            <NavLink to={'/reports'} className="hover:text-green-400 transition-all ease-in-out duration-300 hover:scale-110">
              Reports
            </NavLink>
            <li className="hover:text-green-400 transition-all ease-in-out duration-300 hover:scale-110">
              Contact
            </li>
          </ul>
          <button
            onClick={handleSignOut}
            className=" absolute right-7 bg-red-700 hover:bg-red-800 p-1 rounded-4xl px-4"
          >
            Signout
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2 text-center">
            <li>
              <a href="#" className="block py-2 hover:text-green-400">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-green-400">
                Optimization
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-green-400">
                Suppliers
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-green-400">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default NavBar;
