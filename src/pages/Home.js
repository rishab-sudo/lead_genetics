import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeWork from "../components/HomwWork";
// import Platform from "../components/Platform";
import FAQ from "../components/FAQ";
import HomeAbout from "../components/HomeAbout";
import Team from "../components/Team";
import NewsEvents from "../components/NewsEvents";



const Home = () => {


  return (
  <>
  <Hero/>

  <HomeWork/>
  {/* <Platform/> */}
  <HomeAbout/>
  <Team/>
  <NewsEvents/>
  <FAQ/>
  <Footer/>
  </>
  );
};

export default Home;