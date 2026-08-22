import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sequencerImg from "../assets/sequencer-illustration.png";
import pepLabImg from "../assets/pep_lab.jpeg";
import homeBlImg from "../assets/home_bl.png";
import homeKamImg from "../assets/home_kam.png";
import "./AboutHero.css";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { id: "c1", tag: "Branding", label: "LaunchNow", image: sequencerImg },
  { id: "c2", tag: "Web",      label: "Meridian",  image: pepLabImg },
  { id: "c3", tag: "Product",  label: "Nordfolio", image: homeBlImg },
  { id: "c4", tag: "Identity", label: "Vertex",    image: homeKamImg },
];

const LOGOS = ["Codecraft_", "◆ Frequencii", "✳ Kintsugi", "◗ CoreOS"];

function CardFace({ tag, label, image }) {
  return (
    <div className="card-face" style={{ backgroundImage: `url(${image})` }}>
      <div className="top-bar"><span /><span /><span /></div>
      <span className="tag">{tag}</span>
      <div className="label">{label}</div>
    </div>
  );
}

export default function HeroScrollSection() {
  const sceneRef = useRef(null);
  const latestRef = useRef(null); // separate endTrigger target
  const startRefs = useRef([]);
  const cardRefs = useRef([]);

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
            i * 0.08
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
            <span className="badge">Available for August'25</span>
            <h1>
              <span className="light">Design that</span>
              <span className="dark">delivers results.</span>
            </h1>
            <p>
              <strong>Strategic design that drives growth, not just looks good.</strong>{" "}
              I create everything your brand needs to attract customers and turn them into sales.
            </p>
            <button className="cta">
              <img src="https://i.pravatar.cc/64?img=12" alt="" />
              Book a call with me
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
          <h2>Latest Projects</h2>
          <div className="grid-target">
            {CARDS.map((c, i) => (
              <div key={c.id} className="end-slot">
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className={`proj-card ${c.id}`}
                >
                  <CardFace tag={c.tag} label={c.label} image={c.image} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="after">
        <p>↓ page scrolls completely normally — the hero text just scrolls away like any normal content ↓</p>
        <p>More sections go here (services, case studies, footer, etc).</p>
      </div>
    </>
  );
}