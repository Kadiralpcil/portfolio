import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  isProfessional?: boolean;
  onViewDetails: (project: Project) => void;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  isProfessional = true, 
  onViewDetails 
}) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full shadow-sm">
          {project.category}
        </span>
      </div>
      
      <div className="absolute top-3 right-3 z-10">
        <span className={`px-2 py-1 text-xs font-medium rounded-full shadow-sm ${
          isProfessional 
            ? 'bg-blue-500 text-white' 
            : 'bg-purple-500 text-white'
        }`}>
          {isProfessional ? project.company : 'Personal'}
        </span>
      </div>

      {/* Image */}
      <div 
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(project)}
      >
        <Image
          width={400}
          height={200}
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {project.images.length > 1 && (
          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            +{project.images.length - 1} more
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
          {project.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.languages.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.languages.length > 3 && (
            <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-md">
              +{project.languages.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">{project.period}</span>
          
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(project)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
            >
              Details
            </button>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors"
              >
                Live →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};