import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import CreateUsers from "./pages/Createusers";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createUsers" element={<CreateUsers />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
