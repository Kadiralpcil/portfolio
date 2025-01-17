import Projects from "@/app/projects/page";
import { SoftwareLanguages } from "./SoftwareLanguages/softwareLanguages";

import { IoMdArrowRoundDown } from "react-icons/io";
import { useState } from "react";

const Content = () => {
  //States
  const [loading, setLoading] = useState(false);
  //Functions
  const handleDownload = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const downloadLink = document.createElement("a");
    downloadLink.href = "../../../AlpFrontEndDeveloper.pdf";
    downloadLink.setAttribute("download", "AlpFrontEndDeveloper.pdf");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    setLoading(false);
  };
  return (
    <div className="flex flex-col p-4 sm:pt-8 sm:pl-16 sm:justify-center ">
      <div className="flex items-center mb-4">
        <div className="text-headerTextHover font text-sm font-bold sm:text-lg">
          HELLO,
        </div>
        <div>👋</div>
        <div className="text-headerTextHover font text-sm font-bold sm:text-lg">
          MY NAME IS ALP
        </div>
      </div>
      <h1
        className="text-4xl xl:text-8xl xl:font-medium xl:mb-10 xl:mt-5 
            md:text-6xl md:mb-5 sm:text-4xl sm:mb-2"
      >
        Software Developer
      </h1>
      <p className="mb-6 text-lg font-light leading-7">
        I am a Software Developer with over 3 years of experience in Front-end
        Development 💻. Im also a Musician 🎸 and a Trader 📈.
      </p>
      <SoftwareLanguages />
      <div className="w-100 flex justify-center ">
        <div
          onClick={handleDownload}
          className="py-2 px-4 bg-blue-500 w-[20em] text-center rounded-lg font-semibold flex items-center justify-center gap-2
         text-white cursor-pointer hover:bg-blue-700 hover:transition-all hover:scale-105"
        >
          <div>Download Resume</div>
          <IoMdArrowRoundDown />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export { Content };
