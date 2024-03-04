import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DownloadIcon } from "@heroicons/react/outline";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/solid";

const ModelCard = ({ model }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
   
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(model.id));
  }, [model.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(model.id)) {
      favorites = favorites.filter((favId) => favId !== model.id);
    } else {
      favorites.push(model.id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const trimDescription = (description) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  return (
    <Link to={`/models/detail/${model.id}`} className="no-underline">
    <div className="border border-gray-300 rounded-lg p-5 m-2 shadow-sm bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out relative">
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <StarSolidIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <StarOutlineIcon className="h-6 w-6 text-gray-400" />
        )}
      </button>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <span className="font-bold text-lg block">{model.name}</span>
        <span className="text-gray-600 text-sm">
          {model.provider} · {model.name}
        </span>
      </div>
      <div className="text-base text-gray-600 mb-2 flex-grow">
        <span>{trimDescription(model.description)}</span>
      </div>
      <div className="border-t border-gray-300 pt-2 mt-2 flex items-center">
        <DownloadIcon className="h-5 w-5 mr-2" />
        <span className="font-bold text-sm">
          {model.usageCount.toLocaleString()}
        </span>
      </div>
    </div>
    </Link>
  );
};

export default ModelCard;