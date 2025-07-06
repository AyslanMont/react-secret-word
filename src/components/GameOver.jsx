import "./GameOver.css";

export default function GameOver({ retry }) {
  return (
    <div>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
}
