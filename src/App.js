import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [generatedColors, setGeneratedColors] = useState([]);
  const [round, setRound] = useState(2);

  const generateColor = () => {
    // generate random number between 1 and 4
    const randNum = Math.floor(Math.random() * 4) + 1;
    // return a color based on the random number
    switch (randNum) {
      case 1:
        setGeneratedColors([...generatedColors, "red"]);
        break;
      case 2:
        setGeneratedColors([...generatedColors, "green"]);
        break;
      case 3:
        setGeneratedColors([...generatedColors, "blue"]);
        break;
      case 4:
        setGeneratedColors([...generatedColors, "yellow"]);
        break;
      default:
        console.log("error");
    }
  };

  const initGame = () => {
    for (let i = 0; i < round; i++) {
      setTimeout(() => {
        generateColor();
      }, 1000 * i);
    }
  };

  const increaseRound = () => {
    setRound(round + 1);
  };

  return (
    <div className="App">
      <header>
        <h1>Genius Game</h1>
        <div>
          <h2>High Score: 0</h2>
          <h2>High Round: 1</h2>
          <h2>High Time: 0</h2>
        </div>
      </header>
      <main>
        <div className="action-buttons">
          <button onClick={initGame}>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>

        <div className="actual-info">
          <h2>Score: 0</h2>
          <h2>Round: 1</h2>
          <h2>Time: 0</h2>
        </div>

        <div className="table-colors">
          <Button text="1" color="red" />
          <Button text="2" color="blue" />
          <Button text="3" color="green" />
          <Button text="4" color="yellow" />
        </div>
      </main>
    </div>
  );
}

export default App;
