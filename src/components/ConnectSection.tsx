
import { Card } from "@/components/ui/card";
import { Mail, Instagram } from "lucide-react";

const ConnectSection = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center space-y-6">
      <div className="max-w-2xl mx-auto">
        <Card className="p-6 border-green-200/50 bg-white/80 backdrop-blur-sm shadow-lg">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <a href="mailto:daniel@spoonlabs.cards" className="flex items-center p-3 border border-green-200/50 rounded-lg hover:bg-green-50/80 transition-colors bg-white/70">
              <Mail className="w-6 h-6 text-green-600 mr-3" />
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-gray-600 text-sm">daniel@spoonlabs.cards</p>
              </div>
            </a>

            <a href="https://instagram.com/spoonlabs" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border border-green-200/50 rounded-lg hover:bg-green-50/80 transition-colors bg-white/70">
              <Instagram className="w-6 h-6 text-pink-600 mr-3" />
              <div>
                <h3 className="font-semibold text-sm">Instagram</h3>
                <p className="text-gray-600 text-sm">@spoonlabs</p>
              </div>
            </a>
          </div>

          <div className="p-4 bg-green-50/80 rounded-lg border border-green-200/50">
            <h3 className="font-semibold text-green-900 mb-1 text-sm">Show Times</h3>
            <p className="text-green-800 text-sm">Tuesday: 10 - ?pm EST</p>
            <p className="text-green-800 text-sm">Friday: 10 - ?pm EST</p>
            <p className="text-green-800 text-sm">Sunday: Golf</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConnectSection;
