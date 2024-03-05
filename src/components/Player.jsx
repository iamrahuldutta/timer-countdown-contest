import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerInput = useRef();

  const [playerName, setPlayerName] = useState(null);

  function handleButtonClick() {
    setPlayerName(playerInput.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
