import { useEffect, useState } from "react";
import * as S from "./styles.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2I1MWYzNDc4OTk5YjlmMzk4NjA0NDllNWY5NTFiOSIsInN1YiI6IjY1OTNiNDQwZmMzMWQzNzIxMTQ2YmUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SyXOvFQuPXaS3KFZ1B3bsp2_NiOAgMDSNGYSkIwjqcE",
  },
};

export default function NowPlayingPage() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieData(response.results))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      }); ///
  }, []);

  return (
    <S.Container>{loading ? null : <MovieList data={movieData} />}</S.Container>
  );
}
