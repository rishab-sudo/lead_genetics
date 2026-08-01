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