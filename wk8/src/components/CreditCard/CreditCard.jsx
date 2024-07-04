import * as S from "./styles.js";
import { baseUrl } from "../../data/movieData.js";

export default function CreditCard({ name, profile_path, role }) {
  return (
    <S.CardLayout>
      <S.CardBox>
        <S.CardPosterBox>
          <S.PosterImage src={baseUrl + profile_path} alt="profile" />
        </S.CardPosterBox>
        <S.CardTextBox>
          <S.TitleTextBox>
            <p>{name}</p>
            <p>{role}</p>
          </S.TitleTextBox>
        </S.CardTextBox>
      </S.CardBox>
    </S.CardLayout>
  );
}
