import * as S from './styles';
import { useSelector } from 'react-redux';

export default function Header() {
  // state.counter가 undefined일 경우를 대비하여 기본값 설정
  const counter = useSelector((state) => state.counter.count);

  return (
    <S.Container>
      <h1>UMC Playlist</h1>
      <S.Cart>
        <div>cart:</div>
        <p>{counter}</p>
      </S.Cart>
    </S.Container>
  );
}
