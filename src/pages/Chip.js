import React from 'react'
import HeroChip from '../components/HeroChip'
import "./Chip.css"
import WhyDairyMatters from '../components/WhyMatters'

export const Chip = () => {
  return (
    <div>
        <HeroChip/>

        <section className="zebu-snp-section">
      <div className="zebu-snp-container">

        {/* Left Content */}
        <div className="zebu-snp-content">

          <h2 className="section-heading">
            What is the Zebu Cattle SNP Chip?
          </h2>

          <p className="page-text">
            A SNP (Single Nucleotide Polymorphism) chip is a genomic tool that
            uses thousands of genetic markers to identify specific genetic
            variations across the genome. By analyzing these markers, the chip
            provides valuable insights into genetic diversity, breeding value,
            disease resistance, and other important traits in cattle.
          </p>

          <p className="page-text">
            Designed specifically for India's indigenous cattle populations,
            the Zebu Cattle SNP Chip enables researchers and breeders to
            understand and utilize the unique genetic characteristics of
            valuable native breeds.
          </p>

          {/* Highlight Strip */}
          <div className="zebu-snp-highlight">
            <span className="zebu-snp-highlight-dot"></span>

            <div className="zebu-snp-highlight-content">
              <span className="zebu-snp-highlight-label">
                GENOMIC PRECISION
              </span>

              <span className="zebu-snp-highlight-text">
                Built specifically for India's indigenous Zebu cattle.
              </span>
            </div>
          </div>

        </div>


        {/* Right Information Card */}
        <div className="zebu-snp-info-card">

          <div className="zebu-snp-card-label">
            WHY IT MATTERS
          </div>

          <h3 className="zebu-snp-card-title">
            "Until now, Indian cattle breeders relied on genotyping chips
            designed for exotic & European breeds - poorly suited to the
            indigenous cattle's unique genetic architecture."
          </h3>

          <div className="zebu-snp-card-divider"></div>

          <p className="zebu-snp-card-text">
            Our indigenous Zebu-focused platform provides researchers with
            breed-relevant genomic information for more accurate and
            meaningful breeding decisions.
          </p>

        </div>

      </div>
    </section>
    {/*  */}
      <WhyDairyMatters/>
{/* ------------------------------------------------------ */}
       <section className="genomic-architecture-section">
      <div className="genomic-architecture-container">

        {/* Section Header */}
        <div className="genomic-architecture-header">

          <span className="genomic-architecture-eyebrow">
            PRECISION ALIGNMENT
          </span>

          <h2 className="section-heading">
            Comparative Genomic Architecture
          </h2>

          <p className="page-text">
            Structural divergence between legacy western cattle panels and
            the customized architecture of India's indigenous Zebu cattle.
          </p>

        </div>


        {/* Comparison */}
        <div className="genomic-architecture-comparison">

          {/* European Taurus Card */}
          <div className="genomic-architecture-card genomic-architecture-card--legacy">

            <div className="genomic-architecture-card-top">
              <span className="genomic-architecture-card-label">
                LEGACY SYSTEM
              </span>

              <span className="genomic-architecture-card-icon">
                ⓘ
              </span>
            </div>

            <h3 className="genomic-architecture-card-title">
              Conventional European Taurus
              <br />
              Chips
            </h3>

            <span className="genomic-architecture-card-subtitle">
              DESIGNED FOR TAURUS HOLSTEIN, JERSEY
            </span>

            <div className="genomic-architecture-card-content">

              <div className="genomic-architecture-point">
                <strong>Market Calibrated</strong>
                <p className="page-text">
                  Based toward European dairy genomics; misses polymorphic loci
                  unique to tropical Zebu lineages.
                </p>
              </div>

              <div className="genomic-architecture-point">
                <strong>Genetic Diversity</strong>
                <p className="page-text">
                  Low accuracy for indigenous cattle populations because of
                  limited representation.
                </p>
              </div>

              <div className="genomic-architecture-point genomic-architecture-point--warning">
                <strong>Low Accuracy</strong>
                <p className="page-text">
                  Reduced genomic performance when scoring environmental
                  adaptation and indigenous traits.
                </p>
              </div>

              <div className="genomic-architecture-point">
                <strong>Herd & Disease Traits</strong>
                <p className="page-text">
                  Limited suitability for heat tolerance, disease resistance,
                  and other Zebu-specific characteristics.
                </p>
              </div>

              <div className="genomic-architecture-point">
                <strong>Selection Timeline</strong>
                <p className="page-text">
                  Requires extensive progeny records and multiple generations
                  for reliable selection.
                </p>
              </div>

            </div>

            <div className="genomic-architecture-result genomic-architecture-result--legacy">
              <span>!</span>
              <p className="page-text">
                Results from western selection data are not optimally aligned
                with indigenous cattle.
              </p>
            </div>

          </div>


          {/* Zebu SNP Card */}
          <div className="genomic-architecture-card genomic-architecture-card--zebu">

            <div className="genomic-architecture-card-top">
              <span className="genomic-architecture-card-label">
                NATIONAL INNOVATION
              </span>

              <span className="genomic-architecture-card-icon">
                ⓘ
              </span>
            </div>

            <h3 className="genomic-architecture-card-title">
              Leads Genetics Zebu SNP Chip
            </h3>

            <span className="genomic-architecture-card-subtitle">
              ENGINEERED EXCLUSIVELY FOR BOS INDICUS
            </span>

            <div className="genomic-architecture-card-content">

              <div className="genomic-architecture-point">
                <strong>Marker Calibration</strong>
                <p className="page-text">
                  Designed around indigenous genomic diversity and cattle
                  populations found across India.
                </p>
              </div>

              <div className="genomic-architecture-point">
                <strong>Native Accuracy</strong>
                <p className="page-text">
                  Highly refined genomic information improves breed-relevant
                  genetic prediction.
                </p>
              </div>

              <div className="genomic-architecture-point">
                <strong>Heat & Disease Resilience</strong>
                <p className="page-text">
                  Supports selection for heat tolerance, disease resistance,
                  and other adaptive traits.
                </p>
              </div>

              <div className="genomic-architecture-point">
                <strong>Specialized Trait Selection</strong>
                <p className="page-text">
                  Enables improved identification of economically important
                  production and adaptation traits.
                </p>
              </div>

              <div className="genomic-architecture-point">
                <strong>Faster Genetic Gain</strong>
                <p className="page-text">
                  Supports genomic selection by identifying superior animals
                  earlier in the breeding cycle.
                </p>
              </div>

            </div>

            <div className="genomic-architecture-result genomic-architecture-result--zebu">
              <span>✓</span>
              <p className="page-text">
                Result: Built for accelerated genomic gain, breed-wide
                selection, and indigenous cattle improvement.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

  
    </div>
  )
}
