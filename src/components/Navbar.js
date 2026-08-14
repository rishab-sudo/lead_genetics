import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

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
        {/* LEFT - LOGO */}
        <Link to="/" className="nav-logo">
          <img
            src={require("../assets/logo.png")}
            alt="Lead Genetics"
          />
        </Link>

        {/* CENTER - LINKS */}
        <div className="nav-center">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT - BUTTON + HAMBURGER */}
        <div className="nav-right">
          <button className="common-btn nav-btn">
                <span>Explore More</span>
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

      {/* OVERLAY */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="mobile-sidebar-logo" onClick={() => setSidebarOpen(false)}>
            <img
              src={require("../assets/logo.png")}
              alt="Lead Genetics"
            />
          </Link>

          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <ul className="sidebar-links">
          <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact</Link></li>
        </ul>

        <button className="common-btn sidebar-btn">
          <span>Explore More</span>
        </button>
      </aside>
    </>
  );
};

export default Navbar;