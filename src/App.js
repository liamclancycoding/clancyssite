import './App.css';
import {useState} from 'react';
import {useRef} from 'react';
function App() {
  const ref = useRef(null);
  const reff = useRef(null);
  const [buttonText, setButtonText] = useState();
  function add(a,b){
    return parseInt(a)+parseInt(b);
  }
  const handleClick = event => {
    var c = add(ref.current.value, reff.current.value);
    setButtonText(c);
  };
  
  return (
    <div className="App" >
      <label htmlFor="message">My Textarea</label>
      <input id="a" ref={ref}></input>
      <input id="b" ref={reff}></input>
      <button onClick={handleClick}> press me</button>
      <br></br>
      <br></br>
      <br></br>
      <label>{buttonText}</label>
      </div>
      )
}

export default App;
