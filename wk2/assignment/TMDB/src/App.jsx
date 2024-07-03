import Card from "./components/Card/Card";
import * as S from "./AppStyle";
import {movies, baseUrl} from "./data/movieData.js";

function App() {
  return (
    <S.AppContainer>
      <S.CardListBox>
        {movies.results.map((movie, index) => (
          <Card
            key={index}
            overview={movie.overview}
            poster_path={baseUrl+movie.poster_path}
            title={movie.title} 
            rating={movie.vote_average} 
          />
        ))}
      </S.CardListBox>
    </S.AppContainer>
  );
}

export default App;
