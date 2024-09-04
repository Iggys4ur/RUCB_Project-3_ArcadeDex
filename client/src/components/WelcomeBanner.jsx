// src/components/WelcomeBanner.jsx

import React from 'react';

const WelcomeBanner = ({ user }) => {
    return (
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold">Welcome, {user.name}!</h2>
            <p className="mt-2">We are glad to have you back. Check out your latest achievements and see what your friends are up to!</p>
        </div>
    );
};

export default WelcomeBanner;
