'use client';
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-black">
            Frontier
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/magazines"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Magazines
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-black transition-colors"
          >
            {isMenuOpen ? (
              <HiX size={24} />
            ) : (
              <HiMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-6 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100"
            >
              <div className="py-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/magazines"
                  className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Magazines
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
