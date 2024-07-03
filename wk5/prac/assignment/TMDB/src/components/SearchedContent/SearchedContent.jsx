import * as S from "./styles.js";
import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList.jsx";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2I1MWYzNDc4OTk5YjlmMzk4NjA0NDllNWY5NTFiOSIsInN1YiI6IjY1OTNiNDQwZmMzMWQzNzIxMTQ2YmUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SyXOvFQuPXaS3KFZ1B3bsp2_NiOAgMDSNGYSkIwjqcE",
  },
};

export default function SearchedContent({ searchingText }) {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchMovies(debouncedSearchText);
  }, [debouncedSearchText]);

  // 입력이 멈춘 후 1초 이후에 API 요청 1번만 발생.
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchingText);
    }, 1000); // 1초 후에 실행

    return () => {
      clearTimeout(handler);
    };
  }, [searchingText]);

  // handler를 위에 따로 정의하고 쓰기

  const fetchMovies = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieData(response.results))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <S.ContentBox>
      {loading ? null : <MovieList data={movieData} />}
    </S.ContentBox>
  );
}
