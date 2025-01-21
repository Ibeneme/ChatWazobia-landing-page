import "./SecondSection.css";
import imageOne from "../../../../assets/SecondSection/imageOne.png";
import imageTwo from "../../../../assets/SecondSection/imageTwo.png";

const SecondSection = () => {
  return (
    <section className="second-section">
      {/* First Div: Background Image with Text */}
      <div className="second-section-div">
        <div className="background-text">
          <div className="text-content-second-section">
            <p>Our AI makes it easy to connect with anyone, anywhere.</p>
            <h1>Unlock AI Power for Chat and Audio Translation</h1>
          </div>
        </div>

        {/* Second Div: Two Images in a Row */}
        <div className="image-row-second-section">
          <img src={imageOne} alt="First Illustration" className="image-second-section" />
          <img src={imageTwo} alt="Second Illustration" className="image-second-section" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
