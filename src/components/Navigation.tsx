
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
          
          {/* Page Title */}
          {pageTitle && (
            <div className="flex-1 text-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
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
