/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";

// `fit` = "cover" for cards, "contain" for the modal.
const ImageCarousel = ({
  images,
  title,
  fit = "cover",
  className = "h-52",
  autoPlay = true,
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images?.length || 0;

  useEffect(() => {
    if (!autoPlay || count < 2 || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 3500);
    return () => clearInterval(id);
  }, [autoPlay, count, paused]);

  if (!count) return null;

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i === 0 ? count - 1 : i - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % count);
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-black/30 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={images[index]}
        alt={`${title} screenshot ${index + 1}`}
        loading="lazy"
        className={`w-full h-full transition duration-500 ${
          fit === "contain" ? "object-contain" : "object-cover object-top"
        }`}
      />

      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 hover:bg-black/75 text-white grid place-items-center transition"
          >
            &#10094;
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 hover:bg-black/75 text-white grid place-items-center transition"
          >
            &#10095;
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-accent2" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
