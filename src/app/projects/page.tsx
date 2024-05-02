import React from "react";
import { PageTitle } from "@/components";
import Image from "next/image";
import rickandmortyImg from "../../../public/rickandmorty.jpg"
import nothingatall from "../../../public/nothing.jpg"

export default function Projects() {
  const ProjectArray = [
    {
      id: 1,
      name: "Rick and Morty Search Box",
      languages: ["React.js", "TypeScript", "Tailwind"],
      img: rickandmortyImg,
      url: "https://rick-and-morty-search-box.vercel.app/"
    },
    {
      id: 2,
      name: "Todo App",
      languages: ["Next.js", "Next Api", "MongoDb", "Tailwind", "JWT"],
      img: nothingatall,
      url: "https://todo-app-nine-dusky-49.vercel.app/login"
    },
  ];

  return (
    <div className="p-5 mb-32 px-20">
      <PageTitle name="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-5">
        {ProjectArray.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-lg p-4 relative overflow-hidden transition duration-300 ease-in-out transform hover:shadow-lg"
          >
            <Image
              width={800}
              height={800}
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <div className="flex flex-wrap mb-2">
              {project.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-full mr-2 mb-2"
                >
                  {language}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-800"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
