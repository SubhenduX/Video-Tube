import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoGallery from './components/VideoGallery';
import VideoPage from './components/VideoPage';
import CategoryPage from './components/CategoryPage';
import CastPage from './components/CastPage';
import ChannelPage from './components/ChannelPage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={VideoGallery} />
        <Route path="/video/:id" exact component={VideoPage} />
        <Route path="/categories" exact component={CategoryPage} />
        <Route path="/casts" exact component={CastPage} />
        <Route path="/channels" exact component={ChannelPage} />
        <Route path="/admin/login" exact component={AdminLogin} />
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
