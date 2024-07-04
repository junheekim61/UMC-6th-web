import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  left: auto;
  z-index: 999;
  display: flex;
  flex-direction: column;
  background-color: #ff000088;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoBox = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-decoration: none;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const NavBar = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const LoginBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: white;
  padding: 15px;
  text-decoration: none;
  transition: font-size 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: rgb(220, 198, 124);
    font-weight: 700;
  }
`;

export const NavLink = styled(Link).attrs((props) => ({
  active: props.active ? "true" : undefined,
}))`
  box-sizing: border-box;
  font-size: 15px;
  color: ${(props) => (props.active ? "rgb(220, 198, 124)" : "white")};
  font-weight: ${(props) => (props.active ? "700" : "400")};
  padding: 15px;
  text-decoration: none;
  transition: font-size 0.3s ease;

  &:hover {
    color: rgb(220, 198, 124);
    font-weight: 700;
  }
`;
