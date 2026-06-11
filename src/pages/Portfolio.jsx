import {useState} from "react";
import ImageCarousel from "../components/ImageCarousel";
import resto from "../assets/Images/Resto.png";
import portfolio from "../assets/Images/portfolio.png";
import emp from "../assets/Images/Emp.png";
import admin from "../assets/Images/Admin.png";
import E_commerce from "../assets/Images/E-Commerce.png";
import homePage from "../assets/Images/HOME_PAGE.png";
import roomPage from "../assets/Images/ROOM_PAGE.png";

const Portfolio = () => {
  const [activeCategory] = useState("Website Design");

  const portfolioItems = [
    {
      id: 1,
      title: "Restaurant Website",
      category: "Website Design",
      images: [resto],
      link: "https://restroruntweb.onrender.com/",
      code_link: "https://github.com/pankajsalunke/restroruntweb",
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Website Design",
      images: [portfolio],
      link: "https://portfolio-1-hh2f.onrender.com/",
      code_link: "https://github.com/pankajsalunke/Portfolio",
    },
    {
      id: 3,
      title: "Employee Task Management (User)",
      category: "Website Design",
      images: [emp],
      link: "https://employee-task-management-pearl.vercel.app/",
      code_link:
        "https://github.com/pankajsalunke/employee_task_management/tree/main/backend",
    },
    {
      id: 4,
      title: "Employee Task Management (Admin)",
      category: "Website Design",
      images: [admin],
      link: "https://employee-task-management-pearl.vercel.app/admin-login",
      code_link:
        "https://github.com/pankajsalunke/employee_task_management/tree/main/frontend",
    },
    {
      id: 5,
      title: "E-commerce page",
      category: "Website Design",
      images: [E_commerce],
      link: "https://e-commerce-l88d.onrender.com/",
      code_link: "https://github.com/pankajsalunke/E-Commerce",
    },
    {
      id: 6,
      title: "Room Booking Application",
      category: "Website Design",
      images: [homePage, roomPage],
      link: null,
      code_link: "https://github.com/pankajsalunke/RoomBokinng-Application",
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-slate-900 text-white min-h-screen px-4 py-10"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems
          .filter(
            (item) =>
              activeCategory === "All" || item.category === activeCategory,
          )
          .map((item) => (
            <div
              key={item.id}
              className="relative bg-black rounded-lg overflow-hidden border border-gray-700 hover:border-orange-400 transition"
            >
              <ImageCarousel
                images={item.images}
                title={item.title}
              />
              <div className="absolute bottom-0 w-full text-center p-4 bg-gray-900 bg-opacity-80 ">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-orange-400">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      View Preview
                    </a>
                  )}
                  {item.code_link && (
                    <a
                      href={item.code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
