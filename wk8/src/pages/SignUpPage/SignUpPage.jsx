import * as S from "./styles.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [valList, setValList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [allTrue, setAllTrue] = useState(false);
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_regex =
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/;

  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwReValue, setPwReValue] = useState("");

  const [nameValMsg, setNameValMsg] = useState("");
  const [idValMsg, setIdValMsg] = useState("");
  const [emailValMsg, setEmailValMsg] = useState("");
  const [ageValMsg, setAgeValMsg] = useState("");
  const [pwValMsg, setPwValMsg] = useState("");
  const [pwReValMsg, setPwReValMsg] = useState("");

  // 이름 유효성 검사
  const handleNameChange = (e) => {
    const value = e.target.value.trim();
    setNameValue(value);

    const isValid = value !== "";
    setValList((prevValList) => [isValid, ...prevValList.slice(1)]);
    setNameValMsg(isValid ? "멋진 이름이네요!" : "필수 입력 항목입니다!");
  };

  // 아이디 유효성 검사
  const handleIdChange = (e) => {
    const value = e.target.value.trim();
    setIdValue(value);

    const isValid = value !== "";
    setValList((prevValList) => [
      prevValList[0],
      isValid,
      ...prevValList.slice(2),
    ]);
    setIdValMsg(isValid ? "멋진 아이디네요!" : "필수 입력 항목입니다!");
  };

  // 이메일 유효성 검사
  const handleEmailChange = (e) => {
    const value = e.target.value.trim();
    setEmailValue(value);

    const isValid = value !== "" && email_regex.test(value);
    setValList((prevValList) => [
      ...prevValList.slice(0, 2),
      isValid,
      ...prevValList.slice(3),
    ]);
    setEmailValMsg(
      isValid
        ? "올바른 이메일 형식입니다."
        : value === ""
        ? "필수 입력 항목입니다!"
        : "잘못된 이메일 형식입니다."
    );
  };

  // 나이  유효성 검사 (개선)
  const handleAgeChange = (e) => {
    const value = e.target.value.trim();
    setAgeValue(value);

    let isValid = true;
    let message = "";

    if (value === "") {
      isValid = false;
      message = "필수 입력 항목입니다!";
    } else if (isNaN(parseInt(value))) {
      isValid = false;
      message = "나이는 숫자를 입력 받아야 합니다.";
    } else if (!Number.isInteger(parseFloat(value))) {
      isValid = false;
      message = "나이는 소수가 될 수 없습니다.";
    } else if (parseInt(value) <= 0) {
      isValid = false;
      message = "나이는 양수여야 합니다.";
    } else if (parseInt(value) < 19) {
      isValid = false;
      message = "우리 영화 사이트는 19살 이상만 가입이 가능합니다.";
    }

    setValList((prevValList) => [
      ...prevValList.slice(0, 3),
      isValid,
      ...prevValList.slice(4),
    ]);
    setAgeValMsg(isValid ? "올바른 나이입니다." : message);
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

    setValList((prevValList) => [
      ...prevValList.slice(0, 4),
      isValid,
      ...prevValList.slice(5),
    ]);
    setPwValMsg(isValid ? "사용 가능한 비밀번호 입니다." : message);
  };

  // 비밀번호 확인 유효성 검사
  const handlePwReChange = (e) => {
    const value = e.target.value.trim();
    setPwReValue(value);

    let isValid = true;
    let message = "";

    if (value === "") {
      isValid = false;
      message = "필수 입력 항목입니다!";
    } else if (value !== pwValue) {
      isValid = false;
      message = "입력한 비밀번호와 일치하지 않습니다.";
    }

    setValList((prevValList) => [...prevValList.slice(0, 5), isValid]);
    setPwReValMsg(isValid ? "비밀번호가 일치합니다." : message);
  };

  // submit 버튼 배경색 수정
  useEffect(() => {
    valList.every((item) => item === true)
      ? setAllTrue(true)
      : setAllTrue(false);
  }, [valList]);

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allTrue) {
      console.log("logined");
      signupFetch();
      // navigate(`/`);
    } else {
      signupFetch();
    }
  };

  // 이미 아이디가 있는 경우 로그인 페이지로 navigate
  const handleNavToLoginClick = (e) => {
    navigate(`/login`);
  };

  const signupFetch = () => {
    const signupUrl = "http://localhost:8080/auth/signup"; // 실제 API 엔드포인트에 맞게 수정 필요

    const requestBody = {
      name: nameValue,
      email: emailValue,
      age: ageValue,
      username: idValue,
      password: pwValue,
      passwordCheck: pwReValue,
    };

    // const requestBody = {
    //   name: "김용민",
    //   email: "aaaaaa1234@gmail.com",
    //   age: "24",
    //   username: "aaaaaa1234",
    //   password: "Smu123!!",
    //   passwordCheck: "Smu123!!",
    // };

    fetch(signupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          // HTTP 상태코드가 200번대가 아닌 경우
          if (response.status === 409) {
            return response.json().then((data) => {
              throw new Error(data.message); // 이미 존재하는 아이디인 경우
            });
          } else if (response.status === 400) {
            return response.json().then((data) => {
              throw new Error(data.message); // 비밀번호가 일치하지 않는 경우
            });
          } else {
            throw new Error("회원가입 실패"); // 기타 오류 처리
          }
        }
        return response.json(); // HTTP 상태코드가 200번대인 경우 JSON 데이터 반환
      })
      .then((data) => {
        // 회원가입 성공
        console.log("회원가입 성공:", data);
        // 여기서 필요한 추가적인 로직을 구현할 수 있음 (예: 로그인 처리 등)
      })
      .catch((error) => {
        // 오류 처리
        console.error("회원가입 중 오류 발생:", error.message);
        // 예외 처리에 따른 적절한 사용자 알림 또는 로직 추가
      });
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
                placeholder="아이디를 입력해주세요"
                value={idValue}
                onChange={handleIdChange}
              />
              <S.InputVal style={{ color: valList[1] ? "#0f0" : "#f00" }}>
                {idValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="이메일을 입력해주세요"
                value={emailValue}
                onChange={handleEmailChange}
              />
              <S.InputVal style={{ color: valList[2] ? "#0f0" : "#f00" }}>
                {emailValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="나이를 입력해주세요"
                value={ageValue}
                onChange={handleAgeChange}
              />
              <S.InputVal style={{ color: valList[3] ? "#0f0" : "#f00" }}>
                {ageValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="비밀번호를 입력해주세요"
                value={pwValue}
                onChange={handlePwChange}
              />
              <S.InputVal style={{ color: valList[4] ? "#0f0" : "#f00" }}>
                {pwValMsg}
              </S.InputVal>
            </S.InputBox>
            <S.InputBox>
              <S.Input
                placeholder="비밀번호 확인"
                value={pwReValue}
                onChange={handlePwReChange}
              />
              <S.InputVal style={{ color: valList[5] ? "#0f0" : "#f00" }}>
                {pwReValMsg}
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
          <S.OptionBox>
            <S.SearchPW>이미 아이디가 있으신가요</S.SearchPW>
            <S.BacktoLogin onClick={handleNavToLoginClick}>
              로그인 페이지로 이동하기
            </S.BacktoLogin>
          </S.OptionBox>
        </S.InnerBox>
      </S.SingUpBox>
    </S.Container>
  );
}
