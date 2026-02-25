import type { RefObject } from "react";

interface Props {
  inputRef: RefObject<HTMLInputElement | null>;
  input: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onSubmit: () => void;
  disabled: boolean;
  submitDisabled: boolean;
}

export default function AnswerInput({
  inputRef,
  input,
  onChange,
  onKeyDown,
  onSubmit,
  disabled,
  submitDisabled,
}: Props) {
  return (
    <div className="input-row">
      <input
        ref={inputRef}
        className="answer-input"
        type="text"
        placeholder="Type transliteration…"
        value={input}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        disabled={disabled}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
      />
      <button
        className="btn btn-submit"
        onClick={onSubmit}
        disabled={submitDisabled}
      >
        Submit
      </button>
    </div>
  );
}
