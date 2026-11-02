import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};

export default AppRouter;
