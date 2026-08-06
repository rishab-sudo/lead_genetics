import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  // Toggle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
        <div className="nav-left">
          <div className="logo">
            <img
              alt="lead-genetics-video"
              src={require("../assets/logo.png")}
            />
          </div>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>

            {/* Dropdowns can be added later */}

            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <button className="common-btn nav-btn">
            <span>Get Started</span>
          </button>

          <button
            className="hamburger"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="logo mobile-sidebar-logo">
            <img
              alt="lead-genetics-video"
              src={require("../assets/logo.png")}
            />
          </div>

          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <ul className="sidebar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <button className="common-btn sidebar-btn">
          <span>Get Started</span>
        </button>
      </aside>
    </>
  );
};

export default Navbar;