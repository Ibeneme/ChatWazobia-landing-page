import React, { useState } from "react";
import "./AyoGame.css";

const NUM_PITS = 12; // 6 pits per player
const INITIAL_SEEDS_PER_PIT = 4;

const AyoGame: React.FC = () => {
  const [pits, setPits] = useState<number[]>(
    Array(NUM_PITS).fill(INITIAL_SEEDS_PER_PIT)
  );
  const [currentPlayer, setCurrentPlayer] = useState<"A" | "B">("A");
  const [scores, setScores] = useState<{ A: number; B: number }>({
    A: 0,
    B: 0,
  });
  const [droppingSeed, setDroppingSeed] = useState<boolean>(false); // Track if a seed is currently being dropped
  const [seedDropIndex, setSeedDropIndex] = useState<number | null>(null); // Track the pit where seed is dropping


  console.log(droppingSeed, setScores, 'setScores')
  
  const handlePitClick = (pitIndex: number) => {
    const isPlayerAPit = pitIndex < 6; // Player A controls pits 0-5
    if (
      (currentPlayer === "A" && !isPlayerAPit) ||
      (currentPlayer === "B" && isPlayerAPit)
    ) {
      return; // Ignore if it's not the active player's turn
    }

    let seedsToDistribute = pits[pitIndex];
    if (seedsToDistribute === 0) return; // Do nothing if the selected pit is empty

    const updatedPits = [...pits];
    updatedPits[pitIndex] = 0; // Empty the selected pit

    // Custom move order: 1, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8, 7, 1, 2, 3, 4, ...
    const moveOrder = [
      0, 1, 2, 3, 4, 5, 11, 10, 9, 8, 7, 6, 0, 1, 2, 3, 4, 5, 11, 10, 9, 8, 7, 6
    ];

    // Find the starting position in the custom order
    const startIndex = moveOrder.indexOf(pitIndex);
    const orderedPits = moveOrder.slice(startIndex).concat(moveOrder.slice(0, startIndex));

    // Distribute all seeds in the custom order without changing turn yet
    setDroppingSeed(true); // Set dropping flag true
    distributeSeeds(updatedPits, orderedPits, seedsToDistribute, 0);
  };

  const distributeSeeds = (
    updatedPits: number[],
    orderedPits: number[],
    seedsToDistribute: number,
    index: number
  ) => {
    if (seedsToDistribute <= 0) {
      setDroppingSeed(false); // Stop dropping seeds once we're done
      checkTurn(); // Check if the turn should be switched
      return;
    }

    const pitIndex = orderedPits[index % orderedPits.length];
    updatedPits[pitIndex]++;

    // If the pit has just one seed left and it's the only seed in the pit, we need to move it
    if (updatedPits[orderedPits[index % orderedPits.length]] === 1) {
      // This pit now has only one seed, and we need to move it to the next one.
      // Continue distributing the seed to the next pit
      distributeSeeds(updatedPits, orderedPits, seedsToDistribute - 1, index + 1);
    }

    setSeedDropIndex(pitIndex); // Track where the seed is dropping
    setPits([...updatedPits]); // Update the pits with the new seed count

    // Continue dropping seeds with a delay (uncomment the setTimeout for a delay)
    setTimeout(() => {
      distributeSeeds(updatedPits, orderedPits, seedsToDistribute - 1, index + 1);
    }, 1000); // 1-second delay for each seed drop (adjust as needed)
  };

  const checkTurn = () => {
    const playerASeeds = pits.slice(0, 6).reduce((acc, val) => acc + val, 0);
    const playerBSeeds = pits.slice(6).reduce((acc, val) => acc + val, 0);

    // Only toggle player if all seeds are distributed, and the opponent has seeds to play
    if (
      (currentPlayer === "A" && playerBSeeds > 0) ||
      (currentPlayer === "B" && playerASeeds > 0)
    ) {
      togglePlayer();
    }
  };

  const togglePlayer = () => {
    setCurrentPlayer((prev) => (prev === "A" ? "B" : "A"));
  };

  return (
    <div className="game-container">
      <h1>Ayo Game</h1>
      <h2>
        Current Player:{" "}
        <span className={`player-${currentPlayer}`}>
          Player {currentPlayer}
        </span>
      </h2>
      <h3>
        Scores: Player A - {scores.A} | Player B - {scores.B}
      </h3>

      <div className="board">
        {/* Top Row (Player B's side) */}
        <div className="player-row">
          {pits.slice(6).map((seeds, index) => (
            <div
              key={index + 6}
              className={`pit ${
                currentPlayer === "B" ? "active" : "inactive"
              } ${seedDropIndex === index + 6 ? "dropping" : ""} player-b`}
              onClick={() => handlePitClick(index + 6)}
            >
              <div className="pit-index">{index + 7}</div> {/* Display the pit index */}
              {Array(seeds)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="stone">
                    {/* Displaying the index for each seed */}
                    <span className="stone-index">{i + 1}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Bottom Row (Player A's side) */}
        <div className="player-row">
          {pits.slice(0, 6).map((seeds, index) => (
            <div
              key={index}
              className={`pit ${
                currentPlayer === "A" ? "active" : "inactive"
              } ${seedDropIndex === index ? "dropping" : ""} player-a`}
              onClick={() => handlePitClick(index)}
            >
              <div className="pit-index">{index + 1}</div> {/* Display the pit index */}
              {Array(seeds)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="stone">
                    {/* Displaying the index for each seed */}
                    <span className="stone-index">{i + 1}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AyoGame;
