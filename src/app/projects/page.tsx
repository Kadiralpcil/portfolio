"use client"
import React, { useState, useEffect } from "react";
import { PageTitle } from "@/components";
import Image from "next/image";
import rickandmortyImg from "../../../public/rickandmorty.jpg";
import nothingatall from "../../../public/nothing.jpg";
import dogeCoin from "../../../public/dogecoin.jpg";
import userList from "../../../public/userList.jpg";
import starWars from "../../../public/starwars.png";
import otp1 from "../../../public/otp1.png";
import otp2 from "../../../public/otp2.png";
import ackMrpi from "../../../public/ackMrpi.png";
import identity from "../../../public/identity/identity.png";
import Qc from "../../../public/qc/dashboard.png";
import foodMenu1 from "../../../public/foodmenu/foodmenu1.png";
import foodMenu2 from "../../../public/foodmenu/foodmenu2.png";
import foodMenu3 from "../../../public/foodmenu/foodmenu3.png";
import inspection from "../../../public/inspection/inspectionDashboard.png";
import marsanMrpi from "../../../public/marsanMRPI/marsanMrpiDashboard.png";
import ticketSystem from "../../../public/ticket/ticket-dasboard.png";
import newTicket from "../../../public/ticket/new-ticket.png";
import { Project } from "@/types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject !== null) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Technology color mapping
  const getTechColor = (tech: string) => {
    const techColors: { [key: string]: string } = {
      // Frontend Frameworks
      "React.js": "bg-cyan-500 text-white",
      "Next.js": "bg-black text-white",
      "TypeScript": "bg-blue-600 text-white",
      "React Native": "bg-cyan-600 text-white",
      "Expo": "bg-gray-800 text-white",
      
      // UI Libraries
      "Tailwind": "bg-teal-500 text-white",
      "Material UI": "bg-blue-700 text-white",
      "PrimeReact": "bg-orange-500 text-white",
      "DevExtreme": "bg-purple-600 text-white",
      "NEXT UI": "bg-gray-800 text-white",
      "Bootstrap": "bg-purple-500 text-white",
      "React-Native-Paper": "bg-indigo-600 text-white",
      
      // State Management
      "RTK Query": "bg-red-600 text-white",
      
      // Backend & Database
      "Next Api": "bg-green-600 text-white",
      "MongoDb": "bg-green-500 text-white",
      "SQL": "bg-orange-600 text-dark",
      "C#": "bg-purple-700 text-white",
      
      // Authentication & APIs
      "JWT": "bg-red-500 text-white",
      "Next Auth": "bg-indigo-600 text-white",
      "GraphQL": "bg-pink-500 text-white",
      "Apollo Client": "bg-indigo-500 text-white",
      
      // Styling & Design
      "CSS": "bg-blue-500 text-white",
      "Sass": "bg-pink-600 text-white",
      "Figma": "bg-gray-700 text-white",
      
      // Validation
      "Zod": "bg-blue-800 text-white",
    };
    
    return techColors[tech] || "bg-gray-200 text-gray-700";
  };

  // No Image Placeholder Component
  const NoImagePlaceholder = ({ category, name }: { category: string, name: string }) => {
    const getCategoryIcon = (category: string) => {
      switch (category.toLowerCase()) {
        case 'mobile application':
          return (
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
            </svg>
          );
        case 'erp development':
        case 'manufacturing erp':
        case 'system migration':
        case 'mrp system':
          return (
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          );
        case 'manufacturing tracking':
        case 'quality control':
          return (
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          );
        case 'workflow management':
          return (
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 00-2 2m-3 7h3m0 0h3m-3 0v3m0-3V9" />
            </svg>
          );
        case 'restaurant technology':
          return (
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          );
        default:
          return (
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          );
      }
    };

    return (
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center">
          {getCategoryIcon(category)}
          <p className="text-gray-500 text-sm mt-3 font-medium">No Preview Available</p>
          <p className="text-gray-400 text-xs mt-1">{category}</p>
        </div>
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-gray-400 rounded-full"></div>
          <div className="absolute top-8 right-8 w-4 h-4 border-2 border-gray-400 rotate-45"></div>
          <div className="absolute bottom-6 left-8 w-6 h-6 border-2 border-gray-400"></div>
          <div className="absolute bottom-4 right-6 w-5 h-5 border-2 border-gray-400 rounded-full"></div>
        </div>
      </div>
    );
  };

