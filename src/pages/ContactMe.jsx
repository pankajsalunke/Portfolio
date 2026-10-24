import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const inputClass =
  "w-full rounded-xl bg-bg/60 border px-4 py-3 text-ink placeholder:text-muted/70 focus:outline-none focus:border-accent transition";

const info = [
  { icon: FiMail, label: "Email", value: "salunkepankaj520@gmail.com", href: "mailto:salunkepankaj520@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+91 7447890852", href: "tel:+917447890852" },
  { icon: FiMapPin, label: "Location", value: "Pune, Maharashtra, India" },
];

const ContactMe = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_API_KEY }
      )
      .then(() => {
        toast.success("Message sent! I'll get back to you soon.");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Couldn't send the message. Please try again or email me directly.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have an opportunity or a project in mind? Send me a message."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2 space-y-4">
            {info.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="card p-5 flex items-center gap-4 hover:border-accent/60 transition duration-300"
                >
                  <span className="h-11 w-11 shrink-0 grid place-items-center rounded-xl text-white bg-gradient-to-br from-accent to-accent2">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block font-medium break-words">{value}</span>
                  </span>
                </Wrapper>
              );
            })}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/pankajsalunke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-11 w-11 grid place-items-center rounded-full card text-lg text-muted hover:text-accent2 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-salunke-3342b7203"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-11 w-11 grid place-items-center rounded-full card text-lg text-muted hover:text-accent2 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form ref={form} onSubmit={handleSubmit} className="card p-6 sm:p-8 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                autoComplete="name"
                className={inputClass}
                style={{ borderColor: "rgb(var(--line))" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                autoComplete="email"
                className={inputClass}
                style={{ borderColor: "rgb(var(--line))" }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number (optional)"
                autoComplete="tel"
                className={`${inputClass} sm:col-span-2`}
                style={{ borderColor: "rgb(var(--line))" }}
              />
              <textarea
                name="message"
                placeholder="Your message..."
                required
                rows={5}
                className={`${inputClass} sm:col-span-2 resize-none`}
                style={{ borderColor: "rgb(var(--line))" }}
              />
              <button
                type="submit"
                disabled={sending}
                className="btn-primary sm:col-span-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FiSend /> {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
