import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormAction from './components/FormAction';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (formData) => {
    // Generate a unique ID for the new user
    const newUserId = users.length + 1;

    // Create a new user object
    const newUser = {
      id: newUserId,
      ...formData,
    };

    // Update the users list
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route
            path="/form"
            element={<FormAction onFormSubmit={handleFormSubmit} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
