"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Editor-in-Chief",
    image: "/anger.jpg",
    bio: "With over 15 years of experience in architectural journalism, Sarah leads our editorial team in curating the finest architectural content.",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "/sad.jpg",
    bio: "Michael brings his expertise in visual storytelling to ensure our magazines are as visually striking as they are informative.",
  },
  {
    name: "Emma Rodriguez",
    role: "Content Director",
    image: "/joy.jpg",
    bio: "Emma oversees our content strategy, ensuring we deliver the most relevant and engaging architectural stories to our readers.",
  },
  {
    name: "Rodriguez",
    role: "Content Director",
    image: "/anxiety.jpg",
    bio: "Emma oversees our content strategy, ensuring we deliver the most relevant and engaging architectural stories to our readers.",
  },
  {
    name: "guez",
    role: "Content Director",
    image: "/disgust.jpg",
    bio: "Emma oversees our content strategy, ensuring we deliver the most relevant and engaging architectural stories to our readers.",
  },
];

const About = () => {
  const router = useRouter();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-8 text-gray-900">
              About Frontier
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              We&apos;re passionate about bringing the world&apos;s most
              innovative architectural designs to our readers. Our mission is to
              inspire, educate, and connect the global architectural community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Frontier, we believe that architecture has the power to
                  transform societies and shape the future. Our vision is to be
                  the leading platform for architectural innovation, bringing
                  together designers, thinkers, and enthusiasts from around the
                  world.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through our carefully curated magazines, we showcase
                  groundbreaking projects, emerging trends, and the stories
                  behind the world&apos;s most remarkable architectural
                  achievements.
                </p>
              </div>
              <a
                href="/contact"
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
              >
                Get in Touch
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/home.jpg"
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Team
              </h2>
              <p className="text-lg text-gray-600">
                We have background, proven track record and vision to succeed
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-28 h-28 mb-4 transform transition-transform duration-300 group-hover:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
