import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { ClipboardCopyIcon } from "@heroicons/react/outline";

const ModelDetail = () => {
  const [modelDetail, setModelDetail] = useState(null);
  const [inputValue, setInputValue] = useState(""); // Added state for inputValue
  const { id } = useParams(); 


  useEffect(() => {
    const fetchModelDetail = async () => {
      try {
        const response = await axios.get(
          `https://ai-model-backend-aaaa760.vercel.app/api/models/${id}`
        );
        setModelDetail(response.data);
      } catch (error) {
        console.error("Error fetching model details:", error);
      }
    };

    fetchModelDetail();
  }, [id]);

  const handleTryItOut = (input) => {
    console.log("Trying out the model with input:", input);
  };

  const handleInputChange = (e) => {
    // Handler for input change
    setInputValue(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {modelDetail ? (
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter input for the model"
              className="flex-1 p-2 border rounded-md"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => handleTryItOut(inputValue)}
            >
              Try it out
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ModelDetail;
