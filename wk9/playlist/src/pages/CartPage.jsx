import * as S from "./styles";
import Header from "../components/Header/Header";
import MusicList from "../components/MusicList/MusicList";

export default function CartPage() {
  return (
    <>
      <Header />
      <S.Content>
        <MusicList />
      </S.Content>
    </>
  );
}
