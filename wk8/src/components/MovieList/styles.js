import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 0 15%;
`;

export const CardListBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  padding-top: 50px;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
