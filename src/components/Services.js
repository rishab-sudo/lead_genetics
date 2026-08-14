import { useState } from "react";
import "./Services.css";

const SERVICES = {
  ngs: [
    {
      id: "wgs",
      name: "Whole Genome Sequencing",
      icon: "🧬",
      desc: "Complete sequencing of an organism's entire genome for comprehensive variant detection.",
    },
    {
      id: "amplicon",
      name: "Amplicon Sequencing",
      icon: "🎯",
      desc: "Targeted sequencing of specific gene regions using PCR-amplified fragments.",
    },
    {
      id: "single-cell",
      name: "Single Cell Sequencing",
      icon: "⚪",
      desc: "Genomic profiling at individual cell resolution to capture cellular heterogeneity.",
    },
    {
      id: "wes",
      name: "Whole Exome Sequencing",
      icon: "🧪",
      desc: "Sequencing of all protein-coding regions of the genome for variant discovery.",
    },
    {
      id: "rna-seq",
      name: "RNA Sequencing",
      icon: "📊",
      desc: "Transcriptome profiling to quantify gene expression and detect splice variants.",
    },
    {
      id: "metagenomics",
      name: "Metagenomics",
      icon: "🦠",
      desc: "Sequencing of genetic material directly from environmental or microbial samples.",
    },
    {
      id: "targeted-panel",
      name: "Targeted Gene Panels",
      icon: "🔬",
      desc: "Focused sequencing of curated gene sets relevant to a specific condition or trait.",
    },
    {
      id: "denovo",
      name: "De Novo Assembly",
      icon: "🧩",
      desc: "Genome assembly built from scratch without a reference genome.",
    },
    {
      id: "epigenomics",
      name: "Epigenomic Sequencing",
      icon: "🔗",
      desc: "Profiling of methylation and chromatin marks that regulate gene expression.",
    },
  ],
  bioinformatics: [
    {
      id: "variant-calling",
      name: "Variant Calling & Annotation",
      icon: "🧭",
      desc: "Identification and functional annotation of genomic variants from raw sequence data.",
    },
    {
      id: "pipeline-dev",
      name: "Pipeline Development",
      icon: "⚙️",
      desc: "Custom bioinformatics pipelines for reproducible, scalable data processing.",
    },
    {
      id: "genome-assembly",
      name: "Genome Assembly & Annotation",
      icon: "🗺️",
      desc: "Assembling raw reads into genomes and annotating functional elements.",
    },
    {
      id: "comparative",
      name: "Comparative Genomics",
      icon: "📐",
      desc: "Cross-species genome comparison to identify conserved and divergent regions.",
    },
    {
      id: "expression-analysis",
      name: "Gene Expression Analysis",
      icon: "📈",
      desc: "Statistical analysis of expression data to identify differentially expressed genes.",
    },
    {
      id: "pop-genetics",
      name: "Population Genetics Analysis",
      icon: "👥",
      desc: "Analysis of genetic variation across populations for breeding and diversity studies.",
    },
    {
      id: "phylogenetics",
      name: "Phylogenetic Analysis",
      icon: "🌳",
      desc: "Reconstruction of evolutionary relationships from sequence data.",
    },
    {
      id: "data-viz",
      name: "Genomic Data Visualization",
      icon: "📉",
      desc: "Interactive visualization of complex genomic datasets for interpretation.",
    },
    {
      id: "cloud-compute",
      name: "Cloud Computing Solutions",
      icon: "☁️",
      desc: "Scalable cloud infrastructure for high-throughput genomic data analysis.",
    },
  ],
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("ngs");
  const [openCard, setOpenCard] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenCard(null);
  };

  const toggleCard = (id) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  const activeServices = SERVICES[activeTab];

  return (
    <section className="services-section">
      <div className="container-fluid">
        <div className="services-header">
          <span className="services-header__label">What We Offer</span>
          <h2 className="services-header__title">
            Our <strong>Genomics Services</strong>
          </h2>
          <p className="services-header__subtitle">
            End-to-end sequencing and bioinformatics solutions built for
            research and clinical genomics teams.
          </p>
        </div>

        <div className="services-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "ngs"}
            className={`services-tab ${activeTab === "ngs" ? "active" : ""}`}
            onClick={() => handleTabChange("ngs")}
          >
            NGS
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "bioinformatics"}
            className={`services-tab ${
              activeTab === "bioinformatics" ? "active" : ""
            }`}
            onClick={() => handleTabChange("bioinformatics")}
          >
            Bioinformatics
          </button>
        </div>

        <div className="services-grid">
          {activeServices.map((service) => {
            const isOpen = openCard === service.id;
            return (
              <div
                key={service.id}
                className={`service-card ${isOpen ? "service-card--open" : ""}`}
                onClick={() => toggleCard(service.id)}
              >
                <div className="service-card__header">
                  <span className="service-card__icon">{service.icon}</span>
                  <span className="service-card__name">{service.name}</span>
                  <span
                    className={`service-card__chevron ${isOpen ? "open" : ""}`}
                  >
                    ▾
                  </span>
                </div>
                <div
                  className={`service-card__desc-wrap ${isOpen ? "open" : ""}`}
                >
                  <p className="service-card__desc">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}