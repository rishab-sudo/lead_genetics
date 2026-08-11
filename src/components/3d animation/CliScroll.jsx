import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CliScroll.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * CliScroll
 * ---------------------------------------------------------------
 * Scroll-scrubbed image-sequence hero with chaptered copy, built on
 * a `position: sticky` stage instead of GSAP's `pin: true` — the
 * wrapper section is tall (`scrollLengthVh`), the stage inside it
 * is sticky to the top of the viewport for the full height of the
 * wrapper, and it releases back into normal flow the moment the
 * wrapper's bottom reaches the viewport bottom. No manual pin
 * distance or pin recalculation to manage.
 *
 * Scroll progress across the wrapper (0 -> 1) drives two things
 * at once:
 *   1. which frame is painted on the canvas (continuous scrub)
 *   2. which `chapters` entry is active (eyebrow/heading bottom-left,
 *      description/CTA bottom-right), which mounts fresh and replays
 *      its mask-reveal + underline animation on every chapter change
 *
 * Setup:
 * 1. npm install gsap
 * 2. Frames live in /public/frames/Cliframes/frame-001.jpg ... frame-300.jpg
 *
 * Usage:
 *   <CliScroll
 *     frameCount={300}
 *     scrollLengthVh={400}
 *     chapters={[
 *       { eyebrow: "THE TECH", heading: "At scale.", description: "...",
 *         ctaLabel: "Our Value Proposition", ctaHref: "#value", start: 0 },
 *       { eyebrow: "THE TECH", heading: "The payload.", description: "...",
 *         ctaLabel: "The Platform", ctaHref: "#platform", start: 0.35 },
 *       { eyebrow: "THE TECH", heading: "The engine.", description: "...",
 *         ctaLabel: "The Platform", ctaHref: "#platform", start: 0.68 },
 *     ]}
 *   />
 */

const FRAME_PATH = (index) => `/frames/Cliframes/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;


export default function CliScroll({
  frameCount = 300,
  framePath = FRAME_PATH,
  scrollLengthVh = 400, // total scroll length of the track, in vh — more vh = slower/longer scrub
  chapters = [],
}) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const activeChapterIndexRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const sortedChapters = [...chapters].sort((a, b) => (a.start ?? 0) - (b.start ?? 0));
  const activeChapter = sortedChapters[activeChapterIndex] || sortedChapters[0];

  // Preload every frame before wiring up the scrub, so scrubbing
  // never shows a blank/flashing frame.
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const images = new Array(frameCount);

    // Defined once, outside the loop (fixes eslint no-loop-func).
    const handleFrameSettled = () => {
      loadedCount++;
      if (cancelled) return;
      setProgress(Math.round((loadedCount / frameCount) * 100));
      if (loadedCount === frameCount) setLoaded(true);
    };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = handleFrameSettled;
      img.onerror = handleFrameSettled;
      images[i - 1] = img;
    }
    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [frameCount, framePath]);

  // Wire GSAP ScrollTrigger (sticky-driven scrub) once frames are loaded.
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const wrapper = wrapperRef.current;

    const drawFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasW = canvas.width;
      const canvasH = canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvasW / canvasH;

      // cover-fit so the frame always fills the sticky stage
      let drawW, drawH, offsetX, offsetY;
      if (imgRatio > canvasRatio) {
        drawH = canvasH;
        drawW = drawH * imgRatio;
        offsetX = (canvasW - drawW) / 2;
        offsetY = 0;
      } else {
        drawW = canvasW;
        drawH = drawW / imgRatio;
        offsetX = 0;
        offsetY = (canvasH - drawH) / 2;
      }

      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    };

    const frameState = { frame: 0 };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      drawFrame(Math.round(frameState.frame));
    };

    // resolve which chapter is active for a given scroll progress (0-1)
    const resolveChapterIndex = (p) => {
      let idx = 0;
      for (let c = 0; c < sortedChapters.length; c++) {
        if (p >= (sortedChapters[c].start ?? 0)) idx = c;
      }
      return idx;
    };

    // `end: "bottom bottom"` ties the scrub to the wrapper's own height —
    // this is what makes the sticky stage feel pinned: the wrapper is
    // scrollLengthVh tall, the stage is sticky inside it, and the
    // ScrollTrigger's progress simply tracks how far through that tall
    // wrapper we've scrolled. No pin() call needed.
    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        frameState.frame = self.progress * (frameCount - 1);
        drawFrame(Math.round(frameState.frame));

        if (sortedChapters.length) {
          const idx = resolveChapterIndex(self.progress);
          if (idx !== activeChapterIndexRef.current) {
            activeChapterIndexRef.current = idx;
            setActiveChapterIndex(idx);
          }
        }
      },
    });

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      st.kill();
      window.removeEventListener("resize", resizeCanvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, frameCount, scrollLengthVh, sortedChapters.length]);

  return (
    <div className="container-fluid p-0 cli-scroll-container-fluid">
      <section
        ref={wrapperRef}
        className="cli-scroll-wrapper"
        style={{ height: `${scrollLengthVh}vh` }}
      >
        <div className="cli-scroll-stage">
          <canvas ref={canvasRef} className="cli-scroll-canvas" />

          {activeChapter && (
            <>
              <div className="cli-scroll-bottom-left">
                <div key={`eyebrow-${activeChapterIndex}`} className="cli-scroll-eyebrow-row">
                  <span className="cli-scroll-eyebrow-dot" />
                  <span className="cli-scroll-eyebrow">{activeChapter.eyebrow}</span>
                </div>
                <h2 key={`heading-${activeChapterIndex}`} className="cli-scroll-heading">
                  {activeChapter.heading}
                </h2>
              </div>

              <div className="cli-scroll-bottom-right">
                {activeChapter.description && (
                  <p key={`desc-${activeChapterIndex}`} className="cli-scroll-description">
                    {activeChapter.description}
                  </p>
                )}
                {activeChapter.ctaLabel && (
                  <a
                    key={`cta-${activeChapterIndex}`}
                    href={activeChapter.ctaHref || "#"}
                    className="cli-scroll-cta"
                  >
                    {activeChapter.ctaLabel}
                  </a>
                )}
              </div>
            </>
          )}

          {!loaded && (
            <div className="cli-scroll-loader">
              <div className="cli-scroll-loader-bar" style={{ width: `${progress}%` }} />
              <span className="cli-scroll-loader-label">{progress}%</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}