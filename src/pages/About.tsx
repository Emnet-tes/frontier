import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Editor-in-Chief",
    image: "/team1.jpg",
    bio: "With over 15 years of experience in architectural journalism, Sarah leads our editorial team in curating the finest architectural content.",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "/team2.jpg",
    bio: "Michael brings his expertise in visual storytelling to ensure our magazines are as visually striking as they are informative.",
  },
  {
    name: "Emma Rodriguez",
    role: "Content Director",
    image: "/team3.jpg",
    bio: "Emma oversees our content strategy, ensuring we deliver the most relevant and engaging architectural stories to our readers.",
  },
];

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">About Frontier</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're passionate about bringing the world's most innovative
              architectural designs to our readers. Our mission is to inspire,
              educate, and connect the global architectural community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                At Frontier, we believe that architecture has the power to
                transform societies and shape the future. Our vision is to be
                the leading platform for architectural innovation, bringing
                together designers, thinkers, and enthusiasts from around the
                world.
              </p>
              <p className="text-gray-600 text-lg">
                Through our carefully curated magazines, we showcase
                groundbreaking projects, emerging trends, and the stories behind
                the world's most remarkable architectural achievements.
              </p>
              <a
                href="/contact"
                onClick={handleContactClick}
                className="inline-flex items-center text-black hover:text-gray-700 group cursor-pointer"
              >
                Get in Touch
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-500 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
