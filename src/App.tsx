import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Contato from "./pages/Contato";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";

const queryClient = new QueryClient();
const TRACKING_ID = import.meta.env.VITE_GA_ID;
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TrackPageViews />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Servicos />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
