import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./pages";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./pages/ProtectedRoute";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="auth/*" element={<Auth />} />
            <Route path="/*" element={<ProtectedRoute />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
