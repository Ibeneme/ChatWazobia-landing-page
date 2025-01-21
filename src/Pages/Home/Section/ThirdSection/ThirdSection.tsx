import "./ThirdSection.css";
import bgImage from "../../../../assets/ThirdSection/background-image.png"; // Replace with the actual path
import logoImage from "../../../../assets/ThirdSection/logo.png"; // Replace with the logo path
import featureImage from "../../../../assets/ThirdSection/feature-image.png"; // Replace with the feature image path

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div
        className="third-section-div"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="third-section-content">
          {/* First Column */}
          <div className="text-column">
            {/* Logo and Text */}
            <div className="text-header">
              <span className="text-header-span">
                <img src={logoImage} alt="Logo" className="logo-image" />
                <h1>4-in-1 Features for Ultimate Convenience</h1>
              </span>
              <span>
                <p>
                  Discover the power of four essential features in one app.
                  Connect effortlessly through chat, enjoy fun and interactive
                  games, stay in touch with seamless video and voice calls, and
                  explore creativity with our AI-powered studio for generating
                  stunning images. All you need, right at your fingertips!
                </p>
                <p>One of the best translations ever...</p>
              </span>
            </div>
          </div>

          {/* Second Column */}
          <div className="image-column">
            <img src={featureImage} alt="Feature" className="feature-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
