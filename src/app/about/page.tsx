"use client";

import { Content } from "@/app/about/Content/Content";
import Projects from "../projects/page";

export default function Home() {
  return (
    <div>
      <div className="sm:w-[90%] mr-auto ml-auto ">
        <Content />
        <Projects />
      </div>
    </div>
  );
}
