import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCasts, getCastVideos } from '../api';

const CastPage = () => {
  const [casts, setCasts] = useState([]);
  const [selectedCast, setSelectedCast] = useState(null);
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getCasts().then(response => setCasts(response.data));
  }, []);

  const handleCastSelect = (castId) => {
    setSelectedCast(castId);
    getCastVideos(castId).then(response => setVideos(response.data));
  };

  const filteredCasts = filter
    ? casts.filter(cast => cast.name.toLowerCase().startsWith(filter.toLowerCase()))
    : casts;

  return (
    <div>
      <h1>Casts</h1>
      <input 
        type="text" 
        placeholder="Filter by name..." 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <div className="cast-list">
        {filteredCasts.map(cast => (
          <div key={cast._id} onClick={() => handleCastSelect(cast._id)}>
            <img src={cast.profile_picture} alt={cast.name} />
            <h3>{cast.name}</h3>
          </div>
        ))}
      </div>

      {selectedCast && (
        <div>
          <h2>Videos of {selectedCast}</h2>
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

export default CastPage;
