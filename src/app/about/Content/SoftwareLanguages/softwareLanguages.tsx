import React from "react";
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

interface imgArray {
  id: number;
  img: StaticImageData;
  alt: string;
}
const imgArray = [
  { id: 1, img: ReactImg, alt: "React.js" },
  { id: 2, img: NextImg, alt: "Next.js" },
  { id: 3, img: JavaScriptIMg, alt: "JavaScript" },
  { id: 4, img: TypeScriptImg, alt: "TypeScript" },
  { id: 5, img: TailwindImg, alt: "Tailwind" },
  { id: 6, img: BootstrapImg, alt: "Bootstrap" },
  { id: 7, img: CssImg, alt: "CSS" },
  { id: 8, img: CImg, alt: "C#" },
  { id: 9, img: SqlImg, alt: "SQL" },
  { id: 10, img: SassImg, alt: "Sass" },
];
const LoopedImgArray: imgArray[] = [];

for (let i = 0; i < 10; i++) {
  imgArray.map((item) => {
    LoopedImgArray.push(item);
  });
}
const SoftwareLanguages = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center max-h-[150px] rounded ">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrolling-wrapper {
          display: flex;
          animation: scroll 200s linear infinite;
        }

        .scrolling-wrapper-inner {
          display: flex;
        }
      `}</style>
      <div className="scrolling-wrapper">
        <div className="scrolling-wrapper-inner">
          {LoopedImgArray.concat(LoopedImgArray).map((imgItem, index) => (
            <div key={index} className="w-40 h-24 mx-2 relative flex-shrink-0">
              <div className="relative flex justify-center items-center h-full">
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">
                    {imgItem.alt}
                  </span>
                </div>
                <Image
                  src={imgItem.img}
                  alt={imgItem.alt}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SoftwareLanguages };
