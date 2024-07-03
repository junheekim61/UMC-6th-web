import Card from "../Card/Card";
import * as S from "./MovieListStyle";
import {baseUrl} from "../../data/movieData.js";

export default function MovieList({data}) {
  return (
    <S.Container>
      <S.CardListBox>
        {data.map((movie, index) => (
          <Card
            key={index}
            overview={movie.overview}
            poster_path={baseUrl+movie.poster_path}
            title={movie.title} 
            rating={movie.vote_average} 
          />
        ))}
      </S.CardListBox>
    </S.Container>
  );
}

