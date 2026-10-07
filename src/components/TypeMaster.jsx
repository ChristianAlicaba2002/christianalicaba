import { useEffect, useMemo, useRef, useState } from "react";

const PROMPTS = [
  "I build web and mobile products with React, Laravel, and ASP.NET Core.",
  "Clarify who the product is for, what has to ship, and what can wait.",
  "Implement the client and API together so the UI stays honest to the data.",
  "Ship it, check the real flow, and leave it in a state someone else can maintain.",
];

function wpmFrom(typed, prompt, elapsedMs) {
  if (elapsedMs < 200) return 0;
  const correct = [...typed].filter((ch, i) => ch === prompt[i]).length;
  const minutes = elapsedMs / 60000;
  return Math.round(correct / 5 / minutes);
}

function accuracyFrom(typed, prompt) {
  if (!typed.length) return 100;
  const correct = [...typed].filter((ch, i) => ch === prompt[i]).length;
  return Math.round((correct / typed.length) * 100);
}

export default function TypeMaster() {
  const inputRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [startedAt, setStartedAt] = useState(null);
  const [now, setNow] = useState(() => Date.now());
  const [done, setDone] = useState(false);

  const prompt = PROMPTS[index];
  const running = Boolean(startedAt) && !done;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setNow(Date.now()), 200);
    return () => window.clearInterval(id);
  }, [running]);

  const elapsed = startedAt ? now - startedAt : 0;
  const wpm = useMemo(() => wpmFrom(typed, prompt, elapsed), [typed, prompt, elapsed]);
  const accuracy = useMemo(() => accuracyFrom(typed, prompt), [typed, prompt]);

  const restart = () => {
    setIndex((i) => (i + 1) % PROMPTS.length);
    setTyped("");
    setStartedAt(null);
    setDone(false);
    setNow(Date.now());
    inputRef.current?.focus();
  };

  const onChange = (event) => {
    if (done) return;
    const next = event.target.value.slice(0, prompt.length);
    if (!startedAt && next.length) {
      const t = Date.now();
      setStartedAt(t);
      setNow(t);
    }
    setTyped(next);
    if (next.length >= prompt.length) {
      setDone(true);
      setNow(Date.now());
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted">Type Master</p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            A short typing exercise. Click the line and type.
          </p>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-muted">
          <span>
            WPM{" "}
            <span className="text-foreground">{startedAt ? wpm : "0"}</span>
          </span>
          <span>
            ACC{" "}
            <span className="text-foreground">{accuracy}%</span>
          </span>
        </div>
      </div>

      <div
        onClick={() => inputRef.current?.focus()}
        className="relative mt-8 w-full cursor-text rounded-md border border-border px-4 py-5 text-left focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-foreground sm:px-5"
      >
        <input
          ref={inputRef}
          value={typed}
          onChange={onChange}
          disabled={done}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Type Master exercise"
          className="absolute inset-0 cursor-text opacity-0"
        />
        <p className="font-mono text-[15px] leading-relaxed sm:text-base">
          {[...prompt].map((ch, i) => {
            const typedCh = typed[i];
            const isCurrent = i === typed.length && !done;
            let color = "text-muted";
            if (typedCh != null) {
              color = typedCh === ch ? "text-foreground" : "text-red-600 dark:text-red-400";
            }
            return (
              <span key={i} className={color}>
                {isCurrent ? <span className="tm-caret" aria-hidden="true" /> : null}
                {ch}
              </span>
            );
          })}
          {done ? null : typed.length >= prompt.length ? (
            <span className="tm-caret" aria-hidden="true" />
          ) : null}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-muted">
          {done ? "Done. Try another line." : "Backspace is allowed."}
        </p>
        <button
          type="button"
          onClick={restart}
          className="inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium text-muted hover:text-foreground"
        >
          Again
        </button>
      </div>
    </div>
  );
}
