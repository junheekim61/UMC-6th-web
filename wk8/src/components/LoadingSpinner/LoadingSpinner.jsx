import BeatLoader from "react-spinners/BeatLoader";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LoadingSpinner({ style }) {
  return (
    <SpinnerWrapper style={style}>
      <BeatLoader color="#fff" size="8px" />
    </SpinnerWrapper>
  );
}
