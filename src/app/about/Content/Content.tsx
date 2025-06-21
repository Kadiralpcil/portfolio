import Projects from "@/app/projects/page";
import { SoftwareLanguages } from "./SoftwareLanguages/softwareLanguages";
import { IoMdArrowRoundDown } from "react-icons/io";
import { useState } from "react";

const Content = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    if (loading) return;
    
    setLoading(true);
    const downloadLink = document.createElement("a");
    downloadLink.href = "../../../AlpFrontEndDeveloper.pdf";
    downloadLink.setAttribute("download", "AlpFrontEndDeveloper.pdf");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen  relative overflow-hidden">
      <div className="relative z-10 flex flex-col p-6 sm:pt-16 sm:pl-20 sm:pr-8 max-w-7xl mx-auto">
        {/* Karşılama bölümü */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center mb-6 space-x-2 animate-fade-in">
            <div className="px-3 py-1 bg-blue-400  text-white text-sm font-bold rounded-full shadow-lg">
              HELLO
            </div>
            <div className="text-2xl animate-wave">👋</div>
            <div className="text-slate-700 text-sm font-medium tracking-wide">
              MY NAME IS ALP
            </div>
          </div>

          {/* Ana başlık */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight mb-4 animate-slide-up">
              Software Developer
            </h1>
            <div className="w-24 h-1  to-purple-600 rounded-full animate-expand"></div>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 animate-fade-in-delay">
              I am a passionate{" "}
              <span className="font-semibold text-blue-600">Software Developer</span>{" "}
              with over 4  years of experience in{" "}
              <span className="font-semibold text-purple-600">Front-end Development</span>{" "}
              💻. I'm also a{" "}
              <span className="font-semibold text-green-600">Musician</span> 🎸 and{" "}
              <span className="font-semibold text-orange-600">Trader</span> 📈.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-16 animate-fade-in-delay-3">
          <button
            onClick={handleDownload}
            disabled={loading}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-w-[280px] overflow-hidden"
          >
            
            
            <div className="relative flex items-center justify-center space-x-3">
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <span>Download Resume</span>
                  <IoMdArrowRoundDown className="text-xl group-hover:animate-bounce" />
                </>
              )}
            </div>

          </button>
        </div>

        <div className="mb-12 animate-fade-in-delay-2">
          <SoftwareLanguages />
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg); }
          20%, 40%, 60%, 80% { transform: rotate(10deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s both;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export { Content };