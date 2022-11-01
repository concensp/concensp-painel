import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 4px 8px;

  border: none;
  border-bottom: solid 1px #ccc;
  margin-bottom: 16px;
  font-size: 20px;
  outline: none;

  :focus {
    border-bottom-color: #ff6200;
  }
`;

export const ButtonLogin = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: #ff6200;
  color: #fff;
  font-size: 18px;
`;
