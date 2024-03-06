import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  console.log(timeIsActive);
  const timer = useRef();
  const dialog = useRef();

  if (timeRemaining <= 0) {
    handleClearTimerInterval();
  }

  function handleResetTimer() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    handleClearTimerInterval();
  }

  function handleClearTimerInterval() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining / 1000}
        onReset={handleResetTimer}
      />
      <section className="challenge">
        <h2>
          {title}
          <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
          <p>
            <button onClick={timeIsActive ? handleStop : handleStart}>
              {timeIsActive ? "Stop" : "Start"} Challenge
            </button>
          </p>
          <p className={timeIsActive ? "active" : undefined}>
            {timeIsActive ? "Time is running..." : "Timer inactive"}
          </p>
        </h2>
      </section>
    </>
  );
}
