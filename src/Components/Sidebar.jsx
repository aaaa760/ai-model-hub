import React from "react";
import NotesIcon from "../Assets/svg/Notes.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const categories = [
    {
      name: "Multimodal",
      subcategories: [
        "Image-Text-to-Text",
        "Visual Question Answering",
        "Document Question Answering",
      ],
    },
    {
      name: "Computer Vision",
      subcategories: [
        "Depth Estimation",
        "Image Classification",
        "Object Detection",
        "Image Segmentation",
        "Text-to-Image",
        "Image-to-Text",
        // "Image-to-Image",
        // "Image-to-Video",
        // "Unconditional Image Generation",
        // "Video Classification",
        // "Text-to-Video",
        // "Zero-Shot Image Classification",
        // "Mask Generation",
        // "Zero-Shot Object Detection",
        // "Text-to-3D",
        // "Image-to-3D",
        // "Image Feature Extraction",
      ],
    },
    {
      name: "Natural Language Processing",
      subcategories: [
        "Text Classification",
        "Token Classification",
        "Table Question Answering",
        "Question Answering",
        // "Zero-Shot Classification",
        // "Translation",
        // "Summarization",
        // "Feature Extraction",
        // "Text Generation",
        // "Text2Text Generation",
        // "Fill-Mask",
        // "Sentence Similarity",
      ],
    },
    {
      name: "Audio",
      subcategories: [
        "Text-to-Speech",
        "Text-to-Audio",
        "Automatic Speech Recognition",
        "Audio-to-Audio",
        // "Audio Classification",
        // "Voice Activity Detection",
      ],
    },
    {
      name: "Tabular",
      subcategories: ["Tabular Classification", "Tabular Regression"],
    },
    {
      name: "Reinforcement Learning",
      subcategories: ["Reinforcement Learning", "Robotics"],
    },
    {
      name: "Others",
      subcategories: ["Graph Machine Learning"],
    },
  ];

  const navigateToModels = (category, subcategory = "") => {
    navigate(`/models/${category}/${subcategory}`);
  };

  return (
    <div
      className=" absolute   sm:sticky top-0 flex flex-col w-1/4 bg-gradient-to-l from-gray-50 to-white text-black py-8 p-3"
      style={{ minHeight: "150vh" }}
    >
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <div
            className="text-sm font-medium text-gray-500 px-4 mb-2"
            onClick={() => navigateToModels(category.name)}
          >
            {category.name}
          </div>
          <div className="px-4 flex flex-wrap gap-2 p-2 mb-4">
            {category.subcategories.map((subcategory, subIndex) => (
              <button
                key={subIndex}
                onClick={() => navigateToModels(category.name, subcategory)}
                className="flex items-center bg-white text-gray-700 rounded-md border-2 border-customBlue border-opacity-30 my-2 px-2 py-1 text-xs"
              >
                <img
                  src={NotesIcon}
                  alt={subcategory}
                  className="h-3 w-3 mr-2"
                />
                <span className="text-xs font-medium">{subcategory}</span>
              </button>
             

            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
