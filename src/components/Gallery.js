import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Gallery.css";

// Local images — path is relative to src/components/Gallery.jsx,
// pointing up to src/assets/. Rename/adjust if your folder differs.
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";

const defaultImages = [
  { src: brand1, alt: "Slide 1" },
  { src: brand2, alt: "Slide 2" },
  { src: brand3, alt: "Slide 3" },
  { src: brand4, alt: "Slide 4" },
  { src: brand5, alt: "Slide 5" },
];

/**
 * Gallery.jsx
 * Autoplay image carousel built with framer-motion.
 *
 * Props:
 * - images: array of { src, alt, caption } OR array of strings (image urls)
 *   Defaults to the 5 local PNGs imported above.
 * - heading: string, default "Our Gallery"
 * - autoPlay: boolean, default true
 * - interval: ms between slides, default 4000 (4 seconds)
 * - showArrows: boolean, default true
 * - showDots: boolean, default true
 * - pauseOnHover: boolean, default true
 */

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const normalizeImages = (images = []) =>
  images.map((img, i) =>
    typeof img === "string"
      ? { src: img, alt: `Slide ${i + 1}`, caption: "" }
      : { alt: `Slide ${i + 1}`, caption: "", ...img }
  );

export default function Gallery({
  images = defaultImages,
  heading = "Our Gallery",
  autoPlay = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
  pauseOnHover = true,
}) {
  const slides = normalizeImages(images);
  const [[index, direction], setIndexState] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slideCount = slides.length;
  const activeIndex = ((index % slideCount) + slideCount) % slideCount;

  const paginate = useCallback(
    (newDirection) => {
      setIndexState(([prevIndex]) => [prevIndex + newDirection, newDirection]);
    },
    []
  );

  const goTo = useCallback(
    (targetIndex) => {
      setIndexState(([prevIndex]) => [
        targetIndex,
        targetIndex > prevIndex ? 1 : -1,
      ]);
    },
    []
  );

  useEffect(() => {
    if (!autoPlay || isPaused || slideCount <= 1) return undefined;

    timerRef.current = setInterval(() => {
      paginate(1);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [autoPlay, isPaused, interval, paginate, slideCount]);

  if (slideCount === 0) {
    return <div className="gallery-empty">No images to display</div>;
  }

  return (
    <div className="gallery-wrapper">
      {heading ? <h2 className="gallery-heading">{heading}</h2> : null}

      <div
        className="gallery-container"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="gallery-track">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              className="gallery-slide"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <img
                src={slides[activeIndex].src}
                alt={slides[activeIndex].alt}
                className="gallery-image"
                draggable={false}
              />
              {slides[activeIndex].caption ? (
                <div className="gallery-caption">
                  {slides[activeIndex].caption}
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>

          {showArrows && slideCount > 1 && (
            <>
              <button
                className="gallery-arrow gallery-arrow-left"
                onClick={() => paginate(-1)}
                aria-label="Previous slide"
              >
                &#10094;
              </button>
              <button
                className="gallery-arrow gallery-arrow-right"
                onClick={() => paginate(1)}
                aria-label="Next slide"
              >
                &#10095;
              </button>
            </>
          )}
        </div>

        {showDots && slideCount > 1 && (
          <div className="gallery-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}