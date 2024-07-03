import * as S from "./styles.js";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Container>
      <S.LogoBox to="/">
        <p>UMC Movie</p>
      </S.LogoBox>
      <S.NavBar>
        <S.NavLink to="/signup">
          <p>회원가입</p>
        </S.NavLink>
        <S.NavLink to="/popular">
          <p>Popular</p>
        </S.NavLink>
        <S.NavLink to="/nowplaying">
          <p>Now Playing</p>
        </S.NavLink>
        <S.NavLink to="/toprated">
          <p>Top Rated</p>
        </S.NavLink>
        <S.NavLink to="/upcoming">
          <p>Upcoming</p>
        </S.NavLink>
      </S.NavBar>
    </S.Container>
  );
}
