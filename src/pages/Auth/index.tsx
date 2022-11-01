import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

const index: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default index;
