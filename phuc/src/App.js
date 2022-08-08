import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <AppText />
    </div>
  );
}
function AppText() {
  const [name, setName] = useState("");
  const [src, Setsrc] = useState("");
  const [qly, Setqly] = useState("");
  function handleClick() {
    console.log({
      name
    });
  }
  return (
    <div className="App">
      <h1>Hãy Nhập Thông Tin Tại Đây</h1>
      <div>
        <span>Name : </span>
        <input
          type={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <span>SRC Image : </span>
        <input
          type={"src"}
          value={src}
          onChange={(e) => Setsrc(e.target.value)}
        />
      </div>
      <div>
        <span>Quality </span>
        <input
          type={"number"}
          value={qly}
          min="1"
          onChange={(e) => Setqly(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
export default App;
