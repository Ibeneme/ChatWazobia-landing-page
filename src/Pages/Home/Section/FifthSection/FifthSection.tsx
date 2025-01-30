import React from "react";
import "./FifthSection.css";
import logo from "../../../../assets/FifthSection/logo.png"; // Assuming the logo is placed in this path
import image from '../../../../assets/Hero/Loadingdetails.png'
const FifthSection: React.FC = () => {
  return (
    <section className="fifth-section">
      <div className="content-container">
        {/* Logo */}
        <div className="content-left">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <h2 className="main-header">Over 2000+</h2>
          <p className="sub-header">Languages across the countries in Africa</p>
        </div>
        <div className="linguistic-diversity-container">
          <h3 className="linguistic-header">Africa’s Linguistic Diversity</h3>
          <p className="linguistic-summary">
            Africa is a continent of extraordinary linguistic diversity, with
            over 2,000 languages reflecting its rich cultural and historical
            heritage. Prominent languages like Swahili, Arabic, Yoruba, and Zulu
            serve as regional lingua francas, while indigenous languages such as
            Berber and Xhosa preserve unique identities and traditions. African
            Sign Languages further enhance inclusive communication. These
            languages are vital for passing down oral histories, preserving
            cultural knowledge, and fostering unity in diversity. Efforts in
            education, research, and translation are essential for safeguarding
            this linguistic heritage, celebrating Africa’s resilience, and
            cementing its legacy as a global cultural powerhouse.{" "}
          </p>
        </div>
      </div>
 

      <div className="content-container">
      <img src={image} alt="image" className="image-style" />
      </div>

    </section>
  );
};

export default FifthSection;
