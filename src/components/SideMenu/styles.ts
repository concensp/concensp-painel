import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 200px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
`;

export const Item = styled(NavLink).attrs({
  style: ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    backgroundColor: isActive ? "#ff6200" : "",
  }),
})`
  width: 100%;
  display: block;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Disabled = styled.div`
  width: 100%;
  display: block;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  opacity: 0.5;
`;

export const LogoutButton = styled.button`
  width: 100%;
  display: block;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  background: none;
  cursor: pointer;

  :active {
    background: #ff6200;
    color: #fff;
  }
`;
