import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import logoSrc from "../../assets/Logo/Layer_x0020_1.png";
import FirstSection from "./Section/FirstSection/FirstSection";
import SecondSection from "./Section/SecondSection/SecondSection";
import ThirdSection from "./Section/ThirdSection/ThirdSection";
import FourthSection from "./Section/FourthSection/FourthSection";
import CommentSection from "./Section/CommentSection/CommentSection";

const Index = () => {
  return (
    <div style={{ padding: 0 }}>
      <Navbar logoSrc={logoSrc} />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <CommentSection />
    </div>
  );
};

export default Index;
