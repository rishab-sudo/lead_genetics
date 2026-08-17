import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  Dna,
  UsersRound,
  FileCheck2,
  HeartHandshake,
  Pill,
  Baby,
  Microscope,
  ScanSearch,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import "./RareDiseaseGenomics.css";


// =========================================================
// APPROACH + CLINICAL GENOMICS TABS
// =========================================================

const tabs = [
  {
    number: "01",
    label: "Our Approach",
    type: "approach",
  },
  {
    number: "02",
    label: "Carrier Screening",
    type: "clinical",
    icon: UsersRound,

    description:
      "Carrier screening identifies whether prospective or expectant parents carry recessive or X-linked gene variants that could be passed on to a child, even when the parents themselves show no signs of disease.",

    applications: [
      "Preconception and prenatal screening for conditions such as thalassemia, spinal muscular atrophy, cystic fibrosis, and other recessive disorders prevalent in the population",
      "Expanded panels covering hundreds of genes for couples seeking comprehensive reproductive risk assessment",
      "Informing reproductive choices, including prenatal diagnosis, IVF with preimplantation genetic testing, or early clinical preparedness after birth",
    ],
  },
  {
    number: "03",
    label: "Pharmacogenomics (PGx)",
    type: "clinical",
    icon: Pill,

    description:
      "Pharmacogenomics studies how an individual's genetic makeup influences their response to medications — why the same drug, at the same dose, can work well in one patient, fail in another, and cause serious side effects in a third.",

    applications: [
      "Guiding drug and dosage selection across cardiology, psychiatry, oncology, and pain management",
      "Identifying variants in key metabolizing genes (such as the CYP450 family) that affect drug clearance",
      "Reducing adverse drug reactions and treatment failures through pre-emptive, one-time testing that informs prescribing decisions for life",
      "Supporting personalized medicine initiatives at the point of prescription",
    ],
  },
  {
    number: "04",
    label: "Reproductive Genetics",
    type: "clinical",
    icon: Baby,

    description:
      "Reproductive genetics supports couples and clinicians at every stage of the family-building journey, from preconception planning through pregnancy.",

    applications: [
      "Non-invasive prenatal testing (NIPT) for common fetal chromosomal aneuploidies from a maternal blood sample",
      "Prenatal diagnostic testing, including chromosomal microarray and exome sequencing, for pregnancies flagged by ultrasound or screening abnormalities",
      "Preimplantation genetic testing (PGT) for couples undergoing IVF, screening embryos for aneuploidy or known familial mutations before transfer",
      "Recurrent pregnancy loss workups to identify underlying chromosomal or genetic contributors",
    ],
  },
  {
    number: "05",
    label: "Infectious Disease Sequencing",
    type: "clinical",
    icon: Microscope,

    description:
      "NGS-based infectious disease testing goes beyond traditional culture and PCR methods, offering comprehensive pathogen detection and characterization directly from clinical samples.",

    applications: [
      "Metagenomic sequencing for unbiased detection of bacterial, viral, fungal, and parasitic pathogens, particularly valuable in culture-negative or complex infections",
      "Antimicrobial resistance gene profiling to guide targeted antibiotic therapy",
      "Outbreak investigation and strain-level characterization for infection control",
      "Rapid pathogen identification in critically ill patients where empiric therapy carries real risk",
    ],
  },
  {
    number: "06",
    label: "Clinical Exome Sequencing",
    type: "clinical",
    icon: ScanSearch,

    description:
      "Clinical exome sequencing captures the protein-coding regions of the genome — roughly 1-2% of the genome that accounts for the vast majority of known disease-causing variants — offering a comprehensive yet focused diagnostic tool.",

    applications: [
      "First-tier or reflex testing for patients with a suspected genetic disorder and no clear clinical diagnosis",
      "Diagnostic yield across multi-system presentations, developmental delay, unexplained organ dysfunction, and syndromic features",
      "Trio and singleton testing options, with reanalysis available as gene-disease knowledge evolves",
      "A single test covering thousands of genes simultaneously, replacing sequential single-gene testing",
    ],
  },
];


// =========================================================
// OUR APPROACH - 4 EXACT ITEMS
// =========================================================

