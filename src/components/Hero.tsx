
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
      
      {/* Content floating above image */}
      <div className="relative container mx-auto px-6 z-10 flex flex-col items-center">
        {/* Black box around title that shrinks to fit */}
        <div className="inline-block bg-black/90 backdrop-blur-sm rounded-2xl p-8 mb-8 border-2 border-white shadow-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl animate-fade-in break-words">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-orange-400">
              spoonLabs.cards
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-orange-400">
            Discover rare and valuable trading cards from Pokemon, Magic: The Gathering, Yu-Gi-Oh!, and more. 
            Curated collection with authenticated conditions.
          </p>
        </div>
        
        {/* Button outside the box */}
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
