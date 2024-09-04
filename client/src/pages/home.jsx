// src/pages/home.jsx

import React from 'react';
import { useQuery } from '@apollo/client';
import Header from '../components/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import AchievementShowcase from '../components/AchievementShowcase';
import GameHighlights from '../components/GameHighlights';
import FriendActivityFeed from '../components/FriendActivityFeed';
import { USER_DATA_QUERY, ACHIEVEMENTS_QUERY, GAMES_QUERY, FRIENDS_ACTIVITY_QUERY } from '../graphql/queries';

const Home = () => {
    // Fetch data using GraphQL queries
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER_DATA_QUERY);
    const { loading: achievementsLoading, error: achievementsError, data: achievementsData } = useQuery(ACHIEVEMENTS_QUERY);
    const { loading: gamesLoading, error: gamesError, data: gamesData } = useQuery(GAMES_QUERY);
    const { loading: friendsActivityLoading, error: friendsActivityError, data: friendsActivityData } = useQuery(FRIENDS_ACTIVITY_QUERY);

    // Handle loading state
    if (userLoading || achievementsLoading || gamesLoading || friendsActivityLoading) {
        return <div className="flex items-center justify-center min-h-screen text-xl">Loading...</div>;
    }

    // Handle error state
    if (userError || achievementsError || gamesError || friendsActivityError) {
        return <div className="flex items-center justify-center min-h-screen text-xl text-red-500">Error loading data. Please try again.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto p-4">
                <WelcomeBanner user={userData.user} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <AchievementShowcase achievements={achievementsData.achievements} />
                    <GameHighlights games={gamesData.games} />
                    <FriendActivityFeed activities={friendsActivityData.friendActivities} />
                </div>
            </main>
        </div>
    );
};

export default Home;
