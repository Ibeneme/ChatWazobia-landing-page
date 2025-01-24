import "./AboutHero.css";
import HeroImage from "../../../assets/Hero/aboutHero.png"; // Adjust the path to match your folder structure

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <p className="about-hero-description">This is Chat WaZoBia AI</p>
        <h1 className="about-hero-header">
          Exploring Our Commitment to Transforming Global Communication
        </h1>
        <div className="about-hero-image">
          <img
            src={HeroImage}
            alt="Global Communication"
            style={{ maxWidth: 1000, width: "100%", alignSelf: "center" }}
            //className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
