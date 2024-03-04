import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModelCard from '../Components/Card';

import Sidebar from '../Components/Sidebar';

const CuratedModels = () => {
  const [curatedModels, setCuratedModels] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];

    const fetchCuratedModels = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/models');
        const favoriteModels = response.data.filter(model => 
          favoriteIds.includes(model.id)
        );
        setCuratedModels(favoriteModels);
      } catch (error) {
        console.error('Error fetching curated models:', error);
      }
    };

    fetchCuratedModels();
  }, []);

  return (

<div className='flex h-screen'>
<Sidebar />
<div className="flex-1 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {curatedModels.length > 0 ? (
          curatedModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))
        ) : (
          <p>No curated picks to display.</p>
        )}
      </div>
    </div>
</div>


  );
};

export default CuratedModels;
