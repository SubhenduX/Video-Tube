import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get(`/api/videos?page=${page}`)
      .then(response => {
        setVideos(response.data.videos);
        setTotalPages(response.data.totalPages); // Update total pages from API response
      })
      .catch(error => console.log(error));
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>Video Gallery</h1>
      <div className="video-gallery">
        {videos.map(video => (
          <div key={video._id} className="video-item">
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
      <Pagination 
        currentPage={page} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default VideoGallery;