const approachItems = [
  {
    number: "01",
    icon: Dna,
    title: "Whole Exome & Targeted Panels",
    description:
      "Whole exome and targeted gene panel sequencing to identify pathogenic variants across Mendelian and complex rare conditions",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Trio Sequencing",
    description:
      "Trio sequencing (proband plus both parents) to accelerate variant interpretation and distinguish inherited from de novo changes",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Variant Classification",
    description:
      "Detailed variant classification following ACMG/AMP guidelines, correlated against the patient's clinical presentation",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Genetic Counseling Support",
    description:
      "Genetic counseling support to help families understand results and next steps",
  },
];


const RareDiseaseGenomics = () => {

  // Initially tab 01 = Our Approach
  const [activeTab, setActiveTab] = useState(0);

  const activeItem = tabs[activeTab];

  return (
    <section className="rare-disease-section">

      <Container>

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="rare-disease-header">

          <div className="rare-disease-icon">
            <Dna size={32} strokeWidth={1.6} />
          </div>

          <div className="rare-disease-heading">

            <span className="rare-disease-eyebrow">
              CLINICAL GENOMICS
            </span>

            <h2>
              Rare Disease Genomics
            </h2>

            <div className="rare-disease-divider"></div>

            <p>
              An estimated 1 in 20 people will be affected by a rare disease
              in their lifetime, and roughly 80% of rare diseases have a
              genetic origin. For families who have often gone years without
              a diagnosis, genomic testing can end the search — and open the
              door to targeted management, clinical trials, and informed
              family planning.
            </p>

          </div>

        </div>


        {/* =================================================
            MAIN TABS
        ================================================= */}

        <div className="rare-main-tabs">

          {tabs.map((tab, index) => {

            const Icon =
              tab.icon || Dna;

            return (
              <button
                type="button"
                key={tab.number}
                onClick={() => setActiveTab(index)}
                className={`rare-main-tab ${
                  activeTab === index
                    ? "active"
                    : ""
                }`}
              >

                <span className="main-tab-number">
                  {tab.number}
                </span>

                <span className="main-tab-icon">
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                  />
                </span>

                <span className="main-tab-label">
                  {tab.label}
                </span>

                <ArrowUpRight
                  size={17}
                  className="main-tab-arrow"
                />

              </button>
            );
          })}

        </div>


        {/* =================================================
            TAB CONTENT
        ================================================= */}

        {activeItem.type === "approach" ? (

          <section className="approach-content">

            <div className="content-heading">

              <span>
                01 — OUR APPROACH
              </span>

              <h3>
                Comprehensive genomic insight,
                <br />
                built around the patient.
              </h3>

            </div>


            <div className="approach-grid">

              {approachItems.map((item) => {

                const Icon = item.icon;

                return (
                  <article
                    className="approach-card"
                    key={item.number}
                  >

                    <div className="approach-card-top">

                      <span className="approach-number">
                        {item.number}
                      </span>

                      <div className="approach-icon">
                        <Icon
                          size={24}
                          strokeWidth={1.6}
                        />
                      </div>

                    </div>

                    <h4>
                      {item.title}
                    </h4>

                    <p>
                      {item.description}
                    </p>

                    <div className="approach-card-line"></div>

                  </article>
                );
              })}

            </div>

          </section>

        ) : (

          <section className="clinical-tab-content">

            {/* Header */}

            <div className="clinical-tab-header">

              <div className="clinical-tab-number">
                {activeItem.number}
              </div>

              <div className="clinical-tab-icon">

                {activeItem.icon && (
                  <activeItem.icon
                    size={28}
                    strokeWidth={1.6}
                  />
                )}

              </div>

              <div>

                <span className="clinical-tab-eyebrow">
                  CLINICAL GENOMICS
                </span>

                <h3>
                  {activeItem.label}
                </h3>

              </div>

            </div>


            {/* Description */}

            <div className="clinical-tab-description">

              <p>
                {activeItem.description}
              </p>

            </div>


            {/* Clinical Applications */}

            <div className="applications-box">

              <div className="applications-heading">

                <div className="applications-heading-icon">
                  <Sparkles size={17} />
                </div>

                <span>
                  Clinical Applications
                </span>

              </div>


              <div className="applications-list">

                {activeItem.applications.map(
                  (application, index) => (

                    <div
                      className="application-item"
                      key={index}
                    >

                      <CheckCircle2
                        className="application-check"
                        size={18}
                      />

                      <p>
                        {application}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>

          </section>

        )}

      </Container>

    </section>
  );
};

export default RareDiseaseGenomics;