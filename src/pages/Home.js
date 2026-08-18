import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import HomeWork from "../components/HomwWork";
import HomeAbout from "../components/HomeAbout";
import Team from "../components/Team";
import NewsEvents from "../components/NewsEvents";
import SectionSep from "../components/SectionSep";
// import agriImg from "../assets/agrbanner.png"
// import resiImg from "../assets/reabanner.png"
import cliImg from "../assets/clibanner.png"
import Scroll  from "../components/3d animation/Scroll";
import FAQ from "../components/FAQ";
import Credentials from "../components/Credentials";
import WhyUs from "../components/WhyUs";
import SectionDivider from "../components/SectionDivider";
// import Gallery from "../components/Gallery";


const Home = () => {


  return ( 
  <>
  <Hero/>
{/* 
  <HomeWork/> */}
  {/* <Platform/> */}
  <HomeAbout/>
<SectionDivider />
  <Team/>
 {/* <SectionSep
        bgImage={agriImg}
        title="Breeding Tomorrow's Agriculture, Today"
        description="Accelerating genetic improvement in crops and livestock through precision genomics"
        link="/agriculture-genomics"
      /> */}

        <Scroll/>
  <NewsEvents/>
  <Credentials/>
   <SectionSep
        bgImage={cliImg}
        title="Transforming Patient Care Through Genetic Insights
"
        description="Delivering reliable sequencing and precision diagnostics for inherited disorders, oncology, reproductive health, and rare diseases."
      />
      {/* <Gallery/> */}
      <FAQ/>
      <SectionDivider />
      <WhyUs/>

  </>
  );
};

export default Home;