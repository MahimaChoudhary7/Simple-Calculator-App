import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  const plus=(e)=> { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  const minus=(e)=> {
     e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
  	// Add the code for the minus function 
  };
 
  const times=(e)=> {
     e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
    // Add the code for the plus function 
  }; 
 
  const divide=(e)=> {
     e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
    // Add the code for the divide function 
  };
 
  const resetInput=(e)=> {
    e.preventDefault(); 
    inputRef.current.value=0; 
    // Add the code for the resetInput function 
  }; 
 
  const resetResult=(e)=> {
    e.preventDefault(); 
    setResult((prevVal)=> prevVal*0);
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onclick={minus}>subtract</button> 
        <button onclick={times}>multiply</button> 
        <button onclick={divide}>divide</button> 
        <button onclick={resetInput}>reset input</button> 
        <button onclick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
