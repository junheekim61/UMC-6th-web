import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchBarBox = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  margin-top: 15px;
  display: flex;
  gap: 8px;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 40px;
  border-radius: 25px;
  font-size: 15px;
  padding: 0 20px;
`;

export const SearchButton = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(220, 198, 124);
  border-radius: 25px;
`;
