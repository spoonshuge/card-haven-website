
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBrowseClick: () => void;
}

const Hero = ({ onBrowseClick }: HeroProps) => {
  return (
    <section className="relative text-center py-32 rounded-2xl overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Enhanced overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-300"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in">
          spoonLabs{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-orange-400">
            .cards
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
          Discover rare and valuable trading cards from Pokemon, Magic: The Gathering, Yu-Gi-Oh!, and more. 
          Curated collection with authenticated conditions.
        </p>
        <Button 
          onClick={onBrowseClick}
          size="lg" 
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 border-2 border-green-400/50"
        >
          Browse Collection
        </Button>
      </div>
    </section>
  );
};

export default Hero;
