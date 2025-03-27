import { motion } from "framer-motion";
import React from "react";
import MagazineCard from "../components/MagazineCard";

const magazines = [
  {
    id: 1,
    title: "Modern Architecture",
    cover: "/magazine1.jpg",
    description: "Exploring contemporary architectural marvels",
    category: "Architecture",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Urban Design",
    cover: "/magazine2.jpg",
    description: "The future of city planning",
    category: "Urban Planning",
    date: "February 2024",
  },
  {
    id: 3,
    title: "Sustainable Living",
    cover: "/magazine3.jpg",
    description: "Eco-friendly architectural solutions",
    category: "Sustainability",
    date: "January 2024",
  },
  {
    id: 4,
    title: "Interior Spaces",
    cover: "/magazine4.jpg",
    description: "Innovative interior design trends",
    category: "Interior Design",
    date: "December 2023",
  },
  {
    id: 5,
    title: "Landscape Design",
    cover: "/magazine5.jpg",
    description: "Modern landscape architecture",
    category: "Landscape",
    date: "November 2023",
  },
  {
    id: 6,
    title: "Heritage Buildings",
    cover: "/magazine6.jpg",
    description: "Preserving architectural history",
    category: "Heritage",
    date: "October 2023",
  },
];

const Magazines = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Magazines</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium architectural magazines, each
            offering unique insights into the world of design and architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magazines.map((magazine) => (
            <MagazineCard key={magazine.id} {...magazine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazines;
