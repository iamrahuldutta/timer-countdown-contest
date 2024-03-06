import { forwardRef, useImperativeHandle, useReducer, useRef } from "react";

const ResultModel = forwardRef(function ResultModal(
  { targetTime, timeRemaining, handleResetTimer },
  ref
) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{timeRemaining} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={handleResetTimer}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;
