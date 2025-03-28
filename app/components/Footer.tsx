import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-2xl font-bold text-black">
              Frontier
            </Link>
            <p className="mt-4 text-gray-600">
              Discover the future of architecture through our curated collection
              of premium magazines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/magazines"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Magazines
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/magazines?category=modern"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Modern Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/magazines?category=urban"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Urban Design
                </Link>
              </li>
              <li>
                <Link
                  href="/magazines?category=sustainable"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Sustainable Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaFacebook  size= "1.5rem"  />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaTwitter size="1.5rem"/>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaInstagram size="1.5rem" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaLinkedin size="1.5rem" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Frontier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
