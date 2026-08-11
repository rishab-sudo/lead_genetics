import React from "react";
import "./Home.css";
import Hero from "../components/Hero";

// import Platform from "../components/Platform";
import FAQ from "../components/FAQ";
import HomeAbout from "../components/HomeAbout";
import Team from "../components/Team";
import NewsEvents from "../components/NewsEvents";
import SectionSep from "../components/SectionSep";
import agriImg from "../assets/agrbanner.png"
// import resiImg from "../assets/reabanner.png"
import cliImg from "../assets/clibanner.png"


const Home = () => {


  return (
  <>

  <div>
    <h1>hiiiii</h1>
  </div>
  <Hero/>
{/* 
  <HomeWork/> */}
  {/* <Platform/> */}
  <HomeAbout/>
  <Team/>
 <SectionSep
        bgImage={agriImg}
        title="Breeding Tomorrow's Agriculture, Today"
        description="Accelerating genetic improvement in crops and livestock through precision genomics"
        link="/agriculture-genomics"
      />
  <NewsEvents/>
   <SectionSep
        bgImage={cliImg}
        title="Transforming Patient Care Through Genetic Insights
"
        description="Delivering reliable sequencing and precision diagnostics for inherited disorders, oncology, reproductive health, and rare diseases."
      />
  <FAQ/>



  </>
  );
};

export default Home;