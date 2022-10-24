import "./App.css";
import Button from "./components/Button";

function App() {
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
          <button>Start</button>
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
