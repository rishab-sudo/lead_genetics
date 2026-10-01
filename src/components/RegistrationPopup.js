import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./RegistrationPopup.css";

// Yeh values sirf website load hone par ek baar set hoti hain (page refresh par reset)
const loadedOnHomepage = window.location.pathname === "/";
let popupAlreadyShown = false;

const RegistrationPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Agar website homepage par load nahi hui ya popup pehle dikh chuka hai, to kuch mat karo
    if (!loadedOnHomepage || popupAlreadyShown) return;

    // Agar user 2.5 sec se pehle homepage chhod de, to popup nahi dikhega
    if (pathname !== "/") return;

    const timer = setTimeout(() => {
      popupAlreadyShown = true;
      setShowPopup(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  const handlePopupClick = () => {
    setShowPopup(false);
    navigate("/chip");
  };

  if (!showPopup || pathname !== "/") return null;

  return (
    <div className="registration-popup-overlay">
      <div className="registration-popup-box" onClick={handlePopupClick}>
        <button
          className="registration-popup-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          &times;
        </button>

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