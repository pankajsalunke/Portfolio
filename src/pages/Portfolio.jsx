import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMaximize2 } from "react-icons/fi";
import ImageCarousel from "../components/ImageCarousel";
import ProjectModal from "../components/ProjectModal";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import resto from "../assets/Images/Resto.png";
import portfolio from "../assets/Images/portfolio.png";
import emp from "../assets/Images/Emp.png";
import admin from "../assets/Images/Admin.png";
import E_commerce from "../assets/Images/E-Commerce.png";
import homePage from "../assets/Images/HOME_PAGE.png";
import roomPage from "../assets/Images/ROOM_PAGE.png";

// To add a project: copy one object below and edit it.
// category must be "Full Stack" or "Frontend" (used by the filter buttons).
const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    category: "Full Stack",
    images: [],
    description:
      "Company project at PJSofttech: the frontend of an inventory management system with order, product type, sub category and attribute modules.",
    highlights: [
      "Order management module with filtering and status handling to track orders through their stages.",
      "Product type, sub category and attribute pages with server-side pagination for large data sets.",
      "Reusable paginated tables, forms and modals shared across modules.",
      "REST API integration with a Java/MySQL backend using React Query for fetching and cache refresh.",
    ],
    tags: ["React", "React Query", "Tailwind CSS", "Java", "MySQL"],
    links: [],
  },
  {
    id: 2,
    title: "Room Booking Application",
    category: "Full Stack",
    images: [homePage, roomPage],
    description:
      "Full-stack room rental platform where owners list rooms and seekers browse them, with role-based access for owners, seekers and admins.",
    highlights: [
      "JWT authentication with bcrypt hashing, separate user/admin middleware and blocked-account checks.",
      "Multi-image upload to Cloudinary, city search, rent sorting, pagination and a details page.",
      "Interest-request workflow (send, accept, reject, cancel) with duplicate and own-room protection.",
      "Admin dashboard with stats, user/room search, block/unblock and close/delete.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS"],
    links: [
      {
        type: "code",
        label: "View Code",
        href: "https://github.com/pankajsalunke/RoomBokinng-Application",
      },
    ],
  },
  {
    id: 3,
    title: "Employee Task Management",
    category: "Full Stack",
    images: [emp, admin],
    description:
      "Task management system where admins assign tasks to employees and track their progress, with separate admin and employee dashboards.",
    highlights: [
      "Separate registration, login and JWT-protected routes for admins and employees.",
      "Admins assign tasks by employee email; employees accept, reject, complete or fail them.",
      "Server-side rules for valid status changes.",
      "Dashboards with task statistics and protected routes using React Router.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Context API", "Tailwind CSS"],
    links: [
      {
        type: "live",
        label: "Live Demo",
        href: "https://employee-task-management-pearl.vercel.app/",
      },
      {
        type: "live",
        label: "Admin Login",
        href: "https://employee-task-management-pearl.vercel.app/admin-login",
      },
      {
        type: "code",
        label: "View Code",
        href: "https://github.com/pankajsalunke/employee_task_management",
      },
    ],
  },
  {
    id: 4,
    title: "E-commerce Website",
    category: "Frontend",
    images: [E_commerce],
    description: "Responsive e-commerce storefront with product browsing.",
    highlights: [],
    tags: ["React", "Tailwind CSS"],
    links: [
      { type: "live", label: "Live Demo", href: "https://e-commerce-l88d.onrender.com/" },
      { type: "code", label: "View Code", href: "https://github.com/pankajsalunke/E-Commerce" },
    ],
  },
  {
    id: 5,
    title: "Restaurant Website",
    category: "Frontend",
    images: [resto],
    description: "Responsive restaurant website with menu and contact sections.",
    highlights: [],
    tags: ["React", "Tailwind CSS"],
    links: [
      { type: "live", label: "Live Demo", href: "https://restroruntweb.onrender.com/" },
      { type: "code", label: "View Code", href: "https://github.com/pankajsalunke/restroruntweb" },
    ],
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Frontend",
    images: [portfolio],
    description:
      "This portfolio: a responsive single-page site with typing animation, smooth scrolling, project showcase and a working EmailJS contact form.",
    highlights: [],
    tags: ["React", "Tailwind CSS", "EmailJS", "Framer Motion"],
    links: [
      { type: "live", label: "Live Demo", href: "https://portfolio-1-hh2f.onrender.com/" },
      { type: "code", label: "View Code", href: "https://github.com/pankajsalunke/Portfolio" },
    ],
  },
];

const filters = ["All", "Full Stack", "Frontend"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="portfolio" className="section bg-surface/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Click any project to see details, tech used and links."
        />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full px-5 py-2 text-sm font-medium border transition duration-300 ${
                  filter === f
                    ? "text-white border-transparent bg-gradient-to-r from-accent to-accent2"
                    : "text-muted hover:text-ink hover:border-accent/60"
                }`}
                style={filter === f ? undefined : { borderColor: "rgb(var(--line))" }}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelected(p)}
                onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
                tabIndex={0}
                role="button"
                aria-label={`Open details for ${p.title}`}
                className="group card overflow-hidden cursor-pointer flex flex-col hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 transition duration-300"
              >
                <div className="relative">
                  {p.images.length > 0 ? (
                    <ImageCarousel images={p.images} title={p.title} className="h-48" />
                  ) : (
                    <div className="h-48 grid place-items-center bg-gradient-to-br from-accent/30 to-accent2/30 px-6 text-center font-display text-xl font-bold">
                      {p.title}
                    </div>
                  )}
                  <span className="absolute top-3 right-3 h-8 w-8 grid place-items-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition">
                    <FiMaximize2 size={14} />
                  </span>
                </div>

                <div className="p-5 flex flex-col grow">
                  <p className="text-accent2 text-xs font-semibold uppercase tracking-widest">
                    {p.category}
                  </p>
                  <h3 className="font-display text-lg font-bold mt-1">{p.title}</h3>
                  <p className="text-sm text-muted mt-2 line-clamp-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-auto">
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 4 && (
                      <span className="chip">+{p.tags.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
