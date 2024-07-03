import PropTypes from "prop-types";
import * as S from "./CardStyle";
// import { Link } from "react-router-dom";

export default function Card({ poster_path, overview, title, rating }) {
  // const cleanTitle = title.replace(/[^a-zA-Z]/g, "").trim();

  return (
    // <Link to={`/movie/${cleanTitle}`}>
    <S.CardLayout>
      <S.CardBox>
        <S.CardPosterBox>
          <S.PosterImage src={poster_path} alt="movie poster" />
        </S.CardPosterBox>
        <S.CardTextBox>
          <S.TitleTextBox>
            <p>{title}</p>
          </S.TitleTextBox>
          <S.RatingTextBox>
            <p>{rating}</p>
          </S.RatingTextBox>
        </S.CardTextBox>
      </S.CardBox>
      <S.CardDescriptionBox>
        <S.CardDescriptionInnerBox>
          <S.DescriptionTitleBox>{title}</S.DescriptionTitleBox>
          <S.DescriptionSummaryBox>{overview}</S.DescriptionSummaryBox>
        </S.CardDescriptionInnerBox>
      </S.CardDescriptionBox>
    </S.CardLayout>
    // </Link>
  );
}

Card.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
