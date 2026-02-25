import { useRef } from "react";
import { pickRandomImage } from "../data/correctImages";

type Feedback = "correct" | "incorrect" | null;

interface Props {
  feedback: Feedback;
  correctAnswer: string;
  onNext: () => void;
}

export default function FeedbackPanel({
  feedback,
  correctAnswer,
  onNext,
}: Props) {
  const imageRef = useRef<string>("");
  const prevFeedback = useRef<Feedback>(null);

  if (feedback === "correct" && prevFeedback.current !== "correct") {
    imageRef.current = pickRandomImage();
  }
  prevFeedback.current = feedback;

  if (feedback === "correct") {
    return (
      <div className="feedback feedback-correct">
        <p>✅ Correct!</p>
        {imageRef.current && (
          <img
            src={imageRef.current}
            alt="Correct!"
            className="feedback-image"
          />
        )}
      </div>
    );
  }

  if (feedback === "incorrect") {
    return (
      <div className="feedback feedback-incorrect">
        <p>❌ Incorrect</p>
        <p>
          Correct answer: <strong>{correctAnswer}</strong>
        </p>
        <button className="btn btn-next" onClick={onNext}>
          Next →
        </button>
      </div>
    );
  }

  return null;
}
