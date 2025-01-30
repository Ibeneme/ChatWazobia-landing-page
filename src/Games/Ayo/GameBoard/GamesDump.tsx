import React, { useState, useEffect } from "react";
import './GameBoard.css';

const GameBoard: React.FC = () => {
  const [holes, setHoles] = useState<number[]>(Array(12).fill(4));
  const [currentPlayer, setCurrentPlayer] = useState<"Ikenna" | "System">("Ikenna");
  const [error, setError] = useState<string | null>(null);
  const [activeHole, setActiveHole] = useState<number | null>(null); // Track active hole for background color change
  const [isSpreading, setIsSpreading] = useState<boolean>(false); // New state to track spreading status
  const [scores, setScores] = useState<{ Ikenna: number; System: number }>({
    Ikenna: 0,
    System: 0,
  }); // To track scores of both players
  const [gameOver, setGameOver] = useState<boolean>(false); // State to track game completion
  const [message, setMessage] = useState<string>(""); // Congratulatory message

  // Define movement order (clockwise)
  const moveOrder = [6, 7, 8, 9, 10, 11, 5, 4, 3, 2, 1, 0];

  // Function to check if all holes are empty and total points are 12
  const checkGameOver = () => {
    if (holes.every(hole => hole === 0) && scores.Ikenna + scores.System === 12) {
      setGameOver(true);
      setMessage(`Congratulations! The game is over. Total points: Ikenna ${scores.Ikenna} - System ${scores.System}`);
    }
  };

  useEffect(() => {
    // Check for game completion on each update
    checkGameOver();
  }, [holes, scores]);

  const handleClick = (index: number) => {
    // If the hole is empty, show an error
    if (holes[index] === 0) {
      setError("Cannot play from an empty hole!");
      setTimeout(() => setError(null), 2000);
      return;
    }

    // If seeds are currently being spread, don't allow another move
    if (isSpreading || gameOver) return; // Disable if game is over

    // Get the number of seeds from the clicked hole
    let seeds = holes[index];
    let newHoles = [...holes];
    newHoles[index] = 0; // Empty the hole

    let currentIndex = index;

    // Function to drop a seed one by one with a delay
    const dropSeed = (remainingSeeds: number) => {
      if (remainingSeeds <= 0) {
        // Switch turn after all seeds are distributed
        setCurrentPlayer(currentPlayer === "Ikenna" ? "System" : "Ikenna");
        setIsSpreading(false); // End spreading state
        return;
      }

      // Move to the next hole in the order
      currentIndex = moveOrder[(moveOrder.indexOf(currentIndex) + 1) % moveOrder.length];
      newHoles[currentIndex] += 1; // Drop a seed in the next hole

      // Check if the hole now has exactly 4 seeds
      if (newHoles[currentIndex] === 4) {
        // Add one point to the current player
        setScores((prevScores) => ({
          ...prevScores,
          [currentPlayer]: prevScores[currentPlayer] + 1,
        }));

        // Remove the 4 stones from this hole after it counts as a point
        newHoles[currentIndex] = 0;
      }

      // Set active hole and reset after 1 second
      setActiveHole(currentIndex);
      setTimeout(() => setActiveHole(null), 1000); // Reset after 1 second

      setHoles([...newHoles]);

      setTimeout(() => dropSeed(remainingSeeds - 1), 2000); // Drop next seed after 2 seconds
    };

    // Start spreading seeds
    setIsSpreading(true); // Disable buttons during seed spreading
    dropSeed(seeds);
  };

  const handleRestart = () => {
    // Reset the game state
    setHoles(Array(12).fill(4));
    setScores({ Ikenna: 0, System: 0 });
    setGameOver(false);
    setMessage("");
    setCurrentPlayer("Ikenna");
  };

  const handleNextLevel = () => {
    // Logic for going to the next level, can be modified
    alert("Going to the next level... (not implemented yet)");
  };

  return (
    <div className="game-board-container">
      {/* Display Player Turn */}
      {!gameOver && <div className="player-turn">{currentPlayer}'s Turn</div>}

      {/* Display Scores */}
      {!gameOver && (
        <div className="score-board">
          <div>Ikenna: {scores.Ikenna}</div>
          <div>System: {scores.System}</div>
        </div>
      )}

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Game Over Message */}
      {gameOver && (
        <div className="game-over-message">
          <h2>{message}</h2>
          <div>
            <button onClick={handleRestart}>Restart Game</button>
            <button onClick={handleNextLevel}>Next Level</button>
          </div>
        </div>
      )}

      {/* First Row */}
      <div className="game-row">
        {holes.slice(0, 6).map((seeds, index) => (
          <button
            key={index}
            className={`hole ${activeHole === index ? "active-hole" : ""}`}
            onClick={() => handleClick(index)}
            disabled={isSpreading || gameOver} // Disable button during seed spreading or game over
          >
            <div className="hole-number">{index + 1}</div>
            <div className="seeds">{'🪨'.repeat(seeds)}</div>
          </button>
        ))}
      </div>

      {/* Second Row */}
      <div className="game-row">
        {holes.slice(6, 12).map((seeds, index) => (
          <button
            key={index + 6}
            className={`hole ${activeHole === index + 6 ? "active-hole" : ""}`}
            onClick={() => handleClick(index + 6)}
            disabled={isSpreading || gameOver} // Disable button during seed spreading or game over
          >
            <div className="hole-number">{index + 7}</div>
            <div className="seeds">{'🪨'.repeat(seeds)}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;