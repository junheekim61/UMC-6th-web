import * as S from "./styles.js";
import { useState, useEffect } from "react";

export default function SignUpPage() {
  const [valList, setValList] = useState([false, false, false, false, false]);
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwReValue, setPwReValue] = useState("");

  const [nameValMsg, setNameValMsg] = useState("");
  const [emailValMsg, setEmailValMsg] = useState("");
  const [ageValMsg, setAgeValMsg] = useState("");
  const [pwValMsg, setPwValMsg] = useState("");
  const [pwReValMsg, setPwReValMsg] = useState("");

  // 이름 유효성 검사
  const handleNameChange = (e) => {
    const value = e.target.value.trim();
    setNameValue(value);
    if (value !== "") {
      setValList((prevValList) => [true, ...prevValList.slice(1)]);
      setNameValMsg("멋진 이름이네요!");
    } else {
      setValList((prevValList) => [false, ...prevValList.slice(1)]);
      setNameValMsg("필수 입력 항목입니다!");
    }
  };

  // 이메일 유효성 검사
  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    setEmailValue(value);
    if (value !== "" && email_regex.test(value)) {
      setValList((prevValList) => [
        prevValList[0],
        true,
        ...prevValList.slice(2),
      ]);
      setEmailValMsg("올바른 이메일 형식입니다.");
    } else {
      setValList((prevValList) => [
        prevValList[0],
        false,
        ...prevValList.slice(2),
      ]);
      setEmailValMsg("잘못된 이메일 형식입니다.");
    }
  };

  // 나이  유효성 검사
  const handleAgeChange = (e) => {
    const value = e.target.value.trim();
    setAgeValue(value);
    if (
      !isNaN(parseInt(value)) &&
      Number.isInteger(parseFloat(value)) &&
      parseInt(value) > 19
    ) {
      setValList((prevValList) => [
        ...prevValList.slice(0, 2),
        true,
        ...prevValList.slice(3),
      ]);
      setAgeValMsg("올바른 나이입니다.");
    } else if (isNaN(parseInt(value))) {
      setValList((prevValList) => [
        ...prevValList.slice(0, 2),
        false,
        ...prevValList.slice(3),
      ]);
      setAgeValMsg("나이는 숫자를 입력 받아야 합니다.");
    } else if (parseInt(value) <= 0) {
      setValList((prevValList) => [
        ...prevValList.slice(0, 2),
        false,
        ...prevValList.slice(3),
      ]);
      setAgeValMsg("나이는 양수여야 합니다.");
    } else if (!Number.isInteger(parseFloat(value))) {
      setValList((prevValList) => [
        ...prevValList.slice(0, 2),
        false,
        ...prevValList.slice(3),
      ]);
      setAgeValMsg("나이는 소수가 될 수 없습니다.");
    } else if (parseInt(value) < 19) {
      setValList((prevValList) => [
        ...prevValList.slice(0, 2),
        false,
        ...prevValList.slice(3),
      ]);
      setAgeValMsg("우리 영화 사이트는 19살 이상만 가입이 가능합니다.");
    }
  };

  // 비밀번호 유효성 검사
  const handlePwChange = (e) => {
    const value = e.target.value.trim(); // 입력값 양 끝 공백 제거
    setPwValue(value);
    if (value !== "") {
      setPwValMsg("멋진 이름이네요!");
    } else {
      setPwValMsg("필수 입력 항목입니다!");
    }
  };

  // 비밀번호 확인 유효성 검사
  const handlePwReChange = (e) => {
    const value = e.target.value.trim(); // 입력값 양 끝 공백 제거
    setPwReValue(value);
    if (value !== "") {
      setPwReValMsg("멋진 이름이네요!");
    } else {
      setPwReValMsg("필수 입력 항목입니다!");
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 처리 로직 추가
  };

  return (
    <S.Container>
      <S.SingUpBox>
        <S.InnerBox>
          <S.Title>회원가입 페이지</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <S.InputBox>
              <S.Input
                placeholder="이름을 입력해주세요"
                value={nameValue}
                onChange={handleNameChange}
              />
              <S.InputVal style={{ color: valList[0] ? "#0f0" : "#f00" }}>
                {nameValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="이메일을 입력해주세요"
                value={emailValue}
                onChange={handleEmailChange}
              />
              <S.InputVal style={{ color: valList[1] ? "#0f0" : "#f00" }}>
                {emailValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="나이를 입력해주세요"
                value={ageValue}
                onChange={handleAgeChange}
              />
              <S.InputVal style={{ color: valList[2] ? "#0f0" : "#f00" }}>
                {ageValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="비밀번호를 입력해주세요"
                value={pwValue}
                onChange={handlePwChange}
              />
              <S.InputVal style={{ color: valList[3] ? "#0f0" : "#f00" }}>
                {pwValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="비밀번호 확인"
                value={pwReValue}
                onChange={handlePwReChange}
              />
              <S.InputVal style={{ color: valList[4] ? "#0f0" : "#f00" }}>
                {pwReValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.BtnBox>
              <S.SubmitBtn type="submit">제출하기</S.SubmitBtn>
            </S.BtnBox>
          </S.Form>
          <S.OptionBox>
            <S.SearchPW>이미 아이디가 있으신가요</S.SearchPW>
            <S.BacktoLogin>로그인 페이지로 이동하기</S.BacktoLogin>
          </S.OptionBox>
        </S.InnerBox>
      </S.SingUpBox>
    </S.Container>
  );
}
