import styled from "styled-components";

export const ListLayout = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  margin-bottom: 10px;
`;

export const TextBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%
`;

export const ButtonBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 30px;
`;
