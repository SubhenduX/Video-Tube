import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = ({ token }) => {
  // State for adding new video
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [iframe_url, setIframeUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [runtime, setRuntime] = useState('');
  const [category, setCategory] = useState('');
  const [cast, setCast] = useState('');
  const [channel, setChannel] = useState('');

  // State for adding new category
  const [categoryName, setCategoryName] = useState('');
  const [categoryThumbnail, setCategoryThumbnail] = useState('');

  // State for adding new cast
  const [castName, setCastName] = useState('');
  const [castProfilePicture, setCastProfilePicture] = useState('');

  // State for adding new channel
  const [channelName, setChannelName] = useState('');
  const [channelLogo, setChannelLogo] = useState('');

  // Function to handle adding a new video
  const handleAddVideo = (e) => {
    e.preventDefault();
    const videoData = { title, description, iframe_url, thumbnail, runtime, category, cast, channel };
    axios.post('/api/admin/videos', videoData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => console.log('Video added:', response.data))
    .catch(error => console.error('Error adding video:', error));
  };

  // Function to handle adding a new category
  const handleAddCategory = (e) => {
    e.preventDefault();
    const categoryData = { name: categoryName, thumbnail: categoryThumbnail };
    axios.post('/api/admin/categories', categoryData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => console.log('Category added:', response.data))
    .catch(error => console.error('Error adding category:', error));
  };

  // Function to handle adding a new cast
  const handleAddCast = (e) => {
    e.preventDefault();
    const castData = { name: castName, profile_picture: castProfilePicture };
    axios.post('/api/admin/casts', castData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => console.log('Cast added:', response.data))
    .catch(error => console.error('Error adding cast:', error));
  };

  // Function to handle adding a new channel
  const handleAddChannel = (e) => {
    e.preventDefault();
    const channelData = { name: channelName, logo: channelLogo };
    axios.post('/api/admin/channels', channelData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(response => console.log('Channel added:', response.data))
    .catch(error => console.error('Error adding channel:', error));
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Form to add new video */}
      <form onSubmit={handleAddVideo}>
        <h2>Add New Video</h2>
        <input 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Iframe URL" 
          value={iframe_url}
          onChange={(e) => setIframeUrl(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Thumbnail URL" 
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Runtime (in minutes)" 
          value={runtime}
          onChange={(e) => setRuntime(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Category ID" 
          value={category}
          onChange={(e) => setCategory(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Cast ID" 
          value={cast}
          onChange={(e) => setCast(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Channel ID" 
          value={channel}
          onChange={(e) => setChannel(e.target.value)} 
        />
        <button type="submit">Add Video</button>
      </form>

      {/* Form to add new category */}
      <form onSubmit={handleAddCategory}>
        <h2>Add New Category</h2>
        <input 
          type="text" 
          placeholder="Category Name" 
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Category Thumbnail URL" 
          value={categoryThumbnail}
          onChange={(e) => setCategoryThumbnail(e.target.value)} 
        />
        <button type="submit">Add Category</button>
      </form>

      {/* Form to add new cast */}
      <form onSubmit={handleAddCast}>
        <h2>Add New Cast</h2>
        <input 
          type="text" 
          placeholder="Cast Name" 
          value={castName}
          onChange={(e) => setCastName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Cast Profile Picture URL" 
          value={castProfilePicture}
          onChange={(e) => setCastProfilePicture(e.target.value)} 
        />
        <button type="submit">Add Cast</button>
      </form>

      {/* Form to add new channel */}
      <form onSubmit={handleAddChannel}>
        <h2>Add New Channel</h2>
        <input 
          type="text" 
          placeholder="Channel Name" 
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Channel Logo URL" 
          value={channelLogo}
          onChange={(e) => setChannelLogo(e.target.value)} 
        />
        <button type="submit">Add Channel</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
