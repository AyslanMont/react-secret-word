// CSS
import "./StartScreen.css";

export default function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Selecione a difículdade: </p>
      <select name="difficulty" className="options">
        <option value="easy" selected>
          Fácil
        </option>
        <option value="middle">Médio</option>
        <option value="hard">Difícil</option>
      </select>
      <p>Clique no botão abaixo para começar a jogar!</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
}
