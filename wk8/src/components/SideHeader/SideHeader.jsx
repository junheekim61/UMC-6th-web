import { useState, useEffect } from "react";
import * as S from "./styles.js";

export default function SideHeader() {
  const [menuHold, setMenuHold] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  // const [logined, setLogined] = useState("회원가입");

  const handleMenuHold = (menuName) => {
    setMenuHold(menuName);
  };

  const handleMenuOpen = (menuName) => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <S.Container>
      <S.LogoBox>
        <p to="/">UMC Movie</p>
        <img
          src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF"
          alt="menu"
          onClick={handleMenuOpen}
        />
      </S.LogoBox>

      {menuOpen ? (
        <S.NavBar>
          <S.NavLink
            to="/login"
            onClick={() => handleMenuHold("login")}
            active={menuHold === "login"}
          >
            로그인
          </S.NavLink>
          <S.NavLink
            to="/signup"
            onClick={() => handleMenuHold("signup")}
            active={menuHold === "signup"}
          >
            회원가입
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
      ) : null}
    </S.Container>
  );
}
