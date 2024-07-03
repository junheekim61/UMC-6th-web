// import * as S from "./AppStyle";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import PopularPage from "./pages/PopularPage/PopularPage";
import NowPlayingPage from "./pages/NowPlayingPage/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage/TopRatedPage";
import UpComingPage from "./pages/UpComingPage/UpComingPage";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/popular" element={<PopularPage />}></Route>
        <Route path="/nowplaying" element={<NowPlayingPage />}></Route>
        <Route path="/toprated" element={<TopRatedPage />}></Route>
        <Route path="/upcoming" element={<UpComingPage />}></Route>
        <Route path="/movie/:title" element={<MovieDetail />} />
      </Routes>
    </>
  );
}
