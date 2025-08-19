import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Domains from "./pages/Domains";
import VirtualMachines from "./pages/VirtualMachines";
import Web from "./pages/Web";
import Database from "./pages/Database";
import Email from "./pages/Email";
import Security from "./pages/Security";
import Storage from "./pages/Storage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/virtual-machines" element={<VirtualMachines />} />
          <Route path="/web" element={<Web />} />
          <Route path="/database" element={<Database />} />
          <Route path="/email" element={<Email />} />
          <Route path="/security" element={<Security />} />
          <Route path="/storage" element={<Storage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
