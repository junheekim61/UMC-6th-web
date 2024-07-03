import * as S from "./styles.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [valList, setValList] = useState([false, false]);
  const [allTrue, setAllTrue] = useState(false);

  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const [idValMsg, setIdValMsg] = useState("");
  const [pwValMsg, setPwValMsg] = useState("");

  const password_regex =
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/;

  // 아이디 유효성 검사
  const handleIdChange = (e) => {
    const value = e.target.value.trim();
    setIdValue(value);

    const isValid = value !== "";
    setValList((prevValList) => [isValid, ...prevValList.slice(1)]);
    setIdValMsg(isValid ? "" : "필수 입력 항목입니다!");
  };

  // 비밀번호 유효성 검사
  const handlePwChange = (e) => {
    const value = e.target.value.trim();
    setPwValue(value);

    let isValid = true;
    let message = "";

    if (value === "") {
      isValid = false;
      message = "필수 입력 항목입니다!";
    } else {
      if (value.length < 4) {
        isValid = false;
        message = "비밀번호는 최소 4자리 이상이어야 합니다.";
      } else if (value.length > 12) {
        isValid = false;
        message = "비밀번호는 최대 12자리까지 가능합니다.";
      } else if (!password_regex.test(value)) {
        isValid = false;
        message = "영어, 숫자, 특수문자를 모두 포함해야 합니다.";
      }
    }
    setValList((prevValList) => [...prevValList.slice(0, 1), isValid]);
    setPwValMsg(isValid ? "" : message);
  };

  // submit 버튼 배경색 수정
  useEffect(() => {
    valList.every((item) => item === true)
      ? setAllTrue(true)
      : setAllTrue(false);
  }, [valList]);

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    if (allTrue) {
      navigate(`/`);
    } else {
      e.preventDefault();
    }
  };

  return (
    <S.Container>
      <S.SingUpBox>
        <S.InnerBox>
          <S.Title>로그인 페이지</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <S.InputBox>
              <S.Input
                placeholder="아이디를 입력해주세요"
                value={idValue}
                onChange={handleIdChange}
              />
              <S.InputVal style={{ color: valList[0] ? "#0f0" : "#f00" }}>
                {idValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="비밀번호를 입력해주세요"
                value={pwValue}
                onChange={handlePwChange}
              />
              <S.InputVal style={{ color: valList[1] ? "#0f0" : "#f00" }}>
                {pwValMsg}
              </S.InputVal>
            </S.InputBox>

            <S.BtnBox>
              <S.SubmitBtn
                style={{ backgroundColor: allTrue ? "#fff4a0" : "#ffffff" }}
                type="submit"
              >
                제출하기
              </S.SubmitBtn>
            </S.BtnBox>
          </S.Form>
        </S.InnerBox>
      </S.SingUpBox>
    </S.Container>
  );
}
