import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getCategoryVideos } from '../api';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getCategories().then(response => setCategories(response.data));
  }, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    getCategoryVideos(categoryId).then(response => setVideos(response.data));
  };

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map(category => (
          <div key={category._id} onClick={() => handleCategorySelect(category._id)}>
            <img src={category.thumbnail} alt={category.name} />
            <h3>{category.name}</h3>
            <p>Views: {category.views}</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div>
          <h2>Videos in {selectedCategory}</h2>
          {videos.map(video => (
            <Link key={video._id} to={`/video/${video._id}`}>
              <div>
                <img src={video.thumbnail} alt={video.title} />
                <h3>{video.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
