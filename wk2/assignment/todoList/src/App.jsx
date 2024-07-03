import { useState, useEffect } from "react";
import * as S from "./AppStyle";
import List from "./components/List.jsx";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]); // todoList가 변경될 때마다 useEffect 실행

  const handleInputEnter = () => {
    setTodoList([...todoList, { task: inputValue, status: "완료" }]);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      inputValue.trim() !== "" &&
      e.nativeEvent.isComposing == false
    ) {
      handleInputEnter();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDoneButtonClick = (index) => {
    setTodoList((prevTodoList) => {
      const newTodoList = [...prevTodoList];
      newTodoList[index].status = "삭제";
      console.log("삭제로 변경 완료");
      return newTodoList;
    });
  };

  const handleDeleteButtonClick = (index) => {
    setTodoList((prevTodoList) => {
      const newTodoList = [...prevTodoList];
      newTodoList.splice(index, 1);
      console.log("삭제 완료");
      return newTodoList;
    });
  };

  return (
    <S.MainPageLayout>
      <S.TitleBox>UMC Study Plan</S.TitleBox>
      <S.SearchBarInput
        placeholder="UMC 스터디 계획을 작성해보세요!"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue} // 입력 필드의 값과 상태를 동기화
      ></S.SearchBarInput>
      <S.ListSection>
        <S.ListRow>
          <S.ListTitle>해야 할 일</S.ListTitle>
          {todoList.map((todo, index) =>
            todo.status === "완료" ? (
              <List
                key={index}
                task={todo.task}
                status={todo.status}
                handleButtonClick={() => handleDoneButtonClick(index)}
              />
            ) : null
          )}
        </S.ListRow>
        <S.ListRow>
          <S.ListTitle>해낸 일</S.ListTitle>
          {todoList.map((todo, index) =>
            todo.status === "삭제" ? (
              <List
                key={index}
                task={todo.task}
                status={todo.status}
                handleButtonClick={() => handleDeleteButtonClick(index)}
              />
            ) : null
          )}
        </S.ListRow>
      </S.ListSection>
    </S.MainPageLayout>
  );
}
