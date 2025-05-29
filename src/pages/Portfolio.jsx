import React, { useState } from "react";
import resto from '../assets/Images/Resto.png'
import portfolio from '../assets/Images/portfolio.png'
import emp from '../assets/Images/Emp.png'
import admin from '../assets/Images/Admin.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Website Design");

  // const categories = [
  //   "All",
  //   "Website Design",
  //   "Mobile App Design",
  //   "Dashboard Design",
  //   "Web App Design",
  // ];

  const portfolioItems = [
    {
      id: 1,
      title: "Restrorunt Design",
      category: "Website Design",
      image: resto,
      link: 'https://restroruntweb.onrender.com/',
      code_link: 'https://github.com/pankajsalunke/restroruntweb'
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Website Design",
      image: portfolio,
      link: '',
      code_link: ''
    },
    {
      id: 3,
      title: "Task Management Website",
      category: "Website Design",
      image: emp,
      link: '',
      code_link: "https://github.com/pankajsalunke/employee-task-management-system"
    },
    {
      id: 4,
      title: "Task Management Website",
      category: "Website Design",
      image: admin,
      link: '',
      code_link: 'https://github.com/pankajsalunke/employee-task-management-system'
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-slate-900 text-white min-h-screen p-6"
    >
      <h2 className="text-5xl font-bold text-white mb-12 text-center">Portfolio</h2>
      {/* 
      <div className="flex justify-center mt-6 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-8">
        {portfolioItems
          .filter(
            (item) =>
              activeCategory === "All" || item.category === activeCategory
          )
          .map((item) => (
            <div
              key={item.id}
              className="relative bg-black rounded-lg overflow-hidden border hover:border-red-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full  object-center h-[300px] opacity-80 hover:opacity-100  transition duration-300"
              />
              <div className="absolute bottom-0 w-full text-center p-3 bg-gray-900 bg-opacity-70">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.category}</p>
                <div className="flex justify-between pl-3 pr-3">
                  <p className="text-sm text-gray-300 cursor-pointer"><Link to={item.link} target="_blank">View Preview</Link></p>
                  <p className="text-sm text-gray-300 cursor-pointer"><Link to={item.code_link} target="_blank">View Code</Link></p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
