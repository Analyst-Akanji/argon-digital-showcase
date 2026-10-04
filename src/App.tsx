import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLeads from "./pages/AdminLeads.tsx";

// Lazy-loaded: these pages (and their CSS/fonts) only download when a
// visitor actually navigates to them, keeping the homepage's first load
// small — this matters a lot on 3G/4G.
const Portfolio = lazy(() => import("./pages/Portfolio.tsx"));
const Demos = lazy(() => import("./pages/Demos.tsx"));
const Terms = lazy(() => import("./pages/legal/Terms.tsx"));
const Privacy = lazy(() => import("./pages/legal/Privacy.tsx"));
const RefundPolicy = lazy(() => import("./pages/legal/RefundPolicy.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0F1419" }} />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin/leads" element={<AdminLeads />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
