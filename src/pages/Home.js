import React, { useEffect, useState } from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeWork from "../components/HomwWork";



const Home = () => {


  return (
  <>
  <Hero/>

  <HomeWork/>
  
  <Footer/>
  </>
  );
};

export default Home;