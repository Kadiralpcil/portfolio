import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC tuşu ile kapatma
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Klavye navigation (sol/sağ ok tuşları)
  useEffect(() => {
    const handleKeyNav = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyNav);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyNav);
    };
  }, [isOpen, currentImageIndex]);

  if (!isOpen) return null;

  const nextImage = () => {
    if (currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Modal dışına tıklandığında kapatma
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Main Image with Zoom */}
        <div className="relative w-full h-full flex items-center justify-center">
          <TransformWrapper
            key={currentImageIndex} // Reset zoom when image changes
            initialScale={1}
            minScale={0.5}
            maxScale={3}
            centerOnInit={true}
            wheel={{
              step: 0.2
            }}
            doubleClick={{
              disabled: false,
              mode: "zoomIn",
              step: 0.7
            }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                {/* Zoom Controls */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  <button
                    onClick={() => zoomIn()}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                    title="Zoom In"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                    title="Zoom Out"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <button
                    onClick={() => resetTransform()}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                    title="Reset Zoom"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>

                <TransformComponent>
                  <Image
                    width={1200}
                    height={800}
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    className="rounded-lg shadow-2xl max-w-full max-h-[75vh] w-auto h-auto object-contain"
                    priority
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>

          {/* Navigation Arrows - sadece birden fazla resim varsa göster */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                disabled={currentImageIndex === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 backdrop-blur-sm z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                disabled={currentImageIndex === project.images.length - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 backdrop-blur-sm z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter - sadece birden fazla resim varsa göster */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          )}

          {/* Dots Indicator - sadece birden fazla resim varsa göster */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};