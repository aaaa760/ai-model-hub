import React from "react";
import NotesIcon from "../Assets/svg/Notes.svg"; // Replace with actual SVG path

const Sidebar = () => {
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
        "Image-to-Image",
        "Image-to-Video",
        "Unconditional Image Generation",
        "Video Classification",
        "Text-to-Video",
        "Zero-Shot Image Classification",
        "Mask Generation",
        "Zero-Shot Object Detection",
        "Text-to-3D",
        "Image-to-3D",
        "Image Feature Extraction",
      ],
    },
    {
      name: "Natural Language Processing",
      subcategories: [
        "Text Classification",
        "Token Classification",
        "Table Question Answering",
        "Question Answering",
        "Zero-Shot Classification",
        "Translation",
        "Summarization",
        "Feature Extraction",
        "Text Generation",
        "Text2Text Generation",
        "Fill-Mask",
        "Sentence Similarity",
      ],
    },
    {
      name: "Audio",
      subcategories: [
        "Text-to-Speech",
        "Text-to-Audio",
        "Automatic Speech Recognition",
        "Audio-to-Audio",
        "Audio Classification",
        "Voice Activity Detection",
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

  return (
    <div
      className="sticky top-0 flex flex-col w-1/3 bg-gradient-to-l from-gray-50 to-white text-black py-8 pl-20"
      style={{ minHeight: "250vh" }}
    >
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <div className="text-sm font-medium text-gray-500 px-4 mb-2">
            {category.name}
          </div>
          <div className="px-4 flex flex-wrap gap-2 p-2 mb-4 overflow-x-auto">
            {category.subcategories.map((subcategory, subIndex) => (
              <button
                key={subIndex}
                className="flex items-center bg-gradient-to-r from-stone-100 to-white text-gray-700 rounded-md border-2 border-gray-200 my-2 px-2 py-1 text-xs"
                style={{ flex: "0 0 auto" }}
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
