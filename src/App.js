import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [myString, setMyString] = useState(undefined);

  useEffect(() => {
    fetch("/tc/string", {
      method: "GET",
      headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(json => setMyString(json.toString()))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <p>
        My string: {myString}
      </p>
    </div>
  );
}

export default App;
