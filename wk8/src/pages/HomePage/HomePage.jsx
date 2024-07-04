import * as S from "./styles.js";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

export default function HomePage() {
  return (
    <>
      <S.WelcomeContainer>환영합니다</S.WelcomeContainer>
      <S.SearchContainer>
        <S.SearchTitle>📽 Find your Movies !</S.SearchTitle>
        <SearchBar />
      </S.SearchContainer>
    </>
  );
}
