import "./index.css";
import axios from "axios";
import { useState , useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => setAdvice(response.data.slip.advice))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  },[]);

  return (
    <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
