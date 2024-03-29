import React, { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
const ModelForm = ({ onModelSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    description: "",
    useCases: "",
    provider: "",
    githublink: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const isAnyFieldEmpty = Object.values(formData).some(
      (field) => field === ""
    );
    setIsFormValid(!isAnyFieldEmpty);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onModelSubmit(formData);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    setFormData({
      name: "",
      category: "",
      subcategory: "",
      description: "",
      useCases: "",
      provider: "",
      githublink: "",
    });
  };

  const filteredSubcategories = formData.category
    ? categories.find((cat) => cat.name === formData.category)?.subcategories ||
      []
    : [];

  return (
    <div className="container mx-auto p-4 h-full">
      {showPopup && (
        <div className="fixed top-0 inset-x-0 flex justify-center items-start z-50">
          <div className="mt-12 p-4 bg-black text-white rounded-lg shadow-lg transition-transform transform-gpu animate-slideInSlideOut flex items-center">
            <CheckCircleIcon className="h-6 w-6 mr-2 text-white" />
            <p>Model Deployed Successfully</p>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 h-full items-center"
      >
        <h1 className="font-bold text-xl">Show your Model to the World!</h1>
        <div className="w-full flex flex-col items-start gap-2">
          <label className="font-medium text-base">Model Name</label>
          <input
            type="text"
            name="name"
            placeholder="Model Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex w-full gap-2">
          <div className="w-full flex flex-col items-start gap-2">
            <label className="font-medium text-base">Select Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <label className="font-medium text-base">Select Subcategory</label>
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              disabled={!formData.category}
            >
              <option value="">Select Subcategory</option>
              {filteredSubcategories.map((subCat) => (
                <option key={subCat} value={subCat}>
                  {subCat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-2 flex-1">
          <label className="font-medium text-base">Model Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded flex-1"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2 flex-1">
          <label className="font-medium text-base">Model Use Cases</label>
          <textarea
            name="useCases"
            placeholder="Use Cases"
            value={formData.useCases}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded flex-1"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label className="font-medium text-base">Model Provider</label>
          <input
            type="text"
            name="provider"
            placeholder="Provider"
            value={formData.provider}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <label className="font-medium text-base">GitHub Repo of Model (link)</label>
          <input
            type="url"
            name="githublink"
            placeholder="github link"
            value={formData.githublink}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded w-fit"
        >
          Deploy
        </button>
      </form>
    </div>
  );
};

export default ModelForm;
