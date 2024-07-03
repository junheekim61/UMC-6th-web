import SearchedContent from "../SearchedContent/SearchedContent.jsx";
import * as S from "./styles.js";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [searchingText, setSearchingText] = useState("");

  const handleSearchingTextChange = (e) => {
    const value = e.target.value;
    setSearchingText(value);
  };

  const handleSearchBtnClick = (e) => {
    e.preventDefault();
    // 폼 제출 처리 로직 추가
    console.log(searchingText);
  };
  

  return (
    <>
      <S.SearchBarFormBox>
        <S.SearchInput
          placeholder=""
          value={searchingText}
          onChange={handleSearchingTextChange}
        ></S.SearchInput>
        {/* <S.SearchButton onClick={handleSearchBtnClick}>🔍</S.SearchButton> */}
      </S.SearchBarFormBox>
      <SearchedContent searchingText={searchingText} />
    </>
  );
}
