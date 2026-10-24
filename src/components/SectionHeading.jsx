/* eslint-disable react/prop-types */
import Reveal from "./Reveal";

const SectionHeading = ({eyebrow, title, subtitle}) => (
  <Reveal className="text-center mb-14">
    <p className="text-accent2 font-semibold tracking-widest text-xs sm:text-sm uppercase">
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl sm:text-5xl font-bold mt-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted mt-4 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </Reveal>
);

export default SectionHeading;
