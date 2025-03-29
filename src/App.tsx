
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Replace static imports with lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Teams = lazy(() => import('./pages/Teams'));
const Profile = lazy(() => import('./pages/Profile'));
const Features = lazy(() => import('./pages/Features'));
const Settings = lazy(() => import('./pages/Settings'));
const Events = lazy(() => import('./pages/Events'));
const Mockery = lazy(() => import('./pages/Mockery'));
const Help = lazy(() => import('./pages/Help'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Chat = lazy(() => import('./pages/Chat'));
const CodeAnalysis = lazy(() => import('./pages/CodeAnalysis'));
const CodeAnalysisReport = lazy(() => import('./pages/CodeAnalysisReport'));

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-royal-gold"></div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        } />
        <Route path="dashboard" element={
          <Suspense fallback={<PageLoader />}>
            <Dashboard />
          </Suspense>
        } />
        <Route path="leaderboard" element={
          <Suspense fallback={<PageLoader />}>
            <Leaderboard />
          </Suspense>
        } />
        <Route path="teams" element={
          <Suspense fallback={<PageLoader />}>
            <Teams />
          </Suspense>
        } />
        <Route path="profile/:username" element={
          <Suspense fallback={<PageLoader />}>
            <Profile />
          </Suspense>
        } />
        <Route path="features" element={
          <Suspense fallback={<PageLoader />}>
            <Features />
          </Suspense>
        } />
        <Route path="settings" element={
          <Suspense fallback={<PageLoader />}>
            <Settings />
          </Suspense>
        } />
        <Route path="events" element={
          <Suspense fallback={<PageLoader />}>
            <Events />
          </Suspense>
        } />
        <Route path="mockery" element={
          <Suspense fallback={<PageLoader />}>
            <Mockery />
          </Suspense>
        } />
        <Route path="chat" element={
          <Suspense fallback={<PageLoader />}>
            <Chat />
          </Suspense>
        } />
        <Route path="help" element={
          <Suspense fallback={<PageLoader />}>
            <Help />
          </Suspense>
        } />
        <Route path="privacy" element={
          <Suspense fallback={<PageLoader />}>
            <Privacy />
          </Suspense>
        } />
        <Route path="terms" element={
          <Suspense fallback={<PageLoader />}>
            <Terms />
          </Suspense>
        } />
        <Route path="code-analysis" element={
          <Suspense fallback={<PageLoader />}>
            <CodeAnalysis />
          </Suspense>
        } />
        <Route path="code-analysis/report" element={
          <Suspense fallback={<PageLoader />}>
            <CodeAnalysisReport />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
