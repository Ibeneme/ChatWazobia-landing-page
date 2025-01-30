import React, { useState } from "react";
import "./styles.css";

interface Hole {
  seeds: number;
}

const AyoBoard: React.FC = () => {
  // Initialize the board with 12 holes, each containing 4 seeds
  const initialBoard: Hole[] = Array(12).fill({ seeds: 4 });
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [selectedHole, setSelectedHole] = useState<number | null>(null); // Tracks the selected hole

  const handleHoleClick = (index: number) => {
    // Ensure players only interact with their respective holes
    if (
      (currentPlayer === 1 && index >= 6) || // Player 1: only holes 0-5
      (currentPlayer === 2 && index < 6) // Player 2: only holes 6-11
    ) {
      alert(`Invalid move! It's Player ${currentPlayer}'s turn.`);
      return;
    }

    // Ensure the clicked hole has seeds
    if (board[index].seeds === 0) {
      alert("You cannot pick an empty hole!");
      return;
    }

    // Highlight the clicked hole
    setSelectedHole(index);

    const updatedBoard = [...board];
    let seedsToDistribute = updatedBoard[index].seeds;

    // Remove all seeds from the clicked hole
    updatedBoard[index].seeds = 0;

    let currentIndex = index;
    while (seedsToDistribute > 0) {
      currentIndex = (currentIndex + 1) % 12; // Move to the next hole

      // Skip the opponent's holes
      if ((currentPlayer === 1 && currentIndex >= 6) || (currentPlayer === 2 && currentIndex < 6)) {
        continue; // Skip opponent's holes
      }

      updatedBoard[currentIndex].seeds += 1; // Add one seed to the current hole
      seedsToDistribute--; // Reduce the remaining seeds
    }

    // Update the board and switch turns
    setBoard(updatedBoard);
    setSelectedHole(null); // Clear the highlighted hole

    // Switch turns after a valid move
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1); 
  };

  return (
    <div className="board-container">
      <div className="board">
        {/* Player 2 Label */}
        <div className="player-label">Player 2</div>

        {/* Player 2's Row: Holes 6-11 */}
        <div className="holes-row">
          {board.slice(6, 12).map((hole, index) => (
            <div
              key={index + 6}
              className="hole"
              style={{
                borderColor: selectedHole === index + 6 ? "green" : "transparent", // Highlight selected hole
              }}
              onClick={() => handleHoleClick(index + 6)}
            >
              <div className="seeds">
                {Array.from({ length: hole.seeds }).map((_, i) => (
                  <div key={i} className="seed"></div>
                ))}
              </div>
              <div className="index">{index + 6}</div>
            </div>
          ))}
        </div>

        {/* Player 1's Row: Holes 0-5 */}
        <div className="holes-row">
          {board.slice(0, 6).map((hole, index) => (
            <div
              key={index}
              className="hole"
              style={{
                borderColor: selectedHole === index ? "green" : "transparent", // Highlight selected hole
              }}
              onClick={() => handleHoleClick(index)}
            >
              <div className="seeds">
                {Array.from({ length: hole.seeds }).map((_, i) => (
                  <div key={i} className="seed"></div>
                ))}
              </div>
              <div className="index">{index}</div>
            </div>
          ))}
        </div>

        {/* Player 1 Label */}
        <div className="player-label">Player 1</div>
      </div>
    </div>
  );
};

export default AyoBoard;
