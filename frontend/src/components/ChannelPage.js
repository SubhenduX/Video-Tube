import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getChannels, getChannelVideos } from '../api';

const ChannelPage = () => {
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getChannels().then(response => setChannels(response.data));
  }, []);

  const handleChannelSelect = (channelId) => {
    setSelectedChannel(channelId);
    getChannelVideos(channelId).then(response => setVideos(response.data));
  };

  return (
    <div>
      <h1>Channels</h1>
      <div className="channel-list">
        {channels.map(channel => (
          <div key={channel._id} onClick={() => handleChannelSelect(channel._id)}>
            <img src={channel.logo} alt={channel.name} />
            <h3>{channel.name}</h3>
          </div>
        ))}
      </div>

      {selectedChannel && (
        <div>
          <h2>Videos in {selectedChannel}</h2>
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

export default ChannelPage;
