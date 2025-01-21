import "./Hero.css";
import Illustration from "../../../assets/Hero/heroRightGreen.png";
import VerifiedIcon from "../../../Components/Icons/Verified";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          With <span className="hero-content-span">AI,</span> we’re
          <br /> making translation <br />
          and transcription <br />
          effortless for you.
        </h1>
        <p>
          With our advanced AI model, we’re here to provide you with seamless,
          accurate, and 
          instant language solutions that make communication easier than ever.
        </p>
        <div className="input-section">
          <div className="text-input">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button className="join-btn">
              {" "}
              <VerifiedIcon width={24} height={24} /> Join our waitlist
            </button>
          </div>
          <p className="terms">
            By clicking Join the waitlist, you're confirming that you agree with
            our
            <a href="/terms" className="terms-link">
              {" "}
              Terms and Conditions
            </a>
            .
          </p>
        </div>
      </div>
      <img src={Illustration} alt="Illustration" className="hero-image" />
    </section>
  );
};

export default Hero;
