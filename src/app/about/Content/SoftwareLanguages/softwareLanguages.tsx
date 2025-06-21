import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import ReactImg from "../../../../../public/React.png";
import NextImg from "../../../../../public/next.png";
import JavaScriptIMg from "../../../../../public/javaScript.png";
import TypeScriptImg from "../../../../../public/TypeScript.png";
import CImg from "../../../../../public/CSharp-removebg-preview (1).png";
import SqlImg from "../../../../../public/SQL-removebg-preview.png";
import TailwindImg from "../../../../../public/Tailwinddpng-removebg-preview.png";
import BootstrapImg from "../../../../../public/Bootstrap-removebg-preview.png";
import CssImg from "../../../../../public/CSS.png";
import SassImg from "../../../../../public/Sass.png";

interface ImgItem {
  id: number;
  img: StaticImageData;
  alt: string;
}

const techStack: ImgItem[] = [
  { id: 1, img: ReactImg, alt: "React.js" },
  { id: 2, img: NextImg, alt: "Next.js" },
  { id: 3, img: JavaScriptIMg, alt: "JavaScript" },
  { id: 4, img: TypeScriptImg, alt: "TypeScript" },
  { id: 5, img: TailwindImg, alt: "Tailwind CSS" },
  { id: 6, img: BootstrapImg, alt: "Bootstrap" },
  { id: 7, img: CssImg, alt: "CSS3" },
  { id: 8, img: CImg, alt: "C#" },
  { id: 9, img: SqlImg, alt: "SQL" },
  { id: 10, img: SassImg, alt: "Sass" },
];

// Sonsuz scroll için array'i genişlet
const createInfiniteArray = (array: ImgItem[], repetitions: number = 3) => {
  const result: ImgItem[] = [];
  for (let i = 0; i < repetitions; i++) {
    array.forEach((item, index) => {
      result.push({ ...item, id: item.id + (i * array.length) });
    });
  }
  return result;
};

const SoftwareLanguages = () => {
  const [isPaused, setIsPaused] = useState(false);
  const infiniteArray = createInfiniteArray(techStack);

  return (
    <div className="relative py-12 overflow-hidden">
      {/* Başlık */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
          Tech Stack & Skills
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Ana kaydırma konteyneri */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle fade efektleri */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Kaydırma wrapper'ı */}
        <div className="flex overflow-hidden py-4">
          <div 
            className={`flex animate-scroll-smooth ${isPaused ? 'animation-paused' : ''}`}
            style={{
              width: `${infiniteArray.length * 180}px`,
            }}
          >
            {infiniteArray.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-44 h-28 mx-2 group cursor-pointer"
              >
                <div className="relative h-full p-6 bg-gray-50 hover:bg-white rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-102 border border-transparent hover:border-gray-200 overflow-hidden">
                  
                  {/* Ana içerik */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    {/* Logo */}
                    <div className="relative w-10 h-10 mb-2 group-hover:scale-105 transition-transform duration-200">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        className="object-contain transition-all duration-200"
                        sizes="40px"
                      />
                    </div>

                    {/* İsim */}
                    <h3 className="text-xs font-medium text-slate-700 text-center group-hover:text-slate-900 transition-colors duration-200">
                      {item.alt}
                    </h3>
                  </div>

                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alt bilgi */}
      <div className="text-center mt-6">
        <p className="text-sm text-slate-500">
          Technologies I work with
        </p>
      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 50s linear infinite;
        }

        .animation-paused {
          animation-play-state: paused;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll-smooth {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export { SoftwareLanguages };