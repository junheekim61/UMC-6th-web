import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #242755;
`;

export const LogoBox = styled(Link)`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-decoration: none;
`;

export const NavBar = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
`;

export const NavLink = styled(Link)`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
  padding: 15px;
  text-decoration: none;
  transition: font-size 0.3s ease;

  p:hover {
    transform: scale(1.1);
    color: rgb(220, 198, 124);
  }
`;
