import React from "react";
import {
  Baby,
  HeartPulse,
  Brain,
  Clock3,
  Dna,
  UsersRound,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import "./NeonatologyCardiology.css";

const genomicsData = [
  {
    number: "01",
    category: "CLINICAL GENOMICS",
    title: "Neonatology Genomics",
    icon: Baby,

    description:
      "For critically ill newborns, time is the scarcest resource. Rapid genomic testing is designed to return results within days, not weeks, so that genetic findings can actively shape care in the NICU.",

    applications: [
      {
        icon: Clock3,
        text: "Rapid exome or genome sequencing for critically ill neonates with suspected genetic disease",
      },
      {
        icon: Dna,
        text: "Diagnosis of inborn errors of metabolism, congenital anomalies, and early-onset multisystem disorders",
      },
      {
        icon: ShieldCheck,
        text: "Results that can directly inform treatment escalation, de-escalation, or redirection of care",
      },
      {
        icon: UsersRound,
        text: "Support for informed, timely conversations between clinicians and families",
      },
    ],
  },

  {
    number: "02",
    category: "CLINICAL GENOMICS",
    title: "Cardiology Genomics",
    icon: HeartPulse,

    description:
      "Many cardiovascular conditions — from cardiomyopathies to arrhythmia syndromes to familial hypercholesterolemia — have a strong genetic basis, and a genetic diagnosis in one family member has direct implications for relatives.",

    applications: [
      {
        icon: Dna,
        text: "Targeted gene panels for inherited cardiomyopathies, channelopathies, and familial hypercholesterolemia",
      },
      {
        icon: ShieldCheck,
        text: "Risk stratification for sudden cardiac death in at-risk families",
      },
      {
        icon: UsersRound,
        text: "Cascade testing of relatives once a familial variant is identified, enabling early monitoring or preventive intervention",
      },
      {
        icon: HeartPulse,
        text: "Pharmacogenomic overlap for cardiovascular drug selection and dosing",
      },
    ],
  },

  {
    number: "03",
    category: "CLINICAL GENOMICS",
    title: "Neurology Genomics",
    icon: Brain,

    description:
      "Neurological and neuromuscular disorders are among the most genetically heterogeneous conditions in medicine, often requiring broad, unbiased testing to reach a diagnosis.",

    applications: [
      {
        icon: Dna,
        text: "Gene panels and exome sequencing for epilepsy, neuromuscular disorders, movement disorders, and neurodevelopmental conditions",
      },
      {
        icon: Brain,
        text: "Diagnosis of hereditary ataxias, neuropathies, and early-onset dementias",
      },
      {
        icon: ShieldCheck,
        text: "Identification of treatable genetic epilepsies where a specific diagnosis changes management",
      },
      {
        icon: UsersRound,
        text: "Family counseling support for autosomal, X-linked, and mitochondrial inheritance patterns",
      },
    ],
  },
];

const NeonatologyCardiology = () => {
  return (
    <section className="nc-genomics-section">
      <div className="container">

        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <div className="nc-section-heading">

          <span className="nc-section-label">
            CLINICAL GENOMICS
          </span>

          <h2>
            Genomics where
            <span> every decision matters.</span>
          </h2>

          <p>
            From critically ill newborns to inherited cardiovascular
            and neurological conditions, genomic insights can help
            clinicians make faster, more informed decisions and guide
            care across generations.
          </p>

        </div>


        {/* =====================================================
            GENOMICS CARDS
        ====================================================== */}

        <div className="nc-content">

          {genomicsData.map((item, index) => {

            const Icon = item.icon;

            return (
              <article
                className={`nc-feature ${
                  index % 2 !== 0
                    ? "nc-feature-reverse"
                    : ""
                }`}
                key={item.number}
              >

                {/* =================================================
                    FEATURE INFORMATION
                ================================================== */}

                <div className="nc-feature-info">

                  <div className="nc-number">
                    {item.number}
                  </div>

                  <div className="nc-feature-icon">
                    <Icon
                      size={34}
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="nc-eyebrow">
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="nc-small-line"></div>

                </div>


                {/* =================================================
                    FEATURE BODY
                ================================================== */}

                <div className="nc-feature-body">

                  <p className="nc-description">
                    {item.description}
                  </p>


                  {/* ===============================================
                      CLINICAL APPLICATIONS
                  ================================================ */}

                  <div className="nc-applications">

                    <div className="nc-applications-title">

                      <span className="nc-title-dot"></span>

                      <span>
                        Clinical Applications
                      </span>

                    </div>


                    <div className="nc-application-list">

                      {item.applications.map(
                        (application, applicationIndex) => {

                          const ApplicationIcon =
                            application.icon;

                          return (
                            <div
                              className="nc-application"
                              key={applicationIndex}
                            >

                              <div className="nc-application-icon">
                                <ApplicationIcon
                                  size={17}
                                  strokeWidth={1.7}
                                />
                              </div>

                              <p>
                                {application.text}
                              </p>

                            </div>
                          );
                        }
                      )}

                    </div>

                  </div>


                  {/* ===============================================
                      BOTTOM ACCENT
                  ================================================ */}

                  <div className="nc-bottom-accent">

                    <span>
                      {item.number}
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.7}
                    />

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default NeonatologyCardiology;