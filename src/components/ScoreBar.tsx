interface Props {
  score: number;
  total: number;
  index: number;
  deckLength: number;
}

export default function ScoreBar({ score, total, index, deckLength }: Props) {
  return (
    <div className="score-bar">
      Score: <strong>{score}</strong> / {total} &nbsp;|&nbsp; Word{" "}
      <strong>{index + 1}</strong> of {deckLength}
    </div>
  );
}
