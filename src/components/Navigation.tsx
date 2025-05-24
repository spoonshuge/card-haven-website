
interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "inventory", label: "Goods" },
    { id: "blog", label: "Blog" },
    { id: "connect", label: "Reach Out" }
  ];

  const getPageTitle = () => {
    if (currentSection === "blog") return "Blog";
    if (currentSection === "connect") return "Reach Out";
    return null;
  };

  const pageTitle = getPageTitle();

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onSectionChange("home")}
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="/lovable-uploads/8df2445d-7b6c-4df4-83b6-3e10d868151b.png" 
              alt="spoonLabs logo" 
              className="h-10 w-auto"
            />
          </button>
          
          {/* Page Title - Centered with hero image */}
          {pageTitle && (
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-4xl font-black bg-gradient-to-r from-red-500 via-pink-500 via-yellow-400 via-green-400 via-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                  style={{
                    textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,0,255,0.3), 0 0 60px rgba(0,255,255,0.2), 0 0 80px rgba(255,255,0,0.1)',
                    fontFamily: 'Impact, Arial Black, sans-serif',
                    letterSpacing: '3px',
                    WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                    filter: 'brightness(120%) saturate(150%) contrast(110%)'
                  }}>
                {pageTitle}
              </h1>
            </div>
          )}
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`text-gray-300 hover:text-green-400 transition-all duration-300 relative ${
                  currentSection === item.id ? "text-green-400 font-semibold" : ""
                }`}
              >
                {item.label}
                {currentSection === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400 animate-scale-in"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <select
              value={currentSection}
              onChange={(e) => onSectionChange(e.target.value)}
              className="px-3 py-1 border border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 bg-gray-800 text-gray-300"
            >
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
