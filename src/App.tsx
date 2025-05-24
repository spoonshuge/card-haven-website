
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen relative">
        {/* Hero image background that fits screen top to bottom */}
        <div 
          className="fixed inset-0 bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, transparent 40%, rgba(34, 197, 94, 0.3) 70%, rgba(34, 197, 94, 0.6) 100%),
              url('/lovable-uploads/38c50f42-6889-4324-bfaa-2414a23b8d92.png')
            `,
            backgroundSize: 'contain',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Green gradient fill for areas not covered by the image */}
        <div className="fixed inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-green-600/20 z-0" />
        
        {/* Global overlay for better content readability */}
        <div className="relative min-h-screen bg-black/20 backdrop-blur-[1px] z-10">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
