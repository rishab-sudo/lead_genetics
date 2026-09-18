
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPopup.css";

const RegistrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleRegistration = () => {
    setShowPopup(false);
    navigate("/registration");
  };

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

        {/* Popup Image */}
        <div className="registration-popup-image-wrapper">
          <img
            src={require("../assets/cattle-event.jpeg")}
            alt="Scientific Trust"
            className="registration-popup-image"
          />
        </div>

        {/* Separate Button Section */}
        <div className="registration-popup-button-wrapper">
          <button
            className="registration-popup-btn"
            onClick={handleRegistration}
          >
            REGISTER NOW
          </button>
        </div>

      </div>
    </div>
  );
};

export default RegistrationPopup;

