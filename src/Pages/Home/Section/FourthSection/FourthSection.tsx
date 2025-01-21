import "./FourthSection.css";
import backgroundImage from "../../../../assets/FourthSection/background.png";
import logoImage from "../../../../assets/FourthSection/logo.png";
import aiImage from "../../../../assets/FourthSection/ai-image.png";

const FourthSection = () => {
  return (
    <div
      // style={{ alignSelf: "center", width: "100%", display: "flex" }}
      className="fourth-section"
    >
      <section
        className="fourth-section-div"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="fourth-section-content">
          {/* Left Side: Logo, Header, and Text */}
          <div className="fourth-section-text">
            <img src={logoImage} alt="Logo" className="logo-image" />
            <h1>Puzzle Games and Eyo Game</h1>
            <p>
              The app offers interactive Puzzle Games to challenge your mind and
              enhance language skills through engaging tasks. Additionally,
              explore the culturally inspired Eyo Game, where players can dive
              into traditional storytelling and language learning, connecting
              fun with cultural appreciation.
            </p>
          </div>

          {/* Right Side: AI Image */}
          <div className="fourth-section-image">
            <img src={aiImage} alt="AI Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourthSection;
