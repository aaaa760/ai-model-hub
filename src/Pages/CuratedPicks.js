import React, { useState, useEffect } from "react";
import axios from "axios";
import ModelCard from "../Components/Card";
import Sidebar from "../Components/Sidebar";
import { RefreshIcon } from "@heroicons/react/outline";

const CuratedModels = () => {
  const [curatedModels, setCuratedModels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsLoading(true);

    const fetchCuratedModels = async () => {
      try {
        const response = await axios.get(
          "https://ai-model-backend-aaaa760.vercel.app/api/models/"
        );
        const favoriteModels = response.data.filter((model) =>
          favoriteIds.includes(model.id)
        );
        setCuratedModels(favoriteModels);
      } catch (error) {
        console.error("Error fetching curated models:", error);
      }
      setIsLoading(false);
    };

    fetchCuratedModels();
  }, []);

  return (
    <div className="flex h-fit-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
          {isLoading ? (
            <>
            <span></span>
            <div className="flex justify-center items-center h-screen">
              <RefreshIcon className="animate-spin h-12 w-12 text-blue-500" />
            </div>
            </>
          ) : curatedModels.length > 0 ? (
            curatedModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))
          ) : (
            <>
            <span></span>
            <div className="text-center flex flex-col items-center justify-center h-full">
              <p className="text-xl md:text-3xl font-semibold text-gray-600 mb-2">
                No Curated Picks to Display
              </p>
              <p className="text-md text-gray-500">
                Explore and add models to your favorites
              </p>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CuratedModels;
