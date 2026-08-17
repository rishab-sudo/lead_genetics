import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Dna,
  TestTube2,
  ScanLine,
  ShieldCheck,
  Activity,
 
    Clock3,

} from "lucide-react";
import "./ClinicalGenomics.css";
import ClinicalHero from "../components/ClinicalHero"
import clinicalGenomicsImg from "../assets/clinical.png";
import OncologyGenomics from "../components/OncologyGenomics";
import RareDiseaseGenomics from "../components/RareDiseaseGenomics";
import NeonatologyCardiology from "../components/NeonatologyCardiology";



const ClinicalGenomicsSection = () => {
  return (
    <> 
    <ClinicalHero/>

    <section className="clinical-genomics-section">
      <Container>

        {/* ================= TOP SECTION ================= */}
        <Row className="align-items-center clinical-top-row">

          {/* LEFT CONTENT */}
          <Col lg={6} className="clinical-content">
            <div className="clinical-eyebrow">
              <span></span>
              PRECISION. INSIGHT. BETTER OUTCOMES.
            </div>

            <h2>
              Clinical Genomics
              <br />
              at <span>Leads Genetics</span>
            </h2>

            <div className="clinical-line">
              <span></span>
            </div>

            <p>
              Modern medicine is moving from a one-size-fits-all model to one
              guided by the genome. At Leads Genetics, our Clinical Genomics
              division brings together next-generation sequencing (NGS),
              bioinformatics, and clinical expertise to help physicians
              diagnose disease earlier, choose the right therapy the first
              time, and give families answers when they need them most.
            </p>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6}>
            <div className="clinical-image-wrapper">

              <img
                src={clinicalGenomicsImg}
                alt="Clinical Genomics Laboratory"
                className="clinical-main-image"
              />

              <div className="image-floating-card">
                <Dna size={20} />
                <span>Advanced Genomic Science</span>
              </div>

            </div>
          </Col>

        </Row>


        {/* ================= SECOND FULL WIDTH CONTENT ================= */}
        <div className="clinical-bottom-card">

          {/* DNA ICON + DECORATIVE LINE */}
          <div className="clinical-decoration">

            <span className="decoration-line"></span>

            <div className="clinical-icon">
              <Dna size={30} />
            </div>

            <span className="decoration-line"></span>

          </div>


          {/* SECOND PARAGRAPH */}
          <div className="clinical-bottom-text">

            <p>
              From oncology to reproductive health, from a newborn's first
              days to a lifetime of chronic disease management, our test menu
              is built to support{" "}
              <strong>every stage of the clinical journey</strong> — accurate,
              clinically actionable, and delivered with a turnaround time that
              respects the urgency of patient care.
            </p>

          </div>


          {/* HIGHLIGHTS */}
          <div className="clinical-highlights">

            <div className="clinical-highlight">

              <div className="highlight-icon">
                <ShieldCheck size={25} />
              </div>

              <div>
                <h4>Accurate Testing</h4>
                <p>
                  High-quality genomic testing with rigorous quality control.
                </p>
              </div>

            </div>


            <div className="clinical-highlight">

              <div className="highlight-icon">
                <Activity size={25} />
              </div>

              <div>
                <h4>Clinical Insights</h4>
                <p>
                  Expert interpretation delivering clear, actionable insights.
                </p>
              </div>

            </div>


            <div className="clinical-highlight">

              <div className="highlight-icon">
                <Clock3 size={25} />
              </div>

              <div>
                <h4>Faster Turnaround</h4>
                <p>
                  Optimized workflows for timely reports when they matter most.
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
{/*  */}
<OncologyGenomics/>

<RareDiseaseGenomics/>

<NeonatologyCardiology/>
    </>
  );
};

export default ClinicalGenomicsSection;