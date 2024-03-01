import React from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  CubeIcon,
  StarIcon,
  CloudUploadIcon,
} from "@heroicons/react/solid";

const NavBar = () => {
  return (
    <header className="bg-white  py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-customBlue font-anta text-3xl">
          ai model hub
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/models"
              className="text-base font-medium text-gray-600 hover:text-gray-900 flex items-center space-x-2"
            >
              <CubeIcon className="h-5 w-5" />
              <span>Models</span>
            </Link>
            <Link
              to="/curated-picks"
              className="text-base font-medium text-gray-600 hover:text-gray-900 flex items-center space-x-2"
            >
              <StarIcon className="h-5 w-5" />
              <span>Curated Picks</span>
            </Link>
            <Link
              to="/deploy"
              className="text-base font-medium text-gray-600 hover:text-gray-900 flex items-center space-x-2"
            >
              <CloudUploadIcon className="h-5 w-5" />
              <span>Deploy a Model</span>
            </Link>
          </nav>
          <div className="relative">
            <SearchIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              type="search"
              placeholder="Search models..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
