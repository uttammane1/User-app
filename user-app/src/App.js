import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailPage from "./pages/UserDetailPage";
import { UserProvider } from "./context/UserContext";
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <UserProvider>
      <div className={darkMode ? "app dark-mode" : "app light-mode"}>
        <Router>
          <header className="header">
            <button className="toggle-button" onClick={toggleTheme}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
};

export default App;
