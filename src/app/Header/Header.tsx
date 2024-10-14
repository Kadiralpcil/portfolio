"use client";

//React
import { useState } from "react";

//Icons
import { FaFile } from "react-icons/fa";

//Components
import { AvatarImageBuilder } from "@/components/AvatarImageBuilder";

//Constants
import imgSrc from "../../../public/ProfilePicture.jpg";

const Header = () => {
  //States
  const [downloading, setDownloading] = useState(false);

  return (
    <nav className="bg-white w-full z-20 sticky">
      <div className="flex flex-wrap items-center  p-4">
        <div className="flex items-center space-x-3 flex-1">
          <AvatarImageBuilder imgSrc={imgSrc} name={"Kadir Alp Çil"} />
        </div>
      </div>
    </nav>
  );
};

export { Header };
