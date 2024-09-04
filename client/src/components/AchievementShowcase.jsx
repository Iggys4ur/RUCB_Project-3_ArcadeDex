// src/components/AchievementShowcase.jsx

import React from 'react';

const AchievementShowcase = ({ achievements }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index} className="mb-2">
                        {achievement.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AchievementShowcase;
