import React from "react";
import { NavLink } from "@remix-run/react";
import logo from "~/images/logo.png";

export default function NavBar() {
  return (
    <div className="bg-stone-100 sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 px-8 md:hidden">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <div className="flex space-x-4">
          <NavLink to="/" className="text-gray hover:text-gray-800">
            Home
          </NavLink>
          <NavLink to="/#projects" className="text-gray hover:text-gray-800">
            Projects
          </NavLink>
          <NavLink to="/team" className="text-gray hover:text-gray-800">
            Our Team
          </NavLink>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between p-4 px-8 bg-stone-100">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <div className="flex space-x-4">
          <NavLink to="/" className="text-gray hover:text-gray-800">
            Home
          </NavLink>
          <NavLink to="/#projects" className="text-gray hover:text-gray-800">
            Projects
          </NavLink>
          {/* <NavLink to="/about" className="text-gray hover:text-gray-800">
            About
          </NavLink> */}
          <NavLink to="/team" className="text-gray hover:text-gray-800">
            Our Team
          </NavLink>
        </div>
      </div>
    </div>
  );
}
