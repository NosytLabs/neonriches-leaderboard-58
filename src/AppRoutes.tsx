import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoadingScreen from './components/ui/LoadingScreen';

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Leaderboard = lazy(() => import('./pages/Leaderboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Teams = lazy(() => import('./pages/Teams'));
const Deposit = lazy(() => import('./pages/Deposit'));
const Withdraw = lazy(() => import('./pages/Withdraw'));
const ProfileEnhancements = lazy(() => import('./pages/ProfileEnhancements'));
const CodeAcademy = lazy(() => import('./pages/CodeAcademy'));
// Mockery
const RoyalMockeryFestivalPage = lazy(() => import('./pages/RoyalMockeryFestivalPage'));
// Content Pages
const Updates = lazy(() => import('./pages/Updates'));
const About = lazy(() => import('./pages/About'));
const CodeAnalysis = lazy(() => import('./pages/CodeAnalysis'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        } />
        <Route path="/leaderboard" element={
          <Suspense fallback={<LoadingScreen />}>
            <Leaderboard />
          </Suspense>
        } />
        <Route path="/profile/:username" element={
          <Suspense fallback={<LoadingScreen />}>
            <Profile />
          </Suspense>
        } />
        <Route path="/profile" element={
          <Suspense fallback={<LoadingScreen />}>
            <Profile />
          </Suspense>
        } />
        <Route path="/teams" element={
          <Suspense fallback={<LoadingScreen />}>
            <Teams />
          </Suspense>
        } />
        <Route path="/deposit" element={
          <Suspense fallback={<LoadingScreen />}>
            <Deposit />
          </Suspense>
        } />
        <Route path="/withdraw" element={
          <Suspense fallback={<LoadingScreen />}>
            <Withdraw />
          </Suspense>
        } />
        <Route path="/profile-enhancements" element={
          <Suspense fallback={<LoadingScreen />}>
            <ProfileEnhancements />
          </Suspense>
        } />
        <Route path="/code" element={
          <Suspense fallback={<LoadingScreen />}>
            <CodeAcademy />
          </Suspense>
        } />
        <Route path="/mockery" element={
          <Suspense fallback={<LoadingScreen />}>
            <RoyalMockeryFestivalPage />
          </Suspense>
        } />
        <Route path="/updates" element={
          <Suspense fallback={<LoadingScreen />}>
            <Updates />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<LoadingScreen />}>
            <About />
          </Suspense>
        } />
        <Route path="/code-analysis" element={
          <Suspense fallback={<LoadingScreen />}>
            <CodeAnalysis />
          </Suspense>
        } />
        <Route path="*" element={
          <Suspense fallback={<LoadingScreen />}>
            <NotFound />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
