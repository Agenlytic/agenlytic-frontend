import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OnboardingScreen from '../pages/OnboardingScreen';
import HomeScreen from '../pages/HomeScreen';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<OnboardingScreen />} />
      <Route path="/onboarding" element={<OnboardingScreen />} />
      <Route path="/home" element={<HomeScreen />} />
    </Routes>
  );
};

export default AppRouter;
