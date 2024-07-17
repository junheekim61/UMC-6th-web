import { useEffect, useState } from "react";
import * as S from "./styles.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.jsx";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2I1MWYzNDc4OTk5YjlmMzk4NjA0NDllNWY5NTFiOSIsInN1YiI6IjY1OTNiNDQwZmMzMWQzNzIxMTQ2YmUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SyXOvFQuPXaS3KFZ1B3bsp2_NiOAgMDSNGYSkIwjqcE",
  },
};

export default function PopularPage() {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieData(response.results);
        setPage(response.page);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  // 페이지 변경 핸들러
  const handlePageChange = (direction) => {
    if (direction === "prev" && page > 1) {
      setPage(page - 1);
    } else if (direction === "next") {
      setPage(page + 1);
    }
  };

  return (
    <S.Container>
      {loading ? <LoadingSpinner /> : <MovieList data={movieData} />}
      <S.Page>
        <p onClick={() => handlePageChange("prev")}>&lt;</p> <p>{page}</p>
        <p onClick={() => handlePageChange("next")}>&gt;</p>{" "}
      </S.Page>
    </S.Container>
  );
}
