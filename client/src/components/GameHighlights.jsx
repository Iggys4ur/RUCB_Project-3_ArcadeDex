// src/components/GameHighlights.jsx

import React from 'react';

const GameHighlights = ({ games }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Game Highlights</h3>
            <ul>
                {games.map((game, index) => (
                    <li key={index} className="mb-2">
                        {game.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameHighlights;
