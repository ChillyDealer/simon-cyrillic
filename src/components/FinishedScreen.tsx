interface Props {
  score: number;
  deckLength: number;
  onRestart: () => void;
}

export default function FinishedScreen({
  score,
  deckLength,
  onRestart,
}: Props) {
  return (
    <div className="quiz-container">
      <h2 className="finished-title">Completed.</h2>
      <p className="finished-score">
        Final Score: <strong>{score}</strong> / {deckLength}
      </p>
      <button className="btn btn-restart" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}
