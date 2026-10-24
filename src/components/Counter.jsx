/* eslint-disable react/prop-types */
import {useEffect, useRef, useState} from "react";
import {animate, useInView} from "framer-motion";

// Counts from 0 to `value` once it scrolls into view.
const Counter = ({value, suffix = ""}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true});
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

export default Counter;
