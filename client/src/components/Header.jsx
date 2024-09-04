// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ArcadeDex</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/profile" className="hover:text-gray-200">Profile</Link>
          <Link to="/settings" className="hover:text-gray-200">Settings</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
