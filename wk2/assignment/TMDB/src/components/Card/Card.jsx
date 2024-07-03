import PropTypes from "prop-types";
import * as S from "./CardStyle";

export default function Card({ poster_path, overview, title, rating }) {
  return (
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
  );
}

Card.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
