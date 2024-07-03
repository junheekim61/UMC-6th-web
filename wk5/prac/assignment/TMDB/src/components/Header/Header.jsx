import { useState } from "react";
import * as S from "./styles.js";
// import { Link } from "react-router-dom";

export default function Header() {
  const [menuHold, setMenuHold] = useState("home");
  const [logined, setLogined] = useState("회원가입");

  const handleMenuHold = (menuName) => {
    setMenuHold(menuName);
  };

  return (
    <S.Container>
      <S.LogoBox to="/">
        <p>UMC Movie</p>
      </S.LogoBox>
      <S.NavBar>
        <S.NavLink
          to="/signup"
          onClick={() => handleMenuHold("signup")}
          active={menuHold === "signup"}
        >
          {logined}
        </S.NavLink>
        <S.NavLink
          to="/popular"
          onClick={() => handleMenuHold("popular")}
          active={menuHold === "popular"}
        >
          Popular
        </S.NavLink>
        <S.NavLink
          to="/nowplaying"
          onClick={() => handleMenuHold("nowplaying")}
          active={menuHold === "nowplaying"}
        >
          Now Playing
        </S.NavLink>
        <S.NavLink
          to="/toprated"
          onClick={() => handleMenuHold("toprated")}
          active={menuHold === "toprated"}
        >
          Top Rated
        </S.NavLink>
        <S.NavLink
          to="/upcoming"
          onClick={() => handleMenuHold("upcoming")}
          active={menuHold === "upcoming"}
        >
          Upcoming
        </S.NavLink>
      </S.NavBar>
    </S.Container>
  );
}
