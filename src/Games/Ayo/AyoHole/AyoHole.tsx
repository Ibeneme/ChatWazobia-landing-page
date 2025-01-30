import React from "react";
import "./AyoHole.css";

interface AyoHoleProps {
  seeds: number;
  onClick: () => void;
  isPlayerSide: boolean;
}

const AyoHole: React.FC<AyoHoleProps> = ({ seeds, onClick, isPlayerSide }) => {
  return (
    <div
      className={`ayo-hole ${isPlayerSide ? "player-side" : "opponent-side"}`}
      onClick={onClick}
    >
      {/* Render circles (stones) for seeds */}
      <div className="stones">
        {Array.from({ length: seeds }).map((_, index) => (
          <div key={index} className="stone"></div>
        ))}
      </div>
    </div>
  );
};

export default AyoHole;