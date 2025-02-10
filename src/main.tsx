import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Импортируем компоненты маршрутизации
import './index.css';
import App from './App.tsx';
import MainPage from './MainPage'; // Убедитесь, что этот импорт верен

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);