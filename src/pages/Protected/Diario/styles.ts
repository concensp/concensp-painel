import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Toolbar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #ccc;
  margin-bottom: 24px;
`;
export const Title = styled.h1``;
export const SubTitle = styled.h2`
  color: #777;
`;
export const Text = styled.p``;
export const DateInput = styled.input.attrs({ type: "date" })`
  height: 50px;
  border: none;
  border-bottom: solid 1px #ccc;
  width: 100%;
  max-width: 200px;
  font-size: 18px;
`;

export const NewButton = styled.button`
  background-color: #ff6200;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`;
export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;

  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #ff6200;
  color: white;
`;
export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const ActionButton = styled.button`
  background-color: #ff6200;
  border: none;
  width: 30px;
  height: 30px;
  margin: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  padding: 4px;
`;

export const OptionButton = styled.button`
  background-color: #ff6200;
  border: none;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  padding: 4px;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
