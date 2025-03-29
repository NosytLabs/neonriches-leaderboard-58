
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

const RouteExplanation = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>SpendThrone Routing Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            SpendThrone uses a hierarchical routing structure with all pages contained within the <code>MainLayout</code> component.
            This ensures consistent header, footer, and styling across the site.
          </p>
          
          <Tabs defaultValue="main">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="main">Main Pages</TabsTrigger>
              <TabsTrigger value="profile">Profile Pages</TabsTrigger>
              <TabsTrigger value="finance">Finance Pages</TabsTrigger>
              <TabsTrigger value="game">Game Features</TabsTrigger>
              <TabsTrigger value="info">Information Pages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="main">
              <h3 className="text-lg font-medium mb-2">Main Pages</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Home (/) - </strong>Landing page with introduction to SpendThrone concept</li>
                <li><strong>Dashboard (/dashboard) - </strong>Personalized user dashboard with stats and activities</li>
                <li><strong>Not Found (/*) - </strong>404 page for undefined routes</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="profile">
              <h3 className="text-lg font-medium mb-2">Profile & Account Pages</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Profile (/profile) - </strong>User's own profile</li>
                <li><strong>Profile (/profile/:username) - </strong>View another user's profile</li>
                <li><strong>Profile Enhancements (/profile-enhancements) - </strong>Purchase upgrades for profile</li>
                <li><strong>Settings (/settings) - </strong>Account settings and preferences</li>
                <li><strong>Login (/login) - </strong>Authentication page for existing users</li>
                <li><strong>Signup (/signup) - </strong>Registration page for new users</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="finance">
              <h3 className="text-lg font-medium mb-2">Finance & Transaction Pages</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Wallet (/wallet) - </strong>Manage digital wallet and transactions</li>
                <li><strong>Deposit (/deposit) - </strong>Add funds to increase rank</li>
                <li><strong>Withdraw (/withdraw) - </strong>Withdraw available funds</li>
                <li><strong>Subscription (/subscription) - </strong>Manage recurring payments and subscriptions</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="game">
              <h3 className="text-lg font-medium mb-2">Core Game Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Leaderboard (/leaderboard) - </strong>The main ranking board showing all users by spend</li>
                <li><strong>Teams (/teams) - </strong>Team competition features and management</li>
                <li><strong>Royal Prestige (/prestige) - </strong>Premium status features and benefits</li>
                <li><strong>Mockery (/mockery) - </strong>Interactive mockery features</li>
                <li><strong>Mockery Guide (/mockery-guide) - </strong>Rules and instructions for mockery system</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="info">
              <h3 className="text-lg font-medium mb-2">Information & Legal Pages</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>About (/about) - </strong>Information about SpendThrone concept and team</li>
                <li><strong>Status History (/status-history) - </strong>Historical perspective on status symbols</li>
                <li><strong>Updates (/updates) - </strong>Platform updates and changelog</li>
                <li><strong>Terms (/terms) - </strong>Terms of service (also accessible via /terms-of-service)</li>
                <li><strong>Privacy (/privacy) - </strong>Privacy policy (also accessible via /privacy-policy)</li>
                <li><strong>Features (/features) - </strong>Detailed feature explanations</li>
                <li><strong>FAQ (/faq) - </strong>Frequently asked questions</li>
              </ul>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium mb-2">Important Notes:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>All pages are wrapped in the <code>MainLayout</code> component, ensuring consistent header and footer.</li>
              <li>Content pages like Terms, Privacy, and FAQ use a shared <code>ContentPage</code> component with different content keys.</li>
              <li>Some routes have redirects (e.g., /terms-of-service → /terms) to handle common variations.</li>
              <li>All routes use lazy loading for better performance.</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <Link to="/about" className="text-primary hover:underline">
              Learn more about SpendThrone →
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RouteExplanation;
