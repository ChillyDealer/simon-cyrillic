type Feedback = "correct" | "incorrect" | null;

interface Props {
  word: string;
  feedback: Feedback;
}

export default function WordCard({ word, feedback }: Props) {
  return (
    <div className={`word-card ${feedback ?? ""}`}>
      <span className="cyrillic-word">{word}</span>
    </div>
  );
}
