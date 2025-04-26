
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to SpendThrone</h1>
      <p className="mb-4">
        In our satire of wealth and status, your rank is directly proportional to your spending.
        $1 = 1 unit of rank. The leaderboard never resets.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Pay to Win</h2>
          <p>Climb the ranks by spending. It's that simple!</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Mockery System</h2>
          <p>Use mockery actions to interact with other users on the leaderboard.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Royal Prestige</h2>
          <p>Reach the top ranks and gain access to exclusive royal features.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
