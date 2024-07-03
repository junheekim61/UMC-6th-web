import styled from "styled-components";

export const CardLayout = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 150px;
  color: #fff;
`;

export const CardBox = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const CardPosterBox = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PosterImage = styled.img`
  /* box-sizing: border-box; */
  width: 100%;
`;

export const CardTextBox = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  padding-top: 10px;

`;

export const TitleTextBox = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  gap: 5px;
`;
