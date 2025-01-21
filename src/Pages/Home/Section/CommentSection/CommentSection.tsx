import { useState } from "react";
import "./CommentSection.css";
import CommentData from "./ CommentData";

const CommentSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) =>
        prev < CommentData.length - 1 ? prev + 1 : prev
      );
    };
  
    return (
      <section
        className="comment-section"
        style={{
          backgroundColor: "#FFFF21",
          opacity: 0.41,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <div className="comments-container">
          {/* Arrows */}
          <button
            className="arrow left-arrow"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &#9664;
          </button>
  
          {/* Comments */}
          <div className="comments-wrapper">
            {CommentData.slice(currentIndex, currentIndex + 3) // Show only 3 comments at a time
              .map((comment, index) => (
                <div className="comment-card" key={index}>
                  <h3>{comment.name}</h3>
                  <p className="comment-date">{comment.date}</p>
                  <p className="comment-text">{comment.text}</p>
                </div>
              ))}
          </div>
  
          {/* Arrows */}
          <button
            className="arrow right-arrow"
            onClick={handleNext}
            disabled={currentIndex >= CommentData.length - 3}
          >
            &#9654;
          </button>
        </div>
      </section>
    );
  };
export default CommentSection;
