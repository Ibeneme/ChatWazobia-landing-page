import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import logo from "../../assets/Logo/Layer_x0020_1.png";
import "./Footer.css";
import ContactUs from "./ContactUs";

interface FooterProps {
  hideContactUs?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideContactUs }) => {
  return (
    <footer className="footer">
      {!hideContactUs && <ContactUs />}
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <img
              src={logo}
              alt="Chat WaZoBia AI Logo"
              className="footer-logo"
            />
            <div className="footer-name">Chat WaZoBia AI</div>
          </div>
          <p className="footer-description">
            Chat WaZoBia AI is the ultimate solution for businesses and
            individuals looking to break language barriers and communicate
            effortlessly. With our advanced AI translation, transcription, and
            chat model, you can connect with people from around the world like
            never before.
          </p>
          <div className="footer-icons">
            <span className="social-icon">
              <FaFacebookF />
            </span>
            <span className="social-icon">
              <TbBrandThreads />
            </span>
            <span className="social-icon">
              <FaTwitter />
            </span>
            <span className="social-icon">
              <FaYoutube />
            </span>
            <span className="social-icon">
              <FaInstagram />
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p className="footer-link">About</p>
          <p className="footer-link">Features</p>
          <p className="footer-link">FAQs</p>
          <p className="footer-link">Contact</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2023 Chat WaZoBia AI. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="footer-bottom-link">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="footer-bottom-link">
            Terms and Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;