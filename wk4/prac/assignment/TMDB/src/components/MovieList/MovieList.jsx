import { useNavigate } from "react-router-dom";
import * as S from "./styles.js";
import Card from "../Card/Card";
import { baseUrl } from "../../data/movieData.js";

export default function MovieList({ data }) {
  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    navigate(`/movie/${encodeURIComponent(movie.title.trim())}`, {
      state: movie,
    });
  };

  return (
    <S.Container>
      <S.CardListBox>
        {data.map((movie, index) => (
          <S.CardWrapper key={index} onClick={() => handleCardClick(movie)}>
            <Card
              overview={movie.overview}
              poster_path={baseUrl + movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              release_date={movie.release_date}
            />
          </S.CardWrapper>
        ))}
      </S.CardListBox>
    </S.Container>
  );
}
