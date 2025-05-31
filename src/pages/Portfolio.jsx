import React, { useState } from "react";
import resto from '../assets/Images/Resto.png';
import portfolio from '../assets/Images/portfolio.png';
import emp from '../assets/Images/Emp.png';
import admin from '../assets/Images/Admin.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory] = useState("Website Design");

  const portfolioItems = [
    {
      id: 1,
      title: "Restaurant Website",
      category: "Website Design",
      image: resto,
      link: 'https://restroruntweb.onrender.com/',
      code_link: 'https://github.com/pankajsalunke/restroruntweb',
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Website Design",
      image: portfolio,
      link: 'https://portfolio-1gxu.onrender.com',
      code_link: 'https://github.com/pankajsalunke/Portfolio',
    },
    {
      id: 3,
      title: "Employee Task Management (User)",
      category: "Website Design",
      image: emp,
      link: '',
      code_link: "https://github.com/pankajsalunke/employee-task-management-system",
    },
    {
      id: 4,
      title: "Employee Task Management (Admin)",
      category: "Website Design",
      image: admin,
      link: '',
      code_link: 'https://github.com/pankajsalunke/employee-task-management-system',
    },
  ];

  return (
    <div id="portfolio" className="bg-slate-900 text-white min-h-screen px-4 py-10">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">Portfolio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems
          .filter((item) => activeCategory === "All" || item.category === activeCategory)
          .map((item) => (
            <div
              key={item.id}
              className="relative bg-black rounded-lg overflow-hidden border border-gray-700 hover:border-orange-400 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-center opacity-80 hover:opacity-100 transition duration-300"
              />
              <div className="absolute bottom-0 w-full text-center p-4 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
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
