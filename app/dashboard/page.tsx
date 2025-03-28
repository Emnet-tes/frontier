'use client';
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const featuredMagazines = [
  {
    id: 1,
    title: "Modern Architecture",
    cover: "/magazine1.jpg",
    description: "Exploring contemporary architectural marvels",
  },
  {
    id: 2,
    title: "Urban Design",
    cover: "/magazine2.jpg",
    description: "The future of city planning",
  },
  {
    id: 3,
    title: "Sustainable Living",
    cover: "/magazine3.jpg",
    description: "Eco-friendly architectural solutions",
  },
];

export default function Dashboard(){
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/home.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-6xl font-bold mb-6">
              Discover the Future of Architecture
            </h1>
            <p className="text-xl mb-8">
              Explore the world&apos;s most innovative architectural designs and
              urban planning concepts through our curated collection of premium
              magazines.
            </p>
            <Link
              href="/magazines"
              className="inline-block bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Explore Magazines
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Magazines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">
            Featured Magazines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMagazines.map((magazine) => (
              <motion.div
                key={magazine.id}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[3/4] bg-gray-200">
                  <Image
                    src={magazine.cover}
                    alt={magazine.title}
                    className="w-full h-fit object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {magazine.title}
                    </h3>
                    <p className="mb-4">{magazine.description}</p>
                    <Link
                      href={`/magazineDetail/${magazine.id}`}
                      className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

