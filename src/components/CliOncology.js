import React from "react";
import "./CliOncology.css";

const CliOncology = () => {
  return (
    <section className="oncology-section">

      <div className="container">

        {/* Heading */}
        <div className="oncology-heading">
          <h2>Oncology Genomics</h2>
          <p>Cancer as a disease of the genome</p>
        </div>

        {/* First Row */}
        <div className="oncology-grid">

          {/* Left */}
          <div className="card image-card">
            <img
              src="/images/oncology/tube.png"
              alt="Solid Tumor"
            />
          </div>

          {/* Middle */}
          <div className="card content-card">

            <h3>Solid Tumor Panels</h3>

            <p>
              Comprehensive NGS panels designed for profiling solid
              tumors and identifying actionable genomic alterations.
            </p>

            <ul>
              <li>Comprehensive cancer profiling</li>
              <li>Targeted therapy biomarkers</li>
              <li>Precision medicine support</li>
            </ul>

          </div>

          {/* Right */}
          <div className="card report-card">

            <h3>Why It Matters</h3>

            <p>
              Delivers clinically actionable information for
              personalized cancer care.
            </p>

            <img
              src="/images/oncology/report1.png"
              alt="Report"
            />

          </div>

          {/* Second Row */}

          <div className="card image-card">
            <img
              src="/images/oncology/liquid-biopsy.png"
              alt="Liquid Biopsy"
            />
          </div>

          <div className="card content-card">

            <h3>Liquid Biopsy</h3>

            <p>
              Non-invasive genomic testing using circulating tumor DNA
              for diagnosis, monitoring and treatment response.
            </p>

            <ul>
              <li>Blood-based testing</li>
              <li>Early recurrence detection</li>
              <li>Treatment monitoring</li>
            </ul>

          </div>

          <div className="card report-card">

            <h3>Why It Matters</h3>

            <p>
              Enables precision medicine through continuous genomic
              monitoring.
            </p>

            <img
              src="/images/oncology/report2.png"
              alt="Report"
            />

          </div>

        </div>

        {/* Bottom Row */}

        <div className="mini-grid">

          <div className="mini-card">

            <img
              src="/images/oncology/hrd.png"
              alt="HRD"
            />

            <h3>HRD</h3>

            <p>
              Homologous Recombination Deficiency testing predicts
              response to PARP inhibitor therapies.
            </p>

          </div>

          <div className="mini-card">

            <img
              src="/images/oncology/tmb.png"
              alt="TMB"
            />

            <h3>TMB</h3>

            <p>
              Tumor Mutation Burden serves as a predictive biomarker
              for immunotherapy.
            </p>

          </div>

          <div className="mini-card">

            <img
              src="/images/oncology/msi.png"
              alt="MSI"
            />

            <h3>MSI</h3>

            <p>
              Microsatellite Instability testing identifies mismatch
              repair deficiency and treatment options.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CliOncology;