import React from "react";
import MagazineCard from "../components/MagazineCard";

interface Magazine {
  id: number;
  title: string;
  cover: string;
  description: string;
  category: string;
  date: string;
}

const Magazines: React.FC = () => {
  const magazines: Magazine[] = [
    {
      id: 1,
      title: "Modern Architecture",
      cover: "/magazine1.jpg",
      description: "Exploring the latest trends in modern architecture",
      category: "Architecture",
      date: "March 2024",
    },
    {
      id: 2,
      title: "Sustainable Design",
      cover: "/magazine2.jpg",
      description: "Green building practices and sustainable architecture",
      category: "Sustainability",
      date: "February 2024",
    },
    {
      id: 3,
      title: "Architectural Trends",
      cover: "/magazine3.jpg",
      description: "Exploring the latest trends in architectural design",
      category: "Architecture",
      date: "January 2024",
    },
    {
      id: 4,
      title: "Architectural Trends",
      cover: "/magazine4.jpg",
      description: "Exploring the latest trends in architectural design",
      category: "Architecture",
      date: "January 2024",
    },
    {
      id: 5,
      title: "Architectural Trends",
      cover: "/magazine5.jpg",
      description: "Exploring the latest trends in architectural design",
      category: "Architecture",
      date: "January 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mt-2 mb-4 text-gray-900">
            Our Magazines
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of architectural magazines,
            featuring innovative designs and inspiring stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {magazines.map((magazine) => (
            <MagazineCard key={magazine.id} {...magazine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magazines;
