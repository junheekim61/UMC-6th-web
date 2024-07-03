import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState('none');

  return (
    <>
      <p>안녕하세요</p>
      <p>내용내용내용</p>
      <button onClick={()=>{setModalOpen('flex')}}>버튼 열기</button>
      <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
    </>
  );
}

export default App;
