import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/photo7.webp",
   "/photo5.webp",
  "/photo9.webp",
];

export default function ImageSlider({className=''}) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={`${className} relative w-full h-90 md:h-150 mx-auto overflow-hidden shadow-lg`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer">
        <FaChevronLeft size={24} />
      </button>

      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full cursor-pointer">
        <FaChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-400"}`} />
        ))}
      </div> */}
    </div>
  );
}
