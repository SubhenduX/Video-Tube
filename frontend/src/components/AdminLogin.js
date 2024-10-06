import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/admin/login', { username, password })
      .then(response => setToken(response.data.token))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Admin Login</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdminLogin;
