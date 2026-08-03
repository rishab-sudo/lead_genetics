import React from "react";
import { Mail, Phone } from "lucide-react";
import "./Footer.css";

const Linkedin = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const genomicsLinks = [
  { label: "Agricultural", href: "/agricultural-genomics" },
  { label: "Research", href: "/research" },
  { label: "Clinical", href: "/clinical-genomics" },
  { label: "Animal & livestock", href: "/clinical-genomics/animal-livestock-genomics" },
  { label: "IVF & reproductive", href: "/clinical-genomics/ivf-reproductive-genetics" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Why choose us", href: "/why-leadsgenetics" },
  { label: "Trust & credibility", href: "/credibility" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/about/careers" },
];

const resourceLinks = [
  { label: "Publications", href: "/research/publications" },
  { label: "Case studies", href: "/research/case-studies" },
  { label: "News", href: "/resources/news" },
  { label: "FAQs", href: "/resources/faqs" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
];

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <p className="footer-column-title">{title}</p>
      <ul className="footer-link-list">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-logo"><img alt="lead-genetics-video" src={require("../assets/logo.png")}/></p>
            <p className="footer-tagline">
              Agricultural, research and clinical genomics under one
              premium, science-led brand.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" aria-label="X (Twitter)" target="_blank" rel="noreferrer">
                <Twitter size={18} />
              </a>
              <a href="mailto:hello@leadsgenetics.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <FooterColumn title="Genomics" links={genomicsLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div className="footer-column">
            <p className="footer-column-title">Contact</p>
            <ul className="footer-link-list">
              <li><a href="/contact/consultation">Request consultation</a></li>
              <li><a href="/contact/locations">Locations</a></li>
              <li>
                <a href="mailto:hello@leadsgenetics.com" className="footer-contact-line">
                  <Mail size={14} /> hello@leadsgenetics.com
                </a>
              </li>
              <li>
                <a href="tel:+910000000000" className="footer-contact-line">
                  <Phone size={14} /> +91 00000 00000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} Leads Genetics. All rights reserved.
          </p>
          <ul className="footer-legal-list">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}