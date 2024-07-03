import * as S from "./styles.js";
import CreditCard from "../CreditCard/CreditCard.jsx";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2I1MWYzNDc4OTk5YjlmMzk4NjA0NDllNWY5NTFiOSIsInN1YiI6IjY1OTNiNDQwZmMzMWQzNzIxMTQ2YmUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SyXOvFQuPXaS3KFZ1B3bsp2_NiOAgMDSNGYSkIwjqcE",
  },
};

export default function Credits({ id }) {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCredits(data);
      } catch (error) {
        console.error("Error fetching credits:", error);
        // 에러 처리 코드 추가
      }
    };
    fetchCredits();
  }, [id]);

  // credits가 null인 경우를 처리하는 조건부 렌더링
  if (credits === null) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      <S.CardListBox>
        {credits.cast.map(
          (
            credit,
            index // 여기서 credits가 null인 경우에는 map을 호출하지 않음
          ) => (
            <S.CardWrapper key={index}>
              <CreditCard
                profile_path={credit.profile_path}
                name={credit.name}
                role={credit.known_for_department}
              />
            </S.CardWrapper>
          )
        )}
      </S.CardListBox>
    </S.Container>
  );
}
