import React, { useState } from "react";
import {
  Dna,
  TestTube2,
  ShieldCheck,
  Activity,
  ScanLine,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import "./OncologyGenomics.css";

const oncologyTabs = [
  {
    id: "01",
    title: "Liquid Biopsy",
    icon: TestTube2,

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
    id: "02",
    title: "Solid Tumor Panels",
    icon: Dna,

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
    id: "03",
    title: "HRD",
    subtitle: "Homologous Recombination Deficiency",
    icon: ShieldCheck,

    description:
      "HRD testing identifies tumors that have lost the ability to repair double-strand DNA breaks accurately — a state strongly associated with sensitivity to PARP inhibitors and platinum-based chemotherapy, particularly in ovarian, breast, prostate, and pancreatic cancers.",

    applications: [
      "Identifying patients most likely to benefit from PARP inhibitor therapy",
      "Combining BRCA1/2 mutation status with genomic scar signatures for a comprehensive HRD score",
      "Guiding maintenance therapy decisions in newly diagnosed and recurrent ovarian cancer",
    ],
  },

  {
    id: "04",
    title: "TMB",
    subtitle: "Tumor Mutational Burden",
    icon: Activity,

    description:
      "TMB quantifies the total number of somatic mutations per megabase of tumor genome. A high mutational burden generates more neoantigens, which can make a tumor more visible — and more vulnerable — to the immune system.",

    applications: [
      "Predicting response to immune checkpoint inhibitors, independent of PD-L1 expression",
      "Supporting immunotherapy eligibility decisions across tumor types with limited standard options",
      "Complementing MSI and PD-L1 status for a fuller immunogenicity profile",
    ],
  },

  {
    id: "05",
    title: "MSI",
    subtitle: "Microsatellite Instability",
    icon: ScanLine,

    description:
      "MSI testing detects instability in short repetitive DNA sequences that arises from a defective DNA mismatch repair (MMR) system — a hallmark of certain colorectal, endometrial, and gastric cancers, and a subset of Lynch syndrome–associated tumors.",

    applications: [
      "Identifying MSI-High tumors as strong candidates for immune checkpoint inhibitor therapy",
      "Screening for Lynch syndrome, prompting germline testing and family cascade screening where indicated",
      "Informing prognosis and chemotherapy response in colorectal cancer",
    ],
  },
];

const OncologyGenomics = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeContent = oncologyTabs[activeTab];

  const ActiveIcon = activeContent.icon;

  return (
    <section className="oncology-genomics-section">
      <div className="container">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div className="oncology-header">

          <div className="oncology-logo">
            <Dna size={30} strokeWidth={1.7} />
          </div>

          <div className="oncology-header-content">

            <span className="oncology-label">
              CLINICAL GENOMICS
            </span>

            <h2>
              Oncology Genomics
            </h2>

            <div className="oncology-header-line"></div>

            <p>
              Cancer is a disease of the genome. Every tumor carries a unique
              signature of mutations, copy number changes, and genomic
              instability that shapes how it behaves and how it will respond
              to treatment. Our Oncology Genomics portfolio decodes that
              signature so oncologists can move beyond trial-and-error and
              toward precision therapy selection, from first diagnosis through
              relapse monitoring.
            </p>

          </div>

        </div>


        {/* =====================================================
            TABS
        ===================================================== */}

        <div className="oncology-tabs-wrapper">

          <div className="oncology-tabs">

            {oncologyTabs.map((tab, index) => {

              const TabIcon = tab.icon;

              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`oncology-tab ${
                    activeTab === index
                      ? "oncology-tab-active"
                      : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >

                  <span className="tab-number">
                    {tab.id}
                  </span>

                  <span className="tab-icon">
                    <TabIcon size={19} />
                  </span>

                  <span className="tab-title">
                    {tab.title}
                  </span>

                </button>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            ACTIVE CONTENT BOX
        ===================================================== */}

        <div
          className="oncology-active-card"
          key={activeContent.id}
        >

          {/* Accent line */}
          <div className="oncology-card-accent"></div>


          {/* =================================================
              CARD HEADER
          ================================================= */}

          <div className="oncology-card-header">

            <div className="oncology-card-icon">
              <ActiveIcon
                size={30}
                strokeWidth={1.7}
              />
            </div>

            <div>

              <div className="oncology-card-number">
                {activeContent.id}
              </div>

              <h3>
                {activeContent.title}
              </h3>

              {activeContent.subtitle && (
                <h4>
                  {activeContent.subtitle}
                </h4>
              )}

            </div>

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <div className="oncology-card-description">

            <p>
              {activeContent.description}
            </p>

          </div>


          {/* =================================================
              CLINICAL APPLICATIONS
          ================================================= */}

          <div className="clinical-applications">

            <div className="applications-heading">

              <div className="applications-heading-icon">
                <Sparkles size={17} />
              </div>

              <span>
                Clinical Applications
              </span>

            </div>


            <div className="applications-list">

              {activeContent.applications.map(
                (application, index) => (

                  <div
                    className="application-point"
                    key={index}
                  >

                    <div className="application-check">
                      <CheckCircle2 size={18} />
                    </div>

                    <p>
                      {application}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>


          {/* =================================================
              WHY IT MATTERS
          ================================================= */}

          {activeContent.whyItMatters && (

            <div className="why-it-matters">

              <div className="why-icon">
                <ShieldCheck size={21} />
              </div>

              <div className="why-content">

                <span>
                  Why it matters
                </span>

                <p>
                  {activeContent.whyItMatters}
                </p>

              </div>

            </div>

          )}

        </div>


        {/* =====================================================
            TAB INDICATOR
        ===================================================== */}

        <div className="oncology-tab-indicator">

          <span>
            {String(activeTab + 1).padStart(2, "0")}
          </span>

          <div className="indicator-track">

            <div
              className="indicator-progress"
              style={{
                width: `${
                  ((activeTab + 1) /
                    oncologyTabs.length) *
                  100
                }%`,
              }}
            ></div>

          </div>

          <span>
            {String(oncologyTabs.length).padStart(2, "0")}
          </span>

        </div>

      </div>
    </section>
  );
};

export default OncologyGenomics;