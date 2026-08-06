import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop dropdowns: 'services' | 'products' | null
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDesktop = (name) => {
    setDesktopDropdown((prev) => (prev === name ? null : name));
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setDesktopDropdown(null);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  // Toggle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount in case the page loads already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navRef}>
        <div className="nav-left">
          <div className="logo"><img alt="lead-genetics-video" src={require("../assets/logo.png")}/></div>

          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>

            {/* <li className="dropdown">
              <button
                type="button"
                className="dropdown-btn"
                aria-expanded={desktopDropdown === "services"}
                onClick={() => toggleDesktop("services")}
              >
                IVF & GENOMICS <span>▾</span>
              </button>

              <ul
                className={`dropdown-menu ${
                  desktopDropdown === "services" ? "open" : ""
                }`}
              >
                <li><a href="/web-development">Web Development</a></li>
                <li><a href="/seo">SEO Optimization</a></li>
                <li><a href="/digital-marketing">Digital Marketing</a></li>
              </ul>
            </li> */}
{/* 
            <li className="dropdown">
              <button
                type="button"
                className="dropdown-btn"
                aria-expanded={desktopDropdown === "products"}
                onClick={() => toggleDesktop("products")}
              >
                OUR EXPERTISE <span>▾</span>
              </button>

              <ul
                className={`dropdown-menu ${
                  desktopDropdown === "products" ? "open" : ""
                }`}
              >
                <li><a href="/genomics">Genomics</a></li>
                <li><a href="/agriculture">Agriculture</a></li>
                <li><a href="/clinical">Clinical</a></li>
              </ul>
            </li> */}

            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="nav-right">
          {/* Same common button */}
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
          <div className="logo mobile-sidebar-logo"><img alt="lead-genetics-video" src={require("../assets/logo.png")}/></div>
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

          {/* <li className={`mobile-dropdown ${servicesOpen ? "active" : ""}`}>
            <button
              className="mobile-dropdown-btn"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <span>Services</span>
              <span>▾</span>
            </button>

            <ul className="mobile-submenu">
              <li><a href="/web-development">Web Development</a></li>
              <li><a href="/seo">SEO Optimization</a></li>
              <li><a href="/digital-marketing">Digital Marketing</a></li>
            </ul>
          </li>

          <li className={`mobile-dropdown ${productsOpen ? "active" : ""}`}>
            <button
              className="mobile-dropdown-btn"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span>Products</span>
              <span>▾</span>
            </button>

            <ul className="mobile-submenu">
              <li><a href="/genomics">Genomics</a></li>
              <li><a href="/agriculture">Agriculture</a></li>
              <li><a href="/clinical">Clinical</a></li>
            </ul>
          </li> */}

          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Same common button for sidebar */}
        <button className="common-btn sidebar-btn">
          <span>Get Started</span>
        </button>
      </aside>
    </>
  );
};

export default Navbar;