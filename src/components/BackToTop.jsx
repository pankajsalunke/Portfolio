import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full grid place-items-center text-white
        bg-gradient-to-br from-accent to-accent2 shadow-lg transition duration-300 hover:-translate-y-1
        ${show ? "opacity-100" : "opacity-0 pointer-events-none translate-y-4"}`}
    >
      <FiArrowUp />
    </button>
  );
};

export default BackToTop;
