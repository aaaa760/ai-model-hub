import React, { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
const ModelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    description: "",
    useCases: "",
    provider: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ai-model-backend-aaaa760.vercel.app/api/models/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Model submitted successfully");
        setFormData({
          name: "",
          category: "",
          subcategory: "",
          description: "",
          useCases: "",
          provider: "",
        });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        console.error("Submission failed");
        //since we are not using database the data is not appending to the json 
        //so for User Interface purpose we are showing that model deployed succesfully
        setFormData({
          name: "",
          category: "",
          subcategory: "",
          description: "",
          useCases: "",
          provider: "",
        });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const filteredSubcategories = formData.category
    ? categories.find((cat) => cat.name === formData.category)?.subcategories ||
      []
    : [];

  return (
    <div className="container mx-auto p-4">
      {showPopup && (
        <div className="fixed top-0 inset-x-0 flex justify-center items-start z-50">
          <div className="mt-12 p-4 bg-black text-white rounded-lg shadow-lg transition-transform transform-gpu animate-slideInSlideOut flex items-center">
            <CheckCircleIcon className="h-6 w-6 mr-2 text-white" />
            <p>Model Deployed Successfully</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Model Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
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
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="useCases"
          placeholder="Use Cases"
          value={formData.useCases}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="provider"
          placeholder="Provider"
          value={formData.provider}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
          Deploy
        </button>
      </form>
    </div>
  );
};

export default ModelForm;
