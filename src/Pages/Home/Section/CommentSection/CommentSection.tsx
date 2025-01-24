import { useState } from "react";
import "./CommentSection.css";
import CommentData from "./CommentData";
import backgroundImage from "../../../../assets/FourthSection/background.png";
import ChevronLeftArrow from "../../../../Components/Icons/Arrows/ChevronLeftArrow";
import ChevronRightArrow from "../../../../Components/Icons/Arrows/ChevronRightArrow";

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

  // Dynamically fetch the CSS variable value for primary color
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

//   const backgroundColor = getComputedStyle(document.documentElement)
//     .getPropertyValue("--background-color")
//     .trim();

  return (
    <div className="comment-section">
      <section className="comments-container">
        <h1
          style={{
            textAlign: "center",
            fontSize: 48,
            color: `var(--secondary-color)`,
            marginBottom: 12,
          }}
        >
          Comments
        </h1>
        <div
          className="comments-container"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="comments-container-arrows">
            {/* Left Arrow */}
            <button
              className="arrow left-arrow"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeftArrow
                width={24}
                height={24}
                color={currentIndex === 0 ? "gray" : primaryColor}
              />
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

            {/* Right Arrow */}
            <button
              className="arrow right-arrow"
              onClick={handleNext}
              disabled={currentIndex >= CommentData.length - 3}
            >
              <ChevronRightArrow
                width={24}
                height={24}
                color={
                  currentIndex >= CommentData.length - 3 ? "gray" : primaryColor
                }
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentSection;
