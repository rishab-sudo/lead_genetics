import React from "react";
import ClinicalHero from "../components/ClinicalHero";
import "./ClinicalGenomics.css";

// const testMenu = [
//   "Oncology",
//   "Rare Disease",
//   "Pharmacogenomics",
//   "Reproductive",
//   "Neonatology",
//   "Cardiology",
//   "Neurology",
//   "Infectious Disease",
// ]

const sections = [
  {
    title: "Oncology Genomics",
    text: "Comprehensive tumor profiling, liquid biopsy, HRD assessment, TMB and MSI biomarkers to support precision oncology decisions and targeted therapy selection.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Rare Disease Genomics",
    text: "Whole exome and genome sequencing for undiagnosed disorders, hereditary syndromes and complex pediatric conditions requiring deep genomic investigation.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pharmacogenomics (PGx)",
    text: "Predict drug response and optimize treatment selection using validated pharmacogenomic markers across oncology, cardiology and psychiatry workflows.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Reproductive Genetics",
    text: "Carrier screening, PGT support, prenatal risk assessment and reproductive planning powered by advanced molecular and cytogenetic technologies.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Neonatology Genomics",
    text: "Rapid NICU sequencing solutions for critically ill newborns, enabling faster diagnosis and earlier intervention during the most critical hours of care.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cardiology Genomics",
    text: "Inherited arrhythmia, cardiomyopathy and sudden cardiac death risk assessment with actionable genomic insights for patients and families.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Neurology Genomics",
    text: "Genetic testing for epilepsy, neurodevelopmental disorders, neuropathies and neurodegenerative conditions using comprehensive sequencing approaches.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Infectious Disease Genomics",
    text: "Pathogen sequencing, outbreak investigation and antimicrobial resistance profiling to support infection control and precision infectious disease management.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
  },
]

const ClinicalGenomics = () => {
  return (
    <>
      <ClinicalHero />

      {/* <section className="clinical-testmenu-section">
        <div className="container">
          <div className="clinical-testmenu-grid">
            {testMenu.map((item, index) => (
              <div className="clinical-testmenu-card" key={index}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="clinical-content-section">
        <div className="container">
          {sections.map((section, index) => (
            <div
              className={`clinical-content-row ${
                index % 2 !== 0 ? "clinical-content-row-reverse" : ""
              }`}
              key={index}
            >
              <div className="clinical-content-image">
                <img src={section.image} alt={section.title} />
              </div>

              <div className="clinical-content-text">
                <span className="clinical-content-tag">CLINICAL GENOMICS</span>
                <h2>{section.title}</h2>
                <p>{section.text}</p>

                <div className="clinical-content-highlight">
                  <h5>Why it matters</h5>
                  <ul>
                    <li>Faster and more confident clinical decisions</li>
                    <li>Improved patient stratification and risk assessment</li>
                    <li>Actionable genomic insights integrated into care pathways</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="clinical-process-section">
        <div className="container">
          <div className="clinical-process-heading">
            <span>PRECISION WORKFLOW</span>
            <h2>From genome to bedside decision</h2>
          </div>

          <div className="clinical-process-grid">
            <div className="clinical-process-card">
              <div className="clinical-process-icon">🧬</div>
              <h4>Genomic Sequencing</h4>
              <p>High-quality DNA and RNA sequencing with validated laboratory workflows.</p>
            </div>

            <div className="clinical-process-card">
              <div className="clinical-process-icon">📊</div>
              <h4>Data Analysis</h4>
              <p>Advanced bioinformatics pipelines for accurate variant detection and annotation.</p>
            </div>

            <div className="clinical-process-card">
              <div className="clinical-process-icon">🔬</div>
              <h4>Clinical Interpretation</h4>
              <p>Expert review and evidence-based reporting aligned with current clinical guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clinical-features-section">
        <div className="container">
          <div className="clinical-features-heading">
            <span>WHY LEADS GENETICS</span>
            <h2>The rare resource of competence across the whole clinical journey</h2>
          </div>

          <div className="clinical-features-grid">
            <div className="clinical-features-card">
              <h4>Expertise</h4>
              <p>Multidisciplinary genomics experts supporting oncology, rare disease and reproductive medicine programs.</p>
            </div>

            <div className="clinical-features-card">
              <h4>Technology</h4>
              <p>Validated sequencing platforms, automated workflows and scalable infrastructure for clinical-grade testing.</p>
            </div>

            <div className="clinical-features-card">
              <h4>Rapid TAT</h4>
              <p>Optimized laboratory and analysis pipelines designed to deliver timely results for critical clinical decisions.</p>
            </div>

            <div className="clinical-features-card">
              <h4>Clinical Context</h4>
              <p>Actionable reports with therapeutic relevance, risk interpretation and guidance for downstream patient management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clinical-cta-section">
        <div className="container">
          <div className="clinical-cta-wrapper">
            <div>
              <h2>Ready to order a test for your patient?</h2>
              <p>Connect with our genomics team to discuss the right testing strategy for your clinical workflow.</p>
            </div>

            <button className="clinical-cta-button">Order a Test</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClinicalGenomics;