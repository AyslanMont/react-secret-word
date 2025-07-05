//  CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// Data
import { wordList } from "./data/words";

// Components
import StartScreen from "./components/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen></StartScreen>}
    </div>
  );
}
export default App;
