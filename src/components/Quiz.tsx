import { useState, useEffect, useRef, useCallback } from "react";
import { words } from "../data/words";
import { transliterate } from "../data/cyrillicMap";
import ScoreBar from "./ScoreBar";
import WordCard from "./WordCard";
import AnswerInput from "./AnswerInput";
import FeedbackPanel from "./FeedbackPanel";
import FinishedScreen from "./FinishedScreen";

type Feedback = "correct" | "incorrect" | null;

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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
      setTimeout(advance, 1500);
    } else {
      setFeedback("incorrect");
      setCorrectAnswer(expected);
    }
  }, [feedback, finished, currentWord, input, advance]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSubmit();
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
      <FinishedScreen
        score={score}
        deckLength={deck.length}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="quiz-container">
      <ScoreBar
        score={score}
        total={total}
        index={index}
        deckLength={deck.length}
      />

      <WordCard word={currentWord} feedback={feedback} />

      <AnswerInput
        inputRef={inputRef}
        input={input}
        onChange={setInput}
        onKeyDown={handleKeyDown}
        onSubmit={handleSubmit}
        disabled={feedback !== null}
        submitDisabled={feedback !== null || input.trim() === ""}
      />

      <FeedbackPanel
        feedback={feedback}
        correctAnswer={correctAnswer}
        onNext={advance}
      />

      <button className="btn btn-restart btn-sm" onClick={handleRestart}>
        ↺ Restart
      </button>
    </div>
  );
}
