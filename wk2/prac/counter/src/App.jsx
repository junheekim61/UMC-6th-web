import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <div className="button-box">
        <button id="btn1" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button id="btn2" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
