import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles.js";
import { baseUrl } from "../../data/movieData.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2I1MWYzNDc4OTk5YjlmMzk4NjA0NDllNWY5NTFiOSIsInN1YiI6IjY1OTNiNDQwZmMzMWQzNzIxMTQ2YmUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SyXOvFQuPXaS3KFZ1B3bsp2_NiOAgMDSNGYSkIwjqcE",
  },
};

export default function MovieDetail() {
  const params = useParams(); // routing 할 때 parameter값으로 받은 id를 가져옴.
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(  // 받아온 params 값으로 영화 상세 데이터 fetch 해오기
          `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetail();
  }, [params.id]);

  // 로딩 중
  if (loading) {
    return <div>Loading...</div>;
  }

  // 해당 movie의 detail 정보가 없을 때
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <S.DetailContainer>
      <S.PosterBox>
        <img src={baseUrl + movie.poster_path} alt={`${movie.title} poster`} />
      </S.PosterBox>
      <S.TextBox>
        <S.Title>{movie.title}</S.Title>
        <S.DetailText>평점: {movie.vote_average}</S.DetailText>
        <S.DetailText>개봉일: {movie.release_date}</S.DetailText>
        <S.DetailText>
          줄거리
          <S.Overview>{movie.overview}</S.Overview>
        </S.DetailText>
      </S.TextBox>
    </S.DetailContainer>
  );
}
