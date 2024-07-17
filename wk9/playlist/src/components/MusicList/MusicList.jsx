import * as S from "./styles";
import { useDispatch } from "react-redux";
import { UP, DOWN } from "../../redux/counter";
import CARTITEMS from "../../constants/cartItems";
import MusicBar from "../MusicBar/MusicBar";

export default function MusicList() {
  const dispatch = useDispatch();

  return (
    <S.Container>
      {CARTITEMS.map((item, index) => (
        <MusicBar key={index} data={item} />
      ))}

      <p>당신이 선택한 음반</p>
      <p>고객님이 좋아하는 음반을 담아보세요~~!</p>
    </S.Container>
  );
}
