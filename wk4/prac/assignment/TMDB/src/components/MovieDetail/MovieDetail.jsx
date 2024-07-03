import { useLocation } from "react-router-dom";
import * as S from "./styles.js";

export default function MovieDetail() {
  const { state: movie } = useLocation();
  const {
    poster_path,
    original_title,
    vote_average,
    release_date,
    overview,
    backdrop_path,
  } = movie;

  return (
    <S.DetailContainer>
      <S.PosterBox>
        <img src={poster_path} alt={`${title} poster`} />
      </S.PosterBox>
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.DetailText>평점: {rating}</S.DetailText>
        <S.DetailText>개봉일: {release_date}</S.DetailText>
        <S.DetailText>
          줄거리
          <S.Overview>{overview}</S.Overview>
        </S.DetailText>
      </S.TextBox>
    </S.DetailContainer>
  );
}
