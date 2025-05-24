
import { Instagram, Twitter, Mail } from "lucide-react";
interface FooterProps {
  onSectionChange: (section: string) => void;
}
const Footer = ({
  onSectionChange
}: FooterProps) => {
  return <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 mt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(45deg, transparent 35%, rgba(16, 185, 129, 0.1) 35%, rgba(16, 185, 129, 0.1) 65%, transparent 65%),
                           linear-gradient(-45deg, transparent 35%, rgba(59, 130, 246, 0.1) 35%, rgba(59, 130, 246, 0.1) 65%, transparent 65%)`,
        backgroundSize: '60px 60px'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/8df2445d-7b6c-4df4-83b6-3e10d868151b.png" 
                alt="spoonLabs logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Your source for ramblings and gems.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => onSectionChange("inventory")} className="hover:text-green-400 transition-colors duration-300 hover:underline">
                  Browse Dimes
                </button>
              </li>
              <li>
                <button onClick={() => onSectionChange("blog")} className="hover:text-green-400 transition-colors duration-300 hover:underline">Read my Ramblings</button>
              </li>
              <li>
                <button onClick={() => onSectionChange("connect")} className="hover:text-green-400 transition-colors duration-300 hover:underline">
                  Reach Out
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 spoonLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
