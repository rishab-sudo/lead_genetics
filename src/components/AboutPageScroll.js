import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sequencerImg from "../assets/sequencer-illustration.png";
import pepLabImg from "../assets/pep_lab.jpeg";
import homeBlImg from "../assets/home_bl.png";
import homeKamImg from "../assets/home_kam.png";
import "./AboutPageScroll.css";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: "c1",
    number: "01",
    icon: "🔬",
    title: "Laboratory",
    desc: "High-quality genomic information through SNP genotyping, GBS, sequencing, and advanced analysis.",
    image: sequencerImg,
  },
  {
    id: "c2",
    number: "02",
    icon: "💻",
    title: "Computational",
    desc: "Population structure, parentage, genomic relationships, breeding values, and selection insights.",
    image: pepLabImg,
  },
  {
    id: "c3",
    number: "03",
    icon: "🧬",
    title: "Biological",
    desc: "Genomic predictions connected to milk production, fertility, growth, health, and adaptability.",
    image: homeBlImg,
  },
  {
    id: "c4",
    number: "04",
    icon: "🐄",
    title: "Herd",
    desc: "Real-world breeding and selection decisions supported at the farm level.",
    image: homeKamImg,
  },
];

const LOGOS = ["Codecraft_", "◆ Frequencii", "✳ Kintsugi", "◗ CoreOS"];

function CardFace({ number, icon, title, desc, image, overlayRef }) {
  return (
    <div className="card-face" style={{ backgroundImage: `url(${image})` }}>
      <div className="top-bar"><span /><span /><span /></div>

      {/* content fades in once the card finishes landing */}
      <div className="card-overlay" ref={overlayRef}>
        <div className="overlay-top">
          <span className="overlay-icon">{icon}</span>
          <span className="overlay-number">{number}</span>
        </div>
        <div className="overlay-bottom">
          <h3 className="overlay-title">{title}</h3>
          <p className="overlay-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroScrollSection() {
  const sceneRef = useRef(null);
  const latestRef = useRef(null); // separate endTrigger target
  const startRefs = useRef([]);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rectOf = (el) => {
        const r = el.getBoundingClientRect();
        return { left: r.left, top: r.top, width: r.width, height: r.height };
      };

      const getRotation = (el) => {
        const m = window.getComputedStyle(el).transform;
        if (m === "none") return 0;
        const v = m.match(/matrix\(([^)]+)\)/)[1].split(",").map(Number);
        return Math.round(Math.atan2(v[1], v[0]) * (180 / Math.PI));
      };

      let tl;

      const buildTimeline = () => {
        if (tl) {
          tl.scrollTrigger && tl.scrollTrigger.kill();
          tl.kill();
        }

        // clear previous transforms so we measure each card's TRUE
        // (grid) position before computing the fly-in offset again
        gsap.set(cardRefs.current, { clearProps: "transform" });
        // overlay text stays hidden until the card has actually landed
        gsap.set(overlayRefs.current, { opacity: 0 });

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: sceneRef.current,
            start: "top top",
            endTrigger: latestRef.current, // finish landing relative to the
            end: "top center",             // "Latest Projects" block itself
            scrub: 1.5,                    // smooth damping for mousewheel
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        cardRefs.current.forEach((card, i) => {
          const startRect = rectOf(startRefs.current[i]);
          const cardRect = rectOf(card); // true resting position, inside the grid

          const dx = startRect.left - cardRect.left;
          const dy = startRect.top - cardRect.top;
          const scaleX = startRect.width / cardRect.width;
          const scaleY = startRect.height / cardRect.height;
          const rot = getRotation(startRefs.current[i]);

          gsap.set(card, {
            x: dx,
            y: dy,
            scaleX,
            scaleY,
            rotation: rot,
            zIndex: 5,
            force3D: true,
            transformPerspective: 1000,
          });

          const start = i * 0.08;

          tl.to(
            card,
            {
              x: 0,
              y: 0,
              scaleX: 1,
              scaleY: 1,
              rotation: 0,
              ease: "power2.out",
              duration: 1.2,
              force3D: true,
            },
            start
          );

          // overlay content (icon/number/title/desc) only appears once
          // the card is essentially fully landed, not mid-flight
          tl.to(
            overlayRefs.current[i],
            {
              opacity: 1,
              ease: "power1.out",
              duration: 0.35,
            },
            start + 1.05
          );
        });
      };

      buildTimeline();

      let resizeTO;
      const onResize = () => {
        clearTimeout(resizeTO);
        resizeTO = setTimeout(() => {
          buildTimeline();
          ScrollTrigger.refresh();
        }, 200);
      };
      window.addEventListener("resize", onResize);

      return () => window.removeEventListener("resize", onResize);
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="scene-wrap" ref={sceneRef}>
        <div className="hero-row">
          <div className="hero-left">
            <span className="badge">From genomics to genetic gain</span>
            <h1>
              <span className="light">Genomic data has value</span>
              <span className="dark">when it changes a breeding decision.</span>
            </h1>
            <p>
              Our work extends from the laboratory to the herd — integrating
              data, computation, biology, and field decisions into a single
              continuous loop.
            </p>
            <button className="cta">
              <img src="https://i.pravatar.cc/64?img=12" alt="" />
            Contact Us
            </button>
          </div>

          <div className="hero-right">
            {CARDS.map((c, i) => (
              <div
                key={c.id}
                ref={(el) => (startRefs.current[i] = el)}
                className={`start-slot s${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="logos-row">
          <div className="avatars">
            <div className="stack">
              <img src="https://i.pravatar.cc/64?img=32" alt="" />
              <img src="https://i.pravatar.cc/64?img=45" alt="" />
              <img src="https://i.pravatar.cc/64?img=15" alt="" />
              <img src="https://i.pravatar.cc/64?img=8" alt="" />
            </div>
            <div className="meta">
              <span className="stars">★★★★★</span>
              <br />
              99+ Happy clients
            </div>
          </div>

          {/* marquee strip, duplicated for seamless loop */}
          <div className="marquee">
            <div className="marquee-track">
              {[...LOGOS, ...LOGOS].map((l, i) => (
                <span className="logo" key={i}>{l}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="latest" ref={latestRef}>
          <div className="grid-target">
            {CARDS.map((c, i) => (
              <div key={c.id} className="end-slot">
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className={`proj-card ${c.id}`}
                >
                  <CardFace
                    number={c.number}
                    icon={c.icon}
                    title={c.title}
                    desc={c.desc}
                    image={c.image}
                    overlayRef={(el) => (overlayRefs.current[i] = el)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="quote-box">
            <p>
              This integrated approach allows Leads Genetics to build toward
              a continuously improving cattle population — where each
              generation provides new genomic and phenotypic information
              that strengthens the selection decisions for the next.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}