import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/pankajsalunke", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pankaj-salunke-3342b7203",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/pankaj_salunke_02/",
    label: "Instagram",
  },
];

const Footer = () => (
  <footer className="relative border-t px-5 py-10" style={{ borderColor: "rgb(var(--line))" }}>
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 text-center">
      <div className="flex gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="h-11 w-11 grid place-items-center rounded-full card text-lg text-muted hover:text-accent2 hover:-translate-y-1 transition duration-300"
          >
            <Icon />
          </a>
        ))}
      </div>
      <p className="text-sm text-muted">
        Designed & built by Pankaj Salunke · © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
