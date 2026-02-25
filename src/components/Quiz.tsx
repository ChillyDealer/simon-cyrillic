import { useState, useEffect, useRef, useCallback } from "react";
import { words } from "../data/words";
import { transliterate } from "../data/cyrillicMap";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

type Feedback = "correct" | "incorrect" | null;

export default function Quiz() {
  const [deck, setDeck] = useState<string[]>(() => shuffle(words));
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [finished, setFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWord = deck[index];

  const advance = useCallback(() => {
    if (index + 1 >= deck.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setInput("");
      setFeedback(null);
      setCorrectAnswer("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [index, deck.length]);

  const handleSubmit = useCallback(() => {
    if (feedback !== null || finished) return;
    const expected = transliterate(currentWord);
    const trimmed = input.trim().toLowerCase();
    const isCorrect = trimmed === expected;
    setTotal((t) => t + 1);
    if (isCorrect) {
      setScore((s) => s + 1);
      setFeedback("correct");
      setTimeout(advance, 1000);
    } else {
      setFeedback("incorrect");
      setCorrectAnswer(expected);
    }
  }, [feedback, finished, currentWord, input, advance]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
  };

  const handleNext = () => {
    advance();
  };

  const handleRestart = () => {
    setDeck(shuffle(words));
    setIndex(0);
    setInput("");
    setFeedback(null);
    setCorrectAnswer("");
    setScore(0);
    setTotal(0);
    setFinished(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (finished) {
    return (
      <div className="quiz-container">
        <h2 className="finished-title">Quiz Complete! 🎉</h2>
        <p className="finished-score">
          Final Score: <strong>{score}</strong> / {deck.length}
        </p>
        <button className="btn btn-restart" onClick={handleRestart}>
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="score-bar">
        Score: <strong>{score}</strong> / {total} &nbsp;|&nbsp; Word{" "}
        <strong>{index + 1}</strong> of {deck.length}
      </div>

      <div className={`word-card ${feedback ?? ""}`}>
        <span className="cyrillic-word">{currentWord}</span>
      </div>

      <div className="input-row">
        <input
          ref={inputRef}
          className="answer-input"
          type="text"
          placeholder="Type transliteration…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={feedback !== null}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
        <button
          className="btn btn-submit"
          onClick={handleSubmit}
          disabled={feedback !== null || input.trim() === ""}
        >
          Submit
        </button>
      </div>

      {feedback === "correct" && (
        <p className="feedback feedback-correct">✅ Correct!</p>
      )}
      {feedback === "incorrect" && (
        <div className="feedback feedback-incorrect">
          <p>❌ Incorrect</p>
          <p>
            Correct answer: <strong>{correctAnswer}</strong>
          </p>
          <button className="btn btn-next" onClick={handleNext}>
            Next →
          </button>
        </div>
      )}

      <button className="btn btn-restart btn-sm" onClick={handleRestart}>
        ↺ Restart
      </button>
    </div>
  );
}
