import React from "react";
import { Routes, Route } from "react-router-dom";
import Diario from "./Diario";

const index: React.FC = () => {
  return (
    <Routes>
      <Route path="/diario" element={<Diario />} />
    </Routes>
  );
};

export default index;
