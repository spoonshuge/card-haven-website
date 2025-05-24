
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBrowseClick: () => void;
}

const Hero = ({ onBrowseClick }: HeroProps) => {
  return (
    <section className="relative text-center py-32 min-h-screen flex items-center justify-center">
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
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
