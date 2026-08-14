import { useState, useEffect, useRef } from "react";
import { FiTarget, FiEye, FiAward } from "react-icons/fi";
import "./about-mission.css";

const PILLARS = [
  {
    icon: <FiTarget size={28} />,
    label: "Mission",
    text: "To democratise access to precision genomics across agriculture, research, and clinical science — delivering insights that are accurate, fast, and actionable.",
  },
  {
    icon: <FiEye size={28} />,
    label: "Vision",
    text: "A world where every crop, patient, and organism is understood at the genomic level — enabling better decisions for health, food security, and biodiversity.",
  },
  {
    icon: <FiAward size={28} />,
    label: "Values",
    text: "Scientific rigour. Radical transparency. Continuous innovation. We hold ourselves to the highest standards of accuracy and data integrity in everything we deliver.",
  },
];

const STATS = [
  { value: 8, suffix: "+", prefix: "", label: "Years of Expertise" },
  { value: 10000, suffix: "+", prefix: "", label: "Samples Processed" },
  { value: 50, suffix: "+", prefix: "", label: "Research Partners" },
  { value: 99.9, suffix: "%", prefix: "", label: "Sequencing Accuracy" },
];

/* Counts up from 0 to `value` once its wrapper scrolls into view. */
function AnimatedCounter({ value, prefix = "", suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);
  const isFloat = !Number.isInteger(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = value * eased;
            setDisplay(isFloat ? Number(current.toFixed(1)) : Math.round(current));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, isFloat]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function MissionStatsPillars() {
  const statsRef = useRef(null);
  const pillarsRef = useRef(null);

  return (
    <section className="about-mission-section">
      <div className="container-fluid">
        <div ref={statsRef} className="about-stats">
          {STATS.map(({ value, suffix, prefix, label }) => (
            <div key={label} className="about-stat">
              <div className="about-stat__num">
                <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
              </div>
              <div className="about-stat__label">{label}</div>
            </div>
          ))}
        </div>

        <div ref={pillarsRef} className="about-pillars">
          {PILLARS.map((p) => (
            <div key={p.label} className="about-pillar glass-card">
              <div className="about-pillar__icon">{p.icon}</div>
              <h3 className="about-pillar__label">{p.label}</h3>
              <p className="about-pillar__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}