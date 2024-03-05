import React, { useEffect, useState } from "react";
import illustration from "../Assets/Images/1.webp";
import { useNavigate } from "react-router-dom";
import ModelCard from "../Components/Card";
import axios from "axios";
import { ArrowRightIcon } from "@heroicons/react/solid";
const HomePage = () => {
  const navigate = useNavigate();
  const [topModels, setTopModels] = useState([]);

  const handleExploreNowClick = () => {
    navigate("/models");
  };

  useEffect(() => {
    const fetchTopModels = async () => {
      try {
        const response = await axios.get(
          "https://ai-model-backend-laom3xzyu-aaaa760.vercel.app/api/models"
        );
        const sortedModels = response.data.sort(
          (a, b) => b.usageCount - a.usageCount
        );
        setTopModels(sortedModels.slice(0, 4)); // Get top 4 models
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchTopModels();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-24 px-6">
      <div className="flex flex-wrap md:flex-nowrap mb-12">
        <div className="flex-1 self-center">
          <h1 className="text-5xl font-bold mb-4">
            Dive into the World of AI with AI Models Hub
          </h1>
          <p className="mb-6 text-gray-600 text-lg">
            Explore the cutting-edge of AI at AI Models Hub, a platform for
            discovering and interacting with the latest, production-grade AI
            models from developers and organizations worldwide. Elevate your
            work, learning, and creativity with technology that's shaping the
            future.
          </p>
          <button
            onClick={handleExploreNowClick}
            className="bg-black text-white text-lg rounded-full py-2 px-8 hover:bg-opacity-90 transition duration-300 ease-in-out"
          >
            Explore Now
          </button>
        </div>
        <div className="w-full md:w-auto md:flex-1 self-start">
          <img
            src={illustration}
            alt="AI and ML Community"
            className="max-w-sm mx-auto md:ml-12 lg:ml-36"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Trending AI Innovations</h2>
          <button
            onClick={handleExploreNowClick}
            className="flex items-center text-sm font-medium text-black hover:text-black"
          >
            <ArrowRightIcon className="ml-2 h-4 w-4" />
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {topModels.map((model) => (
            <div key={model.id} className="px-2">
              <ModelCard model={model} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
