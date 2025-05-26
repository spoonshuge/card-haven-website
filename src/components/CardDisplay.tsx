
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SheetCard } from '@/utils/googleSheets';

interface CardDisplayProps {
  card: SheetCard;
  className?: string;
}

const CardDisplay = ({ card, className = "" }: CardDisplayProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={className}>
      {/* Card Image with Hover Effect */}
      <Dialog>
        <DialogTrigger asChild>
          <div 
            className="w-full cursor-pointer transition-transform duration-300 hover:scale-105"
            style={{ aspectRatio: '2/3', height: '200px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src={isHovered ? card.backImage : card.frontImage}
              alt={card.title}
              className="w-full h-full object-contain rounded-lg transition-opacity duration-300 border-2 border-gray-300 bg-white p-1"
              onError={(e) => {
                e.currentTarget.src = '/lovable-uploads/da796c7a-5329-4d08-ae52-f526dcbb271f.png';
              }}
            />
          </div>
        </DialogTrigger>
        
        {/* Full Size Modal */}
        <DialogContent className="max-w-4xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Front</h3>
              <img 
                src={card.frontImage}
                alt={`${card.title} - Front`}
                className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 bg-white p-2"
                onError={(e) => {
                  e.currentTarget.src = '/lovable-uploads/da796c7a-5329-4d08-ae52-f526dcbb271f.png';
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Back</h3>
              <img 
                src={card.backImage}
                alt={`${card.title} - Back`}
                className="w-full h-auto object-contain rounded-lg border-2 border-gray-300 bg-white p-2"
                onError={(e) => {
                  e.currentTarget.src = '/lovable-uploads/da796c7a-5329-4d08-ae52-f526dcbb271f.png';
                }}
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">{card.title}</h2>
            <div className="text-xl font-bold text-green-600 mt-2">{card.price}</div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Card Info */}
      <div className="mt-2 text-center">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{card.title}</h3>
        <div className="text-lg font-bold text-green-600 mt-1">{card.price}</div>
      </div>
    </div>
  );
};

export default CardDisplay;
