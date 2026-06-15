import React, { useEffect, useState } from "react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const Show: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#05070A] py-24">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.03) 3px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-[#67C24A]" />

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            <span className="text-white">Find the</span>{" "}
            <span className="text-[#67C24A]">Flavor</span>{" "}
            <span className="text-white">You Love</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-400">
            Crafted with bold ingredients, rich tradition, and unforgettable
            taste. Every dish is made to bring people together through flavor.
          </p>
        </div>

        {/* SLIDESHOW */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B1118] shadow-2xl">
          <div className="relative h-[450px] md:h-[550px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#67C24A]"
                    : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#67C24A]/40 to-transparent" />

    </section>
  );
};

export default Show;