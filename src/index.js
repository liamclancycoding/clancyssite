import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );


  const other = <Welcome name="Joe"> </Welcome>;
    const element = (
      <div>
          <App></App>
          <br></br>
          {other}
        <p>It is {new Date().toLocaleTimeString()}.</p>
        
        <br></br>
        <br></br>
        <br></br>
        
      </div>
    );
    root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        //<button name="button" onClick={document.getElementById("zero").value = add(getValue(document.getElementById("a").value, document.getElementById("b").value))}>press me</button>
        //<label name="zero">{this.button.onClick}</label>
reportWebVitals();
