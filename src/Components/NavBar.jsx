import React from "react";
import { Link } from "react-router-dom";
import {
  CubeIcon,
  StarIcon,
  CloudUploadIcon,
} from "@heroicons/react/solid";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <Link to="/" className="text-customBlue font-anta text-3xl mb-4 md:mb-0 text-center">
          ai model hub
        </Link>
        <nav className="flex flex-row space-x-6 md:flex-row items-center md:space-x-6">
          <Link
            to="/models"
            className="text-base font-medium text-gray-600 hover:text-gray-900 flex items-center space-x-2 mb-2 md:mb-0"
          >
            <CubeIcon className="h-5 w-5" />
            <span>Models</span>
          </Link>
          <Link
            to="/curated"
            className="text-base font-medium text-gray-600 hover:text-gray-900 flex items-center space-x-2 mb-2 md:mb-0"
          >
            <StarIcon className="h-5 w-5" />
            <span>Curated Picks</span>
          </Link>
          <Link
            to="/add-model"
            className="text-base font-medium text-gray-600 hover:text-gray-900 flex items-center space-x-2 mb-2 md:mb-0"
          >
            <CloudUploadIcon className="h-5 w-5" />
            <span>Deploy a Model</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
