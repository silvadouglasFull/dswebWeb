import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import Contato from "./pages/Contato";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";

const queryClient = new QueryClient();
const TRACKING_ID = import.meta.env.VITE_GA_ID;

if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

const AppNavigationTracker = () => {
  const location = useLocation();

  useScrollToTop();

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
      <HashRouter>
        <AppNavigationTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;