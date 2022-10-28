import { useEffect, useState } from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [maxScore, setMaxScore] = useState(0);

  const colorList = ["darkred", "darkblue", "darkgreen", "goldenrod"];

  // reseting the state of the game, except for the max score
  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");

  const startHandle = () => {
    setIsOn(true);
  };

  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true });
    } else {
      setPlay(initPlay);
    }
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorList[Math.floor(Math.random() * 4)];

      const copyColors = [...play.colors];
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors });
    }
  }, [isOn, play.isDisplay]);

  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length]);

  const displayColors = async () => {
    await timeout(1000);
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(1000);
      setFlashColor("");
      await timeout(1000);

      if (i === play.colors.length - 1) {
        const copyColors = [...play.colors];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
      }
    }
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const colorClick = async (color) => {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);

      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await timeout(1000);
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await timeout(1000);
        setPlay({ ...initPlay, score: play.colors.length });
      }
      await timeout(1000);
      setFlashColor("");
    }
  };

  //getting the max score from the local storage
  useEffect(() => {
    setMaxScore(localStorage.getItem("maxScore"));
    if (maxScore) {
      setPlay({ ...play, maxScore: JSON.parse(maxScore) });
    }
  }, []);

  //setting the max score in the local storage and adjusting if needed
  useEffect(() => {
    if (play.score > maxScore) {
      setMaxScore(play.score);
      localStorage.setItem("maxScore", JSON.stringify(play.score));
    }
  }, [play.score]);

  const closeHandle = () => {
    setIsOn(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Genius Game </h1>
        <div>
          <h2>Melhor rodada: {maxScore}</h2>
        </div>
      </header>
      <main>
        <div className="action-buttons">
          {!isOn && !play.score && (
            <button onClick={startHandle}>Iniciar</button>
          )}
        </div>
        <div className="action-buttons">
          {isOn && !play.isDisplay && !play.userPlay && play.score && (
            <div className="container">
              <h2>Fim de Jogo.. Você chegou até a {play.score}ª rodada</h2>
              <button onClick={closeHandle}>Fechar</button>
            </div>
          )}
        </div>

        <div className="actual-info">
          {isOn && !play.isDisplay && !play.userPlay && play.score && (
            <h2>Placar Final: {play.score}</h2>
          )}

          {isOn && (play.isDisplay || play.userPlay) && (
            <h2>Placar atual: {play.score}</h2>
          )}
        </div>
        <div className="table-colors">
          {colorList.map((v) => (
            <Button
              key={v}
              flash={flashColor === v}
              color={v}
              onClick={() => {
                colorClick(v);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
