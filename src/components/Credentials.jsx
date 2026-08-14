import React from "react";
import "./Credentials.css";
const CREDENTIALS = [
  { name: 'ISO 15189',       sub: 'Medical Laboratory Standard' },
  { name: 'GLP Certified',   sub: 'Good Laboratory Practice'    },
  { name: 'Illumina CSPro',  sub: 'Certified Service Provider'  },
  { name: 'NABL Accredited', sub: 'National Accreditation Board'},
  { name: 'CAP Member',      sub: 'College of American Path.'   },
  { name: 'DST-SERB',        sub: 'Research Funding Partner'    },
  { name: 'ICMR Approved',   sub: 'Clinical Research Body'      },
  { name: 'ICAR Partner',    sub: 'Agri Research Collaboration' },
];

export default function Credentials() {
  // Duplicate for seamless loop
  const items = [...CREDENTIALS, ...CREDENTIALS];

  return (
    <section className="section-sm credentials-section" id="credentials">
      <div className="container-max">
        <span className="credentials-label">Trust &amp; Accreditation</span>
        <h2 className="credentials-title">
          Accredited. Trusted. <strong>Science-Grade.</strong>
        </h2>
        <p className="credentials-subtitle">
          Our credentials and research partnerships reflect our commitment to quality and rigour.
        </p>
      </div>

      {/* Marquee — full bleed */}
      <div className="credentials-marquee-wrap" aria-label="Partner and accreditation logos">
        <div className="credentials-marquee">
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} className="credentials-badge">
              <div className="credentials-badge__dot" />
              <div>
                <div className="credentials-badge__name">{item.name}</div>
                <div className="credentials-badge__sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-max">
        <p className="credentials-note">
          Leads Agri Genetics maintains active accreditations, partnerships, and certifications across
          our sequencing, bioinformatics, and clinical reporting workflows.
        </p>
      </div>
    </section>
  );
}