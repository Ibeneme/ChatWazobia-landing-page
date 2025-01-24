import React, { useState, useEffect } from "react";
import AppPreviewImage from "../../../../assets/FifthSection/sixth.png"; // Adjust the path as necessary
import "./SixthSection.css";
import VerifiedIcon from "../../../../Components/Icons/Verified";

const SixthSection: React.FC = () => {
  // State to track screen width
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 765);

  // Update the screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 765);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Change direction based on device size
          gap: isMobile ? "20px" : "0", // Add gap between elements on mobile
          alignItems: "center", // Center align items
          justifyContent: "center",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Image Section */}
        <div
          style={{
            backgroundImage: `url(${AppPreviewImage})`,
            backgroundSize: "cover", // Ensures the image covers the div's area
            backgroundPosition: "center", // Centers the background image
            backgroundRepeat: "no-repeat", // Prevents repeating the background image
            width: isMobile ? "100%" : "49%", // Set to 100% width on mobile, 49% on desktop
            height: "700px", // Adjust the height to suit your design
            borderRadius: "0px", // Optional: for rounded corners
          }}
          className="sixth-section-image"
        ></div>

        {/* Right Text Section */}
        <div
          style={{
            height: "660px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 24,
            backgroundColor: `var(--primary-color)`,
            width: isMobile ? "100%" : "49%", // Set to 100% width on mobile, 49% on desktop
            padding: "20px",
            textAlign: isMobile ? "center" : "left", // Center text on mobile
          }}
        >
          <h1 className="sixth-section-content-h1">
            Stay Up to Date with Chat WaZoBia AI App
          </h1>
          <p className="sixth-section-content-p">
            Unlock Exciting Features for an Enhanced Experience and Discover New
            Functions for Enhanced Communication.
          </p>
          <button
            className="join-btn"
            style={{
              backgroundColor: "#000",
              alignSelf: "flex-start",
              color: "#fff",
            }}
          >
            {" "}
            <VerifiedIcon width={24} height={24} color={"#fff"} />
            Subscribe to Our Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
