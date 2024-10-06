import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoById } from '../api';

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideoById(id).then((response) => {
      setVideo(response.data);
    }).catch(err => console.log(err));
  }, [id]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h1>{video.title}</h1>
      <iframe src={video.iframe_url} width="600" height="400" title={video.title}></iframe>
      <p>{video.description}</p>
      <img src={video.thumbnail} alt={video.title} />
      <p>Runtime: {video.runtime} mins</p>
      <p>Views: {video.views}</p>
      <p>Likes: {video.likes}</p>
      <p>Dislikes: {video.dislikes}</p>
      <p>Channel: {video.channel?.name}</p>
      <p>Category: {video.category?.name}</p>
      <p>Cast: {video.cast?.map(c => c.name).join(', ')}</p>
    </div>
  );
};

export default VideoPage;
