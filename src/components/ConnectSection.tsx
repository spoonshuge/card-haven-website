
import { Card } from "@/components/ui/card";
import { Mail, Instagram, Twitter, Github } from "lucide-react";

const ConnectSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-green-200/50 shadow-xl">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Connect With Me</h1>
        <p className="text-xl text-gray-700">Get in touch to discuss your collecting needs</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="p-8 border-green-200/50 bg-white/95 backdrop-blur-sm shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ready to add to your collection?</h2>
            <p className="text-gray-700 mb-6">
              Contact me directly to inquire about specific cards, discuss pricing, or learn more about upcoming inventory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:cards@example.com"
              className="flex items-center p-4 border border-green-200/50 rounded-lg hover:bg-green-50/80 transition-colors bg-white/80"
            >
              <Mail className="w-8 h-8 text-green-600 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">cards@example.com</p>
              </div>
            </a>

            <a
              href="https://instagram.com/spoonlabscollectibles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-green-200/50 rounded-lg hover:bg-green-50/80 transition-colors bg-white/80"
            >
              <Instagram className="w-8 h-8 text-pink-600 mr-4" />
              <div>
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-gray-600">@spoonlabscollectibles</p>
              </div>
            </a>

            <a
              href="https://twitter.com/spoonlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-green-200/50 rounded-lg hover:bg-green-50/80 transition-colors bg-white/80"
            >
              <Twitter className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="font-semibold">Twitter</h3>
                <p className="text-gray-600">@spoonlabs</p>
              </div>
            </a>

            <a
              href="https://github.com/spoonlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 border border-green-200/50 rounded-lg hover:bg-green-50/80 transition-colors bg-white/80"
            >
              <Github className="w-8 h-8 text-gray-700 mr-4" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-600">@spoonlabs</p>
              </div>
            </a>
          </div>

          <div className="mt-8 p-6 bg-green-50/90 rounded-lg border border-green-200/50">
            <h3 className="font-semibold text-green-900 mb-2">Business Hours</h3>
            <p className="text-green-800">Monday - Friday: 9am - 6pm EST</p>
            <p className="text-green-800">Saturday: 10am - 4pm EST</p>
            <p className="text-green-800">Sunday: Closed</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConnectSection;
