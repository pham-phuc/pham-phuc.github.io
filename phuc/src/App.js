import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function App() {
  const [number, setNumber] = useState(1);
  const [text, printfText] = useState("");
  const incrementNumber = () => {
    setNumber((number) => number + 1);
  }
  const decrementNumber = () => {
    setNumber((number) => number - 1);
  }
  return (    
    <div className="App">
     <AppText text={text}/>
     <AppText text={number}/>
     <button onClick={incrementNumber}>IncrementNumber</button>
     <button onClick={decrementNumber}>DecrementNumber</button>
     
    </div>
  );
}
function AppText(props){
  return <h1 class="AppText "> hello, {props.text}</h1>
}
export default App;
