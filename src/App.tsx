import { Route, Routes } from "react-router-dom";
import Hero from "./Pages/Home/Index";
import ScrollToTop from "./ScrollToTop";
import "./assets/fonts/fonts.css";
import Navbar from "./Components/Navbar/Navbar";
import logoSrc from "../src/assets/Logo/Layer_x0020_1.png";
import FAQPage from "./Pages/Faqs/FAQPage";
import Footer from "./Components/Footer/Footer";
import SixthSection from "./Pages/Home/Section/SixSection/SixthSection";
import { AboutIndex } from "./Pages/Home/About/AboutIndex";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import WaitlistModal from "./Components/WaitlistModal/WaitlistModal";
import { useState } from "react";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AyoGameIndex from "./Pages/AyoGame/AyoGameIndex";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />

      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Navbar logoSrc={logoSrc} openModal={openModal} /> <Hero />
              <Footer />
            </>
          }
        />
               <Route
          path="/ayo"
          element={
            <>
              {" "}
              <Navbar logoSrc={logoSrc} openModal={openModal} /> <AyoGameIndex />
              <Footer hideContactUs />
            </>
          }
        />

        <Route
          path="/faqs"
          element={
            <>
              {" "}
              <Navbar logoSrc={logoSrc} openModal={openModal} />{" "}
              {/* Pass openModal function */}
              <div style={{ marginTop: 130 }}></div>
              <FAQPage />
              <SixthSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />{" "}
              {/* Pass openModal function */}
              <AboutIndex /> <Footer />
            </>
          }
        />{" "}
        <Route
          path="/terms"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />{" "}
              {/* Pass openModal function */}
              <TermsAndConditions /> <Footer />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar logoSrc={logoSrc} openModal={openModal} />{" "}
              {/* Pass openModal function */}
              <PrivacyPolicy /> <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