const companyProjects: Project[] = [
  {
    id: 0,
    name: "WORKBOOK TERMINAL",
    company: "ODAK INOVASYON",
    period: "Oct 2024 – Aug 2025",
    description: "A terminal application used in the warehouse section of the factory, including modules for shelf tracking, product entry/exit, waste management, and authorization.",
    languages: ["React Native", "Expo", "TypeScript", "React-Native-Paper"],
    images: [],
    responsibilities: "Developed simple and efficient interfaces to streamline warehouse product management processes, indirectly speeding up the shipping process.",
    category: "Mobile Application"
  },
  {
    id: 1,
    name: "WORKBOOK ERP System",
    company: "ODAK INOVASYON",
    period: "Oct 2024 – Aug 2025",
    description: "ERP system for multiple high-performance factories with integrated accounting, reporting, and notification features for both factory staff and management.",
    languages: ["Next.js", "React.js", "TypeScript", "DevExtreme"],
    images: [],
    responsibilities: "Designed user interfaces using DevExtreme components and delivered features to meet customer needs and simplify complex production processes.",
    category: "ERP Development"
  },
  {
    id: 2,
    name: "ENERJISA B2B REFACTORING",
    company: "ATOLLA TECH",
    period: "Aug 2024 – Oct 2024",
    description: "Refactored Enerjisa's B2B interface for customers with a fully responsive and accessible design.",
    languages: ["React.js", "TypeScript", "CSS", "Figma"],
    images: [otp1, otp2],
    responsibilities: "Translated Figma designs into pixel-perfect, responsive interfaces, improving performance and user experience.",
    category: "B2B Platform"
  },
  {
    id: 3,
    name: "FABRIC TRACE",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "An advanced system to track textile products' status, location, and processing times in real time.",
    languages: ["React.js", "TypeScript", "RTK Query", "Tailwind", "Material UI"],
    images: [],
    responsibilities: "Developed the front-end interface with real-time data visibility and seamless user interaction.",
    category: "Manufacturing Tracking"
  },
  {
    id: 4,
    name: "MRP-API System",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "Migration of a Windows Form-based MRP system to a modern web platform.",
    languages: ["React.js", "TypeScript", "RTK Query", "Tailwind", "PrimeReact", "DevExtreme"],
    images: [ackMrpi],
    responsibilities: "Implemented warehouse tracking, product quality control, pricing, and packaging workflows on the new platform.",
    category: "System Migration"
  },
  {
    id: 5,
    name: "IDENTITY Management",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "Comprehensive web application for managing roles and permissions across multiple projects.",
    languages: ["React.js", "TypeScript", "RTK Query", "Tailwind", "PrimeReact"],
    images: [identity],
    responsibilities: "Developed a role and permission management system to ensure secure and efficient user access control.",
    category: "Security & Authorization"
  },
  {
    id: 6,
    name: "QUANTITY CONTROL",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "ERP system for international factories to monitor textile production, quality control, and employee performance.",
    languages: ["SQL", "React.js", "TypeScript", "C#", "Bootstrap", "RTK Query"],
    images: [Qc],
    responsibilities: "Built modules for production tracking, defect monitoring, and employee performance evaluation.",
    category: "Manufacturing ERP"
  },
  {
    id: 7,
    name: "FOOD MENU System",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "Interactive digital menu system for restaurants with an admin panel for menu management.",
    languages: ["React.js", "TypeScript", "Zod", "Tailwind", "NEXT UI"],
    images: [foodMenu1, foodMenu2, foodMenu3],
    responsibilities: "Developed the front-end and admin panel, enabling easy menu updates and a visually appealing user interface.",
    category: "Restaurant Technology"
  },
  {
    id: 8,
    name: "Inspection",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "A system integrated with Pivot 88 to monitor the status of products after the production process.",
    languages: ["React.js", "TypeScript", "Zod", "Tailwind", "NEXT UI"],
    images: [inspection],
    responsibilities: "Implemented interfaces for post-production product inspections and integrated data from Pivot 88.",
    category: "Quality Control"
  },
  {
    id: 9,
    name: "Marsan MRPI",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "A web-based MRP system tailored for Marsan to streamline manufacturing and resource planning processes.",
    languages: ["React.js", "TypeScript", "Tailwind", "PrimeReact"],
    images: [marsanMrpi],
    responsibilities: "Contributed to front-end development, focusing on usability and performance improvements.",
    category: "MRP System"
  },
  {
    id: 10,
    name: "Ticket System",
    company: "ACEKA HOLDING",
    period: "Aug 2022 – Aug 2024",
    description: "A request management system allowing users to create, track, close, and report project-related requests.",
    languages: ["React.js", "TypeScript", "Tailwind"],
    images: [ticketSystem, newTicket],
    responsibilities: "Developed the front-end, enabling request submission, tracking, and reporting functionalities.",
    category: "Workflow Management"
  }
];

  const personalProjects: Project[] = [
    {
      id: 8,
      name: "Rick and Morty Search",
      company: "Personal Project",
      period: "Personal",
      description: "Character search application using Rick and Morty API with filtering.",
      languages: ["React.js", "TypeScript", "Tailwind"],
      images: [rickandmortyImg],
      url: "https://rick-and-morty-search-box.vercel.app/",
      responsibilities: "Full-stack development",
      category: "API Integration"
    },
    {
      id: 9,
      name: "Todo App",
      company: "Personal Project",
      period: "Personal",
      description: "Full-stack todo application with JWT authentication and MongoDB.",
      languages: ["Next.js", "Next Api", "MongoDb", "Tailwind", "JWT", "TypeScript"],
      images: [nothingatall],
      url: "https://todo-app-nine-dusky-49.vercel.app/login",
      responsibilities: "Full-stack development with authentication",
      category: "Full-Stack"
    },
    {
      id: 10,
      name: "Coin Tracker",
      company: "Personal Project",
      period: "Personal",
      description: "Real-time cryptocurrency tracking with price alerts.",
      languages: ["Next.js", "Next UI", "Tailwind", "TypeScript"],
      images: [dogeCoin],
      url: "https://coin-tracker-wine.vercel.app/",
      responsibilities: "Front-end development with API integration",
      category: "FinTech"
    },
    {
      id: 11,
      name: "User List",
      company: "Personal Project",
      period: "Personal",
      description: "User management system with role-based authentication.",
      languages: ["Next.js", "Next Auth", "Tailwind", "TypeScript", "DevExtreme"],
      images: [userList],
      url: "https://user-list-git-main-kadir-alps-projects.vercel.app/login?callbackUrl=%2Fusers",
      responsibilities: "Authentication and user management",
      category: "Admin Panel"
    },
    {
      id: 12,
      name: "Star Wars Universe",
      company: "Personal Project",
      period: "Personal",
      description: "Star Wars characters explorer with GraphQL and animations.",
      languages: ["React.js", "Sass", "GraphQL", "Apollo Client"],
      images: [starWars],
      url: "https://star-wars-chars.vercel.app/",
      responsibilities: "GraphQL integration and character display",
      category: "Entertainment"
    }
  ];

  const allProjects = [...companyProjects, ...personalProjects];
  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = allProjects.find(p => p.id === selectedProject);
      if (project && currentImageIndex < project.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const ProjectCard = ({ project, isProfessional = true }: { project: Project, isProfessional?: boolean }) => (
    <div className="group">
      {/* Main Project Card */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Hero Image or Placeholder */}
        <div className="relative h-64 overflow-hidden">
          {project.images.length > 0 ? (
            <>
              <Image
                width={800}
                height={400}
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </>
          ) : (
            <NoImagePlaceholder category={project.category} name={project.name} />
          )}
          
          {/* Badges */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
              isProfessional 
                ? 'bg-blue-500 text-white' 
                : 'bg-purple-500 text-white'
            }`}>
              {isProfessional ? project.company : 'Personal'}
            </span>
          </div>
          
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.images.length > 0 
                ? 'bg-white/20 backdrop-blur-sm text-white' 
                : 'bg-gray-600 text-white'
            }`}>
              {project.category}
            </span>
          </div>

          {/* Image Count */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 right-4">
              <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {project.images.length} images
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{project.period}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">{project.description}</p>
            
            {/* Responsibilities Section */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Responsibilities
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed bg-gray-50 p-3 rounded-lg border-l-4 border-blue-200">
                {project.responsibilities}
              </p>
            </div>
          </div>

          {/* Tech Stack with Colors */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.languages.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 text-xs rounded-full font-semibold shadow-sm transition-transform hover:scale-105 ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.images.length > 0 ? (
              <button
                onClick={() => openProject(project.id)}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Gallery
              </button>
            ) : (
              <div className="flex-1 bg-gray-100 text-gray-400 py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 21l-2.72-2.72m0 0L12 21l-2.72-2.72m0 0L6 18l-2.72-2.72M4.636 4.636l2.728 2.728m0 0L12 3l2.72 2.72m0 0L18 6l2.72 2.72" />
                </svg>
                No Images
              </div>
            )}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const selectedProjectData = selectedProject ? allProjects.find(p => p.id === selectedProject) : null;

  return (
    <div className="min-h-screen p-5 pb-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <PageTitle name="Projects" />
        </div>

        {/* Professional Projects */}
        <section className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-500"></div>
              <h2 className="text-3xl font-bold text-gray-800 whitespace-nowrap">Professional Projects</h2>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {companyProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isProfessional={true} />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-500"></div>
              <h2 className="text-3xl font-bold text-gray-800 whitespace-nowrap">Personal Projects</h2>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isProfessional={false} />
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedProject && selectedProjectData && selectedProjectData.images.length > 0 && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            {/* Navigation */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
              <div className="text-white">
                <h3 className="text-2xl font-bold">{selectedProjectData.name}</h3>
                <p className="text-white/70">{selectedProjectData.company}</p>
              </div>
              
              <button
                onClick={closeProject}
                className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <div className="relative max-w-6xl max-h-[80vh] w-full flex items-center justify-center">
              <Image
                width={1400}
                height={800}
                src={selectedProjectData.images[currentImageIndex]}
                alt={`${selectedProjectData.name} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                priority
              />

              {/* Navigation Arrows */}
              {selectedProjectData.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 text-white p-4 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedProjectData.images.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 text-white p-4 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
              <div className="text-white/70 text-sm">
                {currentImageIndex + 1} of {selectedProjectData.images.length}
              </div>
              
              {selectedProjectData.url && (
                <a
                  href={selectedProjectData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  View Live Project
                </a>
              )}
            </div>

            {/* Thumbnails */}
            {selectedProjectData.images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProjectData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-10 rounded overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-white' : 'border-white/30'
                    }`}
                  >
                    <Image
                      width={64}
                      height={40}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}