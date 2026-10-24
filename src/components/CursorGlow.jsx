import { useEffect, useRef } from "react";

// A soft glow that follows the mouse. Disabled on touch devices.
const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    const move = (e) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      el.style.opacity = "1";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 h-[400px] w-[400px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, rgb(var(--accent) / 0.16), transparent 65%)",
      }}
    />
  );
};

export default CursorGlow;
