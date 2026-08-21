import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";

import HomeAbout from "../components/HomeAbout";
import Team from "../components/Team";
import NewsEvents from "../components/NewsEvents";
import SectionSep from "../components/SectionSep";

import cliImg from "../assets/clibanner.png";
import agrImg from "../assets/agr-img.png";
import FAQ from "../components/FAQ";
import Credentials from "../components/Credentials";
import WhyUs from "../components/WhyUs";
import SectionDivider from "../components/SectionDivider";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <>
      <Hero />

      <Reveal>
        <HomeAbout />
      </Reveal>

      <Reveal>
        <Team />
      </Reveal>

      <Reveal>
        <NewsEvents />
      </Reveal>

      <Reveal>
        <Partners />
      </Reveal>

      <Reveal>
        <SectionSep
          bgImage={agrImg}
          title="Advancing Agriculture Through Genomics"
          description="Our research capabilities bring together genomics, bioinformatics, and agricultural science to generate insights that support stronger crops, better breeding, and more resilient agriculture."
          buttonText="EXPLORE AGRICULTURAL RESEARCH →"
          link="/agri-genomics"
        />
      </Reveal>

      <Reveal>
        <Credentials />
      </Reveal>

      <Reveal>
        <SectionSep
          bgImage={cliImg}
          title="Advancing Precision Care Through Genomics"
          description="Combining advanced sequencing, molecular diagnostics, and genomic analysis to support informed clinical decisions across inherited, rare, reproductive, and oncological conditions."
          buttonText="EXPLORE CLINICAL GENOMICS →"
          link="/clinical-genomics"
        />
      </Reveal>

      <Reveal>
        <FAQ />
      </Reveal>

      <SectionDivider />

      <Reveal>
        <WhyUs />
      </Reveal>
    </>
  );
};

export default Home;