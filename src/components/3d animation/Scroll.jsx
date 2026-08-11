import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Scroll.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollFrameSection
 * -------------------
 * Scroll-triggered image-sequence "video" section, Apple/Awwwards style.
 * As the user scrolls slowly through the section, the scroll position is
 * mapped to a frame index (0 -> FRAME_COUNT-1) and drawn to a <canvas>.
 * The `captions` array is split evenly across that same scroll range, so a
 * new heading/description swaps in as the user passes into each segment.
 *
 * Setup:
 * 1. npm install gsap
 * 2. Drop your frame images in /public/frames/ (e.g. ezgif-frame-001.jpg ... ezgif-frame-240.jpg)
 * 3. Adjust FRAME_COUNT / getFramePath / SCROLL_LENGTH_VH below to match your assets.
 */

const FRAME_COUNT = 240;
const SCROLL_LENGTH_VH = 400; // how many viewport-heights of scroll it takes to play the whole sequence
const FRAME_PATH = (index) =>
  `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

const DEFAULT_CAPTIONS = [
  { eyebrow: "Step 01", title: "Engineering the Future of Agriculture", description: "Agri Genomics is transforming the way we understand and improve crops. By analyzing genetic variation and identifying traits linked to yield, resilience, disease resistance, and quality, genomic technologies enable more precise and efficient crop development. Our approach bridges advanced genomic science with real-world agricultural challenges, helping accelerate innovation from the laboratory to the field." },
];

export default function ScrollFrameSection({
  captions = DEFAULT_CAPTIONS,
  frameCount = FRAME_COUNT,
  scrollLengthVh = SCROLL_LENGTH_VH,
  getFramePath = FRAME_PATH,
}) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const captionRefs = useRef([]);
  const imagesRef = useRef([]);
  const stateRef = useRef({ frame: 0 });

  captionRefs.current = [];
  const setCaptionRef = (el) => {
    if (el) captionRefs.current.push(el);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // ---- preload every frame ----
    const images = new Array(frameCount);
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images[i] = img;
    }
    imagesRef.current = images;

    // ---- draw a frame, cover-fit into the canvas ----
    const drawFrame = (index) => {
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let sx, sy, sw, sh;

      if (imgRatio > canvasRatio) {
        sh = img.naturalHeight;
        sw = sh * canvasRatio;
        sx = (img.naturalWidth - sw) / 2;
        sy = 0;
      } else {
        sw = img.naturalWidth;
        sh = sw / canvasRatio;
        sx = 0;
        sy = (img.naturalHeight - sh) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    };

    const render = () => drawFrame(Math.round(stateRef.current.frame));

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrapperRef.current.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      render();
    };

    images[0].onload = render;
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // ---- scroll -> frame index, driven by GSAP ScrollTrigger ----
    const st = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        stateRef.current.frame = Math.min(
          frameCount - 1,
          Math.floor(self.progress * frameCount)
        );
        render();
      },
    });

    // ---- captions: each one owns an equal slice of the scroll range,
    // fading in, holding, then fading out as the next one fades in ----
    const n = captionRefs.current.length;
    let captionTl;
    if (n > 0) {
      gsap.set(captionRefs.current, { opacity: 0, y: 24 });

      captionTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      captionRefs.current.forEach((el, i) => {
        const segmentStart = i; // each segment is 1 "unit" long, scrub normalizes across total
        captionTl
          .fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.2 }, segmentStart)
          .to(el, { opacity: 1, duration: 0.6 }, segmentStart + 0.2)
          .to(el, { opacity: 0, y: -24, duration: 0.2 }, segmentStart + 0.8);
      });
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      st.kill();
      if (captionTl?.scrollTrigger) captionTl.scrollTrigger.kill();
      captionTl?.kill();
    };
  }, [frameCount, getFramePath, captions]);

  return (
    <div className="container-fluid p-0 scroll-frame-container-fluid">
      <section
        ref={wrapperRef}
        className="scroll-frame-wrapper"
        style={{ height: `${scrollLengthVh}vh` }}
      >
        <div className="scroll-frame-stage">
          <canvas ref={canvasRef} className="scroll-frame-canvas" />

          <div className="scroll-frame-overlay-stack">
            {captions.map((c, i) => (
              <div key={i} ref={setCaptionRef} className="scroll-frame-overlay">
                {c.eyebrow && <p className="scroll-frame-eyebrow">{c.eyebrow}</p>}
                {c.title && <h2 className="scroll-frame-title">{c.title}</h2>}
                {c.description && <p className="scroll-frame-description">{c.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}