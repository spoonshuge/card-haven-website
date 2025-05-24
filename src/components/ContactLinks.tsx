
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Github, Phone, MapPin, Clock } from "lucide-react";

interface ContactLink {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
  color: string;
}

interface ContactLinksProps {
  email?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  phone?: string;
  address?: string;
}

const ContactLinks = ({ 
  email = "daniel@spoonlabs.cards",
  instagram = "spoonlabs",
  twitter = "spoonshuge",
  github = "spoonshuge",
  phone = "(555) 123-4567",
  address = "123 Collector's Lane, Card City, CC 12345"
}: ContactLinksProps) => {
  
  const contactLinks: ContactLink[] = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: `@${instagram}`,
      href: `https://instagram.com/${instagram}`,
      color: "text-pink-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: `@${twitter}`,
      href: `https://twitter.com/${twitter}`,
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: `@${github}`,
      href: `https://github.com/${github}`,
      color: "text-gray-700"
    }
  ];

  const businessInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      color: "text-green-600"
    },
    {
      icon: MapPin,
      label: "Address",
      value: address,
      color: "text-red-600"
    }
  ];

  const businessHours = [
    "Monday - Friday: 9am - 6pm EST",
    "Saturday: 10am - 4pm EST", 
    "Sunday: Closed"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Main Contact Methods */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-8">
          Contact me directly to inquire about specific cards, discuss pricing, or learn more about upcoming inventory.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <link.icon className={`w-8 h-8 ${link.color} mr-4 group-hover:scale-110 transition-transform`} />
              <div>
                <h3 className="font-semibold">{link.label}</h3>
                <p className="text-gray-600">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </Card>

      {/* Business Information */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2 text-blue-600" />
            Business Information
          </h3>
          <div className="space-y-4">
            {businessInfo.map((info) => (
              <div key={info.label} className="flex items-start">
                <info.icon className={`w-5 h-5 ${info.color} mr-3 mt-0.5`} />
                <div>
                  <h4 className="font-medium text-sm text-gray-700">{info.label}</h4>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Business Hours
          </h3>
          <div className="space-y-2">
            {businessHours.map((hours, index) => (
              <p key={index} className="text-gray-600">{hours}</p>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm font-medium">
              💡 Response Time: I typically respond to emails within 24 hours during business days.
            </p>
          </div>
        </Card>
      </div>

      {/* Call to Action */}
      <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Collecting?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking for a specific card, want to sell your collection, or need advice on grading, 
            I'm here to help. Let's discuss how I can assist with your collecting goals.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(`mailto:${email}?subject=Inquiry about Card Collection`, '_blank')}
          >
            Send Email Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ContactLinks;
