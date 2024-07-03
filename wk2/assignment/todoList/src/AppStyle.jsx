import styled from "styled-components";

export const MainPageLayout = styled.div`
  box-sizing: border-box;
  padding: 200px;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  box-sizing: border-box;
  padding: 20px;
  font-size: 50px;
  width: 100%;
  min-width: 700px;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  white-space: nowrap;
`;

export const SearchBarInput = styled.input`
  box-sizing: border-box;
  font-style: italic;
  width: 80%;
  min-width: 500px;
  min-height: 60px;
  font-size: 15px;
  padding-left: 30px;
  margin: 10px 0;
`;

export const ListSection = styled.div`
  /* border: 1px solid black; */
  box-sizing: border-box;
  width: 100%;
  min-width: 700px;
  padding: 10px 100px 100px 100px;
  display: flex;
  /* overflow: auto; */
`;

export const ListRow = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  width: 100%;
  min-width: 250px;
  padding: 0 15px;
`;

export const ListTitle = styled.div`
  /* border: 1px solid blue; */
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 20px;
`;
