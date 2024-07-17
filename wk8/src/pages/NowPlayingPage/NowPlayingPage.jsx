import { useEffect, useState, useRef } from "react";
import * as S from "./styles.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2I1MWYzNDc4OTk5YjlmMzk4NjA0NDllNWY5NTFiOSIsInN1YiI6IjY1OTNiNDQwZmMzMWQzNzIxMTQ2YmUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SyXOvFQuPXaS3KFZ1B3bsp2_NiOAgMDSNGYSkIwjqcE",
  },
};

export default function NowPlayingPage() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const elementRef = useRef(null);

  const fetchMoreItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setMovieData((prevData) => [...prevData, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore && !loading) {
      fetchMoreItems();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasMore, loading]);

  useEffect(() => {
    fetchMoreItems();
  }, []);

  return (
    <S.Container>
      {loading ? <LoadingSpinner /> : <MovieList data={movieData} />}

      {hasMore && (
        <div
          ref={elementRef}
          style={{ textAlign: "center", padding: "50px", color: "white" }}
        >
          {loading ? <LoadingSpinner heigth="auto" /> : ""}
        </div>
      )}
    </S.Container>
  );
}
