
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBrowseClick: () => void;
}

const Hero = ({ onBrowseClick }: HeroProps) => {
  return (
    <section className="relative text-center py-8 md:py-32 min-h-[calc(100vh-64px)] md:min-h-screen flex items-center justify-center -mt-8 md:mt-0">
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 opacity-40">
        {/* Original particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
        
        {/* Additional particles */}
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-5/6 left-1/6 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-800"></div>
        <div className="absolute bottom-1/6 right-1/5 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-600"></div>
        <div className="absolute top-1/5 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 right-2/3 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-bounce delay-400"></div>
        <div className="absolute top-4/5 right-1/2 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse delay-900"></div>
        <div className="absolute top-1/8 left-1/8 w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-1100"></div>
        <div className="absolute bottom-1/5 left-2/3 w-1 h-1 bg-violet-400 rounded-full animate-pulse delay-1400"></div>
        <div className="absolute top-3/5 right-1/8 w-2.5 h-2.5 bg-amber-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-2/5 left-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-1300"></div>
        <div className="absolute top-7/8 left-3/5 w-2 h-2 bg-sky-400 rounded-full animate-bounce delay-800"></div>
        <div className="absolute top-1/12 right-3/4 w-1 h-1 bg-orange-300 rounded-full animate-pulse delay-600"></div>
        <div className="absolute bottom-1/8 right-1/4 w-2.5 h-2.5 bg-green-500 rounded-full animate-bounce delay-1600"></div>
        <div className="absolute top-5/8 left-1/6 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-200"></div>
      </div>
      
      {/* Content centered in screen */}
      <div className="relative container mx-auto px-6 z-10 flex flex-col items-center justify-center">
        <Button 
          onClick={onBrowseClick}
          size="lg" 
          className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 hover:from-green-500 hover:via-blue-500 hover:to-orange-500 text-white px-12 py-6 text-xl shadow-2xl transition-all duration-300 transform hover:scale-110 border-2 border-white/20"
        >
          See the Goods
        </Button>
      </div>
    </section>
  );
};

export default Hero;
