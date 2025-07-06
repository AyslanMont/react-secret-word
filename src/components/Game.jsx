import "./Game.css";

export default function Game({ verifyLetter }) {
  return (
    <div>
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  );
}
