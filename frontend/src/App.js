import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoGallery from './components/VideoGallery';
import VideoPage from './components/VideoPage';
import CategoryPage from './components/CategoryPage';
import CastPage from './components/CastPage';
import ChannelPage from './components/ChannelPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<VideoGallery />} /> {/* Home Page */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/videos/:id" element={<VideoPage />} />
                <Route path="/categories" element={<CategoryPage />} />
                <Route path="/casts" element={<CastPage />} />
                <Route path="/channels" element={<ChannelPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
