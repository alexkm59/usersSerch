import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage";

export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        
      </Routes>
    );
  };