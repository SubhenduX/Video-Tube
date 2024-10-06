import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this to match your backend URL

export const getVideos = (page) => axios.get(`${API_URL}/videos?page=${page}`);
export const getVideoById = (id) => axios.get(`${API_URL}/videos/${id}`);
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const getCategoryVideos = (categoryId) => axios.get(`${API_URL}/categories/${categoryId}/videos`);
export const getCasts = () => axios.get(`${API_URL}/casts`);
export const getCastVideos = (castId) => axios.get(`${API_URL}/casts/${castId}/videos`);
export const getChannels = () => axios.get(`${API_URL}/channels`);
export const getChannelVideos = (channelId) => axios.get(`${API_URL}/channels/${channelId}/videos`);
