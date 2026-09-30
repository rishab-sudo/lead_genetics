
import React, { useEffect, useState } from "react";
import "./RegistrationPopup.css";

const RegistrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="registration-popup-overlay">
      <div className="registration-popup-box">

        {/* Close Button */}
        <button
          className="registration-popup-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={require("../assets/chip-popup-img.jpeg")}
          alt="Scientific Trust"
          className="registration-popup-image"
        />

      </div>
    </div>
  );
};

export default RegistrationPopup;
