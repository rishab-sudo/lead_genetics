import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      {/* Demo content */}
      <div>
      <Home/>
      </div>
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