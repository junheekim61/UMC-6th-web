import * as S from "./styles";
import { useDispatch } from "react-redux";
import { UP, DOWN } from "../../redux/counter";
import { useState } from "react";

export default function MusicBar({ data }) {
  const dispatch = useDispatch();
  const { title, singer, price, img, amount } = data;
  const [amt, setAmt] = useState(amount);

  const handleIncrement = () => {
    dispatch(UP());
    setAmt(amt+1);
  };

  const handleDecrement = () => {
    dispatch(DOWN());
    setAmt(amt-1);
  };

  return (
    <S.Container>
      <S.Cover>
        <img src={img} alt={`${title} cover`} />{" "}
      </S.Cover>
      <S.Text>
        <p>
          {title} | {singer}
        </p>
        <p>{price}₩</p>
      </S.Text>
      <S.Counter>
        <p onClick={handleIncrement}>△</p>
        <p>{amt}</p>
        <p onClick={handleDecrement}>▽</p>
      </S.Counter>
    </S.Container>
  );
}
