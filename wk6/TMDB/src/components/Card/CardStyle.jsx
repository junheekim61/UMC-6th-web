import styled from "styled-components";
export const CardLayout = styled.div`
  box-sizing: border-box;
  position: relative;
  /* border: 1px solid black; */
  width: 180px;
  height: 300px;
  border-radius: 10px;
  margin: 5px;
  display: flex;
`;

export const CardBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const CardPosterBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid blue; */
  width: 100%;
  height: 220px;
`;

export const PosterImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const CardTextBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid red; */
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const TitleTextBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid red; */
  width: 140px;
  height: 70px;
  padding: 10px;
  white-space: normal;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 123%;
`;

export const RatingTextBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid red; */
  width: 40px;
  height: 70px;
  display: flex;
  justify-content: end;
  padding: 10px 10px 10px 0;
`;

export const CardDescriptionBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: transparent;
  padding: 20px;

  &:hover {
    color: white;
    background-color: #000000c0;
  }
`;

export const CardDescriptionInnerBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid blue; */
  height: 260px;
  overflow: hidden;
`;

export const DescriptionTitleBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid red; */
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
`;

export const DescriptionSummaryBox = styled.div`
  box-sizing: border-box;
  /* border: 1px solid red; */
  font-weight: 300;
  line-height: 120%;
`;
