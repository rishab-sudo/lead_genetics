import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Dna,
  TestTube2,
  ScanLine,
  ShieldCheck,
  Activity,
  CheckCircle2,
    Clock3,
  Sparkles,
} from "lucide-react";
import "./ClinicalGenomics.css";
import ClinicalHero from "../components/ClinicalHero"
import clinicalGenomicsImg from "../assets/clinical.png";
import OncologyGenomics from "../components/OncologyGenomics";
import RareDiseaseGenomics from "../components/RareDiseaseGenomics";
import NeonatologyCardiology from "../components/NeonatologyCardiology";


const oncologySections = [
  {
    id: "liquid-biopsy",
    icon: TestTube2,
    title: "Liquid Biopsy",
    description:
      "Liquid biopsy analyzes circulating tumor DNA (ctDNA) and other tumor-derived material shed into the bloodstream, offering a minimally invasive window into a tumor's genomic makeup without the need for surgical tissue collection.",
    applications: [
      "Comprehensive genomic profiling when tissue is insufficient, unavailable, or too risky to obtain",
      "Real-time monitoring of treatment response and emerging resistance mutations",
      "Detection of minimal residual disease (MRD) after surgery or therapy",
      "Early relapse detection, often ahead of radiological progression",
      "Serial monitoring across the course of treatment, since a single blood draw can be repeated where a tissue biopsy cannot",
    ],
    whyItMatters:
      "Tumors evolve. A biopsy taken at diagnosis may no longer reflect the disease six months into treatment. Liquid biopsy allows clinicians to track that evolution longitudinally, adjusting therapy as the tumor's genomic profile changes.",
  },

  {
    id: "solid-tumor",
    icon: Dna,
    title: "Solid Tumor Panels",
    description:
      "Our solid tumor NGS panels provide multi-gene genomic profiling from formalin-fixed paraffin-embedded (FFPE) tissue, covering clinically actionable alterations across the genes most relevant to targeted therapy and clinical trial eligibility.",
    applications: [
      "Detection of single nucleotide variants (SNVs), insertions/deletions, copy number alterations, and gene fusions in a single assay",
      "Identification of actionable driver mutations to match patients to approved targeted therapies",
      "Companion diagnostic-relevant findings that support treatment decisions across lung, breast, colorectal, gastric, and other solid tumors",
      "Molecular tumor board–ready reports that translate complex genomic data into clear treatment guidance",
    ],
  },

  {
    id: "hrd",
    icon: ShieldCheck,
    title: "HRD",
    subtitle: "Homologous Recombination Deficiency",
    description:
      "HRD testing identifies tumors that have lost the ability to repair double-strand DNA breaks accurately — a state strongly associated with sensitivity to PARP inhibitors and platinum-based chemotherapy, particularly in ovarian, breast, prostate, and pancreatic cancers.",
    applications: [
      "Identifying patients most likely to benefit from PARP inhibitor therapy",
      "Combining BRCA1/2 mutation status with genomic scar signatures for a comprehensive HRD score",
      "Guiding maintenance therapy decisions in newly diagnosed and recurrent ovarian cancer",
    ],
  },

  {
    id: "tmb",
    icon: Activity,
    title: "TMB",
    subtitle: "Tumor Mutational Burden",
    description:
      "TMB quantifies the total number of somatic mutations per megabase of tumor genome. A high mutational burden generates more neoantigens, which can make a tumor more visible — and more vulnerable — to the immune system.",
    applications: [
      "Predicting response to immune checkpoint inhibitors, independent of PD-L1 expression",
      "Supporting immunotherapy eligibility decisions across tumor types with limited standard options",
      "Complementing MSI and PD-L1 status for a fuller immunogenicity profile",
    ],
  },

  {
    id: "msi",
    icon: ScanLine,
    title: "MSI",
    subtitle: "Microsatellite Instability",
    description:
      "MSI testing detects instability in short repetitive DNA sequences that arises from a defective DNA mismatch repair (MMR) system — a hallmark of certain colorectal, endometrial, and gastric cancers, and a subset of Lynch syndrome–associated tumors.",
    applications: [
      "Identifying MSI-High tumors as strong candidates for immune checkpoint inhibitor therapy",
      "Screening for Lynch syndrome, prompting germline testing and family cascade screening where indicated",
      "Informing prognosis and chemotherapy response in colorectal cancer",
    ],
  },
];
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