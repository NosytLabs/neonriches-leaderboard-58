
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mb-4">
          SPEND THRONE
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
          The ultimate leaderboard where rank is determined solely by your monetary contributions. Ascend the throne through spending!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-black/40 border-red-500/20 hover:border-red-500/40 transition-all">
          <CardHeader>
            <CardTitle className="text-red-400">Team Red</CardTitle>
            <CardDescription>The mighty Red Dragons</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Join the Red Dragons and compete with fiery determination.</p>
            <Button className="bg-red-500 hover:bg-red-600">Join Red Team</Button>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-green-500/20 hover:border-green-500/40 transition-all">
          <CardHeader>
            <CardTitle className="text-green-400">Team Green</CardTitle>
            <CardDescription>The strategic Green Griffins</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Join the Green Griffins and rise through strategic spending.</p>
            <Button className="bg-green-500 hover:bg-green-600">Join Green Team</Button>
          </CardContent>
        </Card>

        <Card className="bg-black/40 border-blue-500/20 hover:border-blue-500/40 transition-all">
          <CardHeader>
            <CardTitle className="text-blue-400">Team Blue</CardTitle>
            <CardDescription>The resilient Blue Phoenix</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Join the Blue Phoenix and rise from the ashes to the throne.</p>
            <Button className="bg-blue-500 hover:bg-blue-600">Join Blue Team</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black/40 border-purple-500/20 mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">1. Spend to Ascend</h3>
              <p>Your rank is determined by your spending. $1 = 1 unit of rank. The more you spend, the higher you climb.</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">2. Choose Your Team</h3>
              <p>Join one of three teams: Red Dragons, Green Griffins, or Blue Phoenix. Compete individually and as a team.</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">3. Customize Your Profile</h3>
              <p>Unlock profile customization options as you spend. Show off your status and creativity.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center mb-12">
        {isAuthenticated ? (
          <div className="space-y-4">
            <h2 className="text-2xl">Welcome back, {user?.displayName || user?.username}!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/leaderboard">View Leaderboard</Link>
              </Button>
              <Button className="bg-amber-600 hover:bg-amber-700" asChild>
                <Link to="/profile">My Profile</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl">Ready to claim your throne?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
