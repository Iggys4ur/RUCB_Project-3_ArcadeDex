// src/components/FriendActivityFeed.jsx

import React from 'react';

const FriendActivityFeed = ({ activities }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Friend Activity</h3>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index} className="mb-2">
                        {activity.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendActivityFeed;
