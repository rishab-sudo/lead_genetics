import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ClinicalGenomics from "./pages/ClinicalGenomics";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import AgriGenomics from "./pages/AgriGenomics";

import ScrollTop from "./components/ScrollTop";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css"

function App() {
  return (
    <div className="App">
      {/* Navbar always visible */}
      <Navbar />

      {/* Scroll to top whenever route/page changes */}
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Research Genomics Page */}
        <Route
          path="/research-genomics"
          element={<Research />}
        />

        {/* Agri Genomics Page */}
        <Route
          path="/agri-genomics"
          element={<AgriGenomics />}
        />

        {/* Clinical Genomics Page */}
        <Route
          path="/clinical-genomics"
          element={<ClinicalGenomics />}
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Fixed Scroll Top Button */}
      <ScrollTop />
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

// /* Create these pages */
// import AgriGenomics from "./pages/AgriGenomics";
// import ResearchGenomics from "./pages/ResearchGenomics";
// import ClinicalGenomics from "./pages/ClinicalGenomics";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         {/* Home Page */}
//         <Route path="/" element={<Home />} />

//         {/* Card Redirect Pages */}
//         <Route path="/agri-genomics" element={<AgriGenomics />} />
//         <Route
//           path="/research-genomics"
//           element={<ResearchGenomics />}
//         />
//         <Route
//           path="/clinical-genomics"
//           element={<ClinicalGenomics />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;