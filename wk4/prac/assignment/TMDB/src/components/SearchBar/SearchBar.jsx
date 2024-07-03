import * as S from "./styles.js";
// import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <S.SearchBarBox>
      <S.SearchInput></S.SearchInput>
      <S.SearchButton>🔍</S.SearchButton>
    </S.SearchBarBox>
  );
}
