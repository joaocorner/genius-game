import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [start, setStart] = useState(false);
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  const initGame = () => {
    // reseting all states
    setStart(true);
    setGeneratedNumber([]);

    // loop to generate random numbers and put them in an array
    for (let i = 0; i < 15; i++) {
      const randomColor = Math.floor(Math.random() * 4) + 1;
      setGeneratedNumber((prev) => [...prev, randomColor]);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Genius Game</h1>
        <div>
          <h2>Melhor rodada: 1</h2>
        </div>
      </header>
      <main>
        <div className="action-buttons">
          <button onClick={initGame} disabled={start}>
            Iniciar
          </button>
          <button>Parar</button>
          <button>Reiniciar</button>
        </div>

        <div className="actual-info">
          <h2>Rodada: 1</h2>
        </div>

        <div className="table-colors ">
          <Button
            text="1"
            color="red"
            className={`btn-colors ${red ? "active" : ""}`}
          />
          <Button
            text="2"
            color="blue"
            className={`btn-colors ${blue ? "active" : ""}`}
          />
          <Button
            text="3"
            color="green"
            className={`btn-colors ${green ? "active" : ""}`}
          />
          <Button
            text="4"
            color="yellow"
            className={`btn-colors ${yellow ? "active" : ""}`}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
