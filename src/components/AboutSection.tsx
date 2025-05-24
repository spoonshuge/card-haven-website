
import { Search, Filter, ExternalLink } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Search,
      title: "Authenticated Cards",
      description: "Every card is verified for authenticity and condition",
      color: "green"
    },
    {
      icon: Filter,
      title: "Rare Finds",
      description: "Specializing in hard-to-find and vintage cards",
      color: "blue"
    },
    {
      icon: ExternalLink,
      title: "Expert Service",
      description: "Personalized assistance for collectors of all levels",
      color: "orange"
    }
  ];

  return (
    <section className="py-12 bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-lg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          About spoonLabs
        </h2>
        <p className="text-base text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Look it seems to me that no one really has a clue and we are all just winging it. Come see how
          I wing. Child of the JunkWax era and loved it. I still think about the Greg Maddux Upper Deck Spx,
          it came out of a box Dad bought for Christmas. 

          Late 2024 I caugh the bug, bought way to much wax and set more money on fire with breaks. I have been trying
          to figure out the "right" way to participate in collecting ever sense. 

          I have bought a ton more, or course. On the other hand, I have sold across several platforms, a trade night,
          and set up at a show.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-14 h-14 bg-gradient-to-br ${
                feature.color === 'green' ? 'from-green-400 to-green-600' :
                feature.color === 'blue' ? 'from-blue-400 to-blue-600' :
                'from-orange-400 to-orange-600'
              } rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
