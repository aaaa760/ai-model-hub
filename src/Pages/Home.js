import React from "react";
import illustration from "../Assets/Images/1.webp";

const HomePage = () => {
  return (
    <div className="container mx-auto flex items-start justify-center min-h-screen py-24 px-8">
      <div className="flex flex-wrap md:flex-nowrap">
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
          <button className="bg-black text-white text-lg rounded-full py-2 px-8 hover:bg-opacity-90 transition duration-300 ease-in-out">
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
    </div>
  );
};

export default HomePage;
