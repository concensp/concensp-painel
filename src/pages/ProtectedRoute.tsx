import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Protected } from ".";
import { SideMenu } from "../components";
import { UserContext } from "../contexts/UserContext";
import { userLogout } from "../utils";
import styled from "styled-components";

const ProtectedRoute = (props: any) => {
  const { login } = React.useContext(UserContext);
  React.useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        userLogout();
      }
    };
    verifyToken();
  }, []);

  const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 8px 48px;
  `;

  if (login === true) {
    return (
      <>
        <SideMenu />
        <Container>
          <Routes>
            <Route path="/*" element={<Protected />} />;
          </Routes>
        </Container>
      </>
    );
  } else if (login === false) return <Navigate to={"/auth/login"} />;
  else return null;
};

export default ProtectedRoute;
