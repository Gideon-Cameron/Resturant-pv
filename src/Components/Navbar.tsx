import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/meenes-logo.png";

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `relative text-sm font-medium transition-all duration-300 ${
      location.pathname === path
        ? "text-[#67C24A]"
        : "text-white hover:text-[#67C24A]"
    }`;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#05070A]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo}
              alt="Meeny's Kitchen & Grill Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link to="/menu" className={linkClass("/menu")}>
              Menu
            </Link>

            <Link to="/help" className={linkClass("/help")}>
              Help
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;