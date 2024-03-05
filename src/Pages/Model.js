import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import ModelCard from "../Components/Card";
import { SearchIcon, MenuIcon } from "@heroicons/react/solid";

const Model = () => {
  const [models, setModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modelsPerPage] = useState(15);
  const { category, subcategory } = useParams();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        let url = `https://ai-model-backend-laom3xzyu-aaaa760.vercel.app/api/models`;
        if (category) {
          url += `/category/${category}`;
          if (subcategory) {
            url += `/subcategory/${subcategory}`;
          }
        }
        const response = await axios.get(url);
        setModels(response.data);
        setFilteredModels(response.data);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchModels();
  }, [category, subcategory]);

  useEffect(() => {
    const results = models.filter((model) =>
      model.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredModels(results);
    setCurrentPage(1);
  }, [searchTerm, models]);

  const indexOfLastModel = currentPage * modelsPerPage;
  const indexOfFirstModel = indexOfLastModel - modelsPerPage;
  const currentModels = filteredModels.slice(
    indexOfFirstModel,
    indexOfLastModel
  );

  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative sm:flex h-fit-content">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onItemClick={toggleSidebar}
      />
      <div
        className={`flex-1 p-4 mb-4 ${
          isSidebarOpen ? "hidden" : "block"
        } sm:block`}
      >
        <div className="relative flex justify-between sm:justify-end">
          <div className="sm:hidden">
            <MenuIcon onClick={toggleSidebar} className="h-10 w-10">
              Toggle Sidebar
            </MenuIcon>
          </div>
          <div className="relative">
            <SearchIcon className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search models..."
              type="text"
              name="search"
              id="search"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
        <div className="flex justify-center m-4">
          <nav>
            <ul className="flex list-none">
              {Array.from(
                { length: Math.ceil(models.length / modelsPerPage) },
                (_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => paginate(i + 1)}
                      className={`p-3 m-1 sm:px-4 sm:py-2 sm:mx-1 rounded-lg ${
                        currentPage === i + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white border border-gray-300"
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Model;
