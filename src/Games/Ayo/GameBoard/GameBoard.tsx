import React, { useEffect, useState } from "react";
import './GameBoard.css';
import WaitlistModal from "../../../Components/WaitlistModal/WaitlistModal";

const GameBoard: React.FC = () => {
  const [holes, setHoles] = useState<number[]>(Array(12).fill(4)); // 12 holes, each starting with 4 seeds
  const [currentPlayer, setCurrentPlayer] = useState<"You" | "Opponent">("You");
  const [error, setError] = useState<string | null>(null);
  const [activeHole, setActiveHole] = useState<number | null>(null); // Track active hole for background color change
  const [isSpreading, setIsSpreading] = useState<boolean>(false); // New state to track spreading status
  const [scores, setScores] = useState<{ You: number; Opponent: number }>({
    You: 0,
    Opponent: 0,
  }); // To track scores of both players

  const [level, setLevel] = useState<number>(1); // Track current level

  // Define movement order (clockwise)
  const moveOrder = [6, 7, 8, 9, 10, 11, 5, 4, 3, 2, 1, 0];
 const hasStonesLeft = (player: "You" | "Opponent"): boolean => {
    const startIdx = player === "You" ? 0 : 6;
    const endIdx = player === "You" ? 6 : 12;
    return holes.slice(startIdx, endIdx).some(seed => seed > 0);
  };

 const handleClick = (index: number) => {
    // Player can only play from their own holes
    if ((currentPlayer === "You" && index >= 6) || (currentPlayer === "Opponent" && index < 6)) {
      setError(`Cannot play from ${currentPlayer === "You" ? "Opponent's" : "Your"} holes!`);
      setTimeout(() => setError(null), 500);
      return;
    }

    // If the hole is empty, show an error
    if (holes[index] === 0) {
      setError("Cannot play from an empty hole!");
      setTimeout(() => setError(null), 500);
      return;
    }

    // If seeds are currently being spread, don't allow another move
    if (isSpreading) return;

    // Get the number of seeds from the clicked hole
    let seeds = holes[index];
    let newHoles = [...holes];
    newHoles[index] = 0; // Empty the hole

    let currentIndex = index;

    // Function to drop a seed one by one with a delay
    const dropSeed = (remainingSeeds: number) => {
        if (remainingSeeds <= 0) {
          // Check if the last stone landed in a non-empty hole
          if (newHoles[currentIndex] > 1) {
            let extraSeeds = newHoles[currentIndex]; // Take the existing seeds
            newHoles[currentIndex] = 0; // Empty the hole
            setHoles([...newHoles]);
            
            // Continue spreading with the collected seeds
            setTimeout(() => dropSeed(extraSeeds), 500);
            return;
          }
      
          // If the hole contains 4 seeds after dropping, empty it and award a point
          if (newHoles[currentIndex] === 4) {
            newHoles[currentIndex] = 0;
            setScores(prevScores => ({
              ...prevScores,
              [currentPlayer]: prevScores[currentPlayer] + 1
            }));
            setHoles([...newHoles]);
          }
      
          // If the hole is empty, switch turn
          if (hasStonesLeft(currentPlayer === "You" ? "Opponent" : "You")) {
            setCurrentPlayer(currentPlayer === "You" ? "Opponent" : "You");
          }
          setIsSpreading(false); // End spreading state
          return;
        }
      
        // Move to the next hole in the order
        currentIndex = moveOrder[(moveOrder.indexOf(currentIndex) + 1) % moveOrder.length];
        newHoles[currentIndex] += 1; // Drop a seed in the next hole
      
        // If the hole reaches exactly 4 seeds, empty it and update the score
        if (newHoles[currentIndex] === 4) {
          newHoles[currentIndex] = 0;
          setScores(prevScores => ({
            ...prevScores,
            [currentPlayer]: prevScores[currentPlayer] + 1
          }));
        }
      
        // Update UI
        setActiveHole(currentIndex);
        setTimeout(() => setActiveHole(null), 500);
        setHoles([...newHoles]);
      
        setTimeout(() => dropSeed(remainingSeeds - 1), 500);
      };


    // Start spreading seeds
    setIsSpreading(true); // Disable buttons during seed spreading
    dropSeed(seeds);
  };

  // Check if the game is over
  const isGameOver = holes.every(hole => hole === 0);
  const totalPoints = scores.You + scores.Opponent;

  // Determine winner based on points
  const winner = isGameOver ? (
    scores.You > scores.Opponent ? "You" : scores.Opponent > scores.You ? "Opponent" : "It's a draw"
  ) : null;

  // Move to next level and adjust hole sharing based on points
  const handleNextLevel = () => {
    const sharedHoles = Math.min(scores.You + scores.Opponent, 6); // The number of holes the players will share based on points
    const newHoles = Array(sharedHoles * 2).fill(4); // Start with 4 seeds in the shared holes
    setHoles(newHoles);
    setLevel(level + 1); // Move to the next level
    setScores({ You: 0, Opponent: 0 }); // Reset scores for next level
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  // **Trigger modal when game is over**
  useEffect(() => {
    if (isGameOver) {
      openModal();
    }
  }, [isGameOver]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="game-board-container">
        
             <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Display Player Turn */}
      <h1 className="player-turn-h1">CW_AI Ayo Game</h1>
      <div className="player-turn">{currentPlayer}'s Turn</div>

      {/* Display Scores */}
      <div className="score-board">
        <div>You: {scores.You}</div>
        <div>Opponent: {scores.Opponent}</div>
      </div>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Game Over Check */}
      {isGameOver && totalPoints === 12 && (
        <div className="congratulations">
          <div>Game Over!</div>
          <div>Winner: {winner}</div>
          <button onClick={handleNextLevel}>Go to Next Level</button>
        </div>
      )}

<div className="game-media">

        {/* First Row (Your Holes) */}
        <div className="game-row">
        {holes.slice(0, 6).map((seeds, index) => (
          <button
            key={index}
            className={`hole ${activeHole === index ? "active-hole" : ""}`}
            onClick={() => handleClick(index)}
            disabled={isSpreading || isGameOver} // Disable button during spreading and game over
          >
            {/* <div className="hole-number">{index + 1}</div> */}
            <div style={{flexDirection:'row' , display:'flex'}}className="seeds">{'🪨'.repeat(seeds)}</div>
       </button>
        ))}
      </div>

      {/* Second Row (Opponent's Holes with Purple Background) */}
      <div className="game-row">
        {holes.slice(6, 12).map((seeds, index) => (
          <button
            key={index + 6}
            className={`system-hole ${activeHole === index + 6 ? "active-hole" : ""}`}
            onClick={() => handleClick(index + 6)}
            disabled={isSpreading || isGameOver} // Disable button during spreading and game over
            //style={{ backgroundColor: "purple" }} // Set purple background for system's holes
          >
            {/* <div className="hole-number">{index + 7}</div> */}
            <div style={{flexDirection:'row' , display:'flex'}}className="seeds">{'🪨'.repeat(seeds)}</div>
          </button>
        ))}
      </div>

</div>
    </div>
  );
};

export default GameBoard;