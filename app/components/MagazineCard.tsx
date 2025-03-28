"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface MagazineCardProps {
  id: number;
  title: string;
  cover: string;
  description: string;
  category: string;
  date: string;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  id,
  title,
  cover,
  description,
  category,
  date,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[380px] flex flex-col"
    >
      <Link href={`/magazineDetail/${id}`} className="flex flex-col h-full">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={cover}
            alt={title}
            width={100}
            height={100}
            className="w-full h-fit object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <FaArrowRight
              className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              size={20}
            />
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
              {category}
            </span>
            <span className="text-xs text-gray-500">{date.split(" ")[0]}</span>
          </div>
          <h3 className="text-base font-semibold mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default MagazineCard;
