import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ClinicalGenomics from "./pages/ClinicalGenomics";

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Clinical Genomics Page */}
        <Route
          path="/clinical-genomics"
          element={<ClinicalGenomics />}
        />
      </Routes>
    </>
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