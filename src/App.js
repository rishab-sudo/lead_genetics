import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ClinicalGenomics from "./pages/ClinicalGenomics";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className = "App">
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
        {/* Clinical Genomics Page */}
        <Route
          path="/clinical-genomics"
          element={<ClinicalGenomics />}
        />
         <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      <Footer/>
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