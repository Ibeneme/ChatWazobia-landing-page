import "./FirstSection.css";
import firstsectionimage from "../../../../assets/Hero/firstsectionimage.png";
import firstsectionimagemobile from "../../../../assets/Hero/firstsectionimagemobile.png";

const FirstSection = () => {
  return (
    <section className="first-section">
      <div className="flex-column">
        {/* First Div: Text Content */}
        <div className="text-row">
          <div className="text-content">
            <h1>
              Discover Effortless and Seamless Translation with Chat WaZoBia AI
            </h1>
            <p>
              Our AI translation makes it easy to communicate in any language.
              No more language barriers, just simple clear conversations
              wherever you are.
            </p>
          </div>
        </div>

        {/* Second Div: Image */}
        <img
          src={firstsectionimage}
          alt="Illustration"
          className="colored-boxes-image"
        />
        <img
          src={firstsectionimagemobile}
          alt="Mobile Illustration"
          className="colored-boxes-image-mobile"
        />
      </div>
    </section>
  );
};

export default FirstSection;
