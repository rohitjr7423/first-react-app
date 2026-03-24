import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-white text-xl font-bold">MyApp</h1>

        {/* Links */}
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/connect"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Connect
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;