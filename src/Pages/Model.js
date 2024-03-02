import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import ModelCard from '../Components/Card';

const Model = () => {
  const [models, setModels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modelsPerPage] = useState(10);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/models');
        setModels(response.data);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    };

    fetchModels();
  }, []);

  const indexOfLastModel = currentPage * modelsPerPage;
  const indexOfFirstModel = indexOfLastModel - modelsPerPage;
  const currentModels = models.slice(indexOfFirstModel, indexOfLastModel);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentModels.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="flex list-none">
              {Array.from({ length: Math.ceil(models.length / modelsPerPage) }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-4 py-2 mx-1 rounded-lg ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'}`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Model;
