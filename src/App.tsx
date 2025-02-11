import { Suspense, useEffect } from "react";
import {
  useRoutes,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Hero from "./components/landing/Hero";
import AuthModal from "./components/auth/AuthModal";
import Dashboard from "./pages/dashboard";
import Assistant from "./pages/assistant";
import Settings from "./pages/settings";
import Onboarding from "./pages/onboarding";
import routes from "tempo-routes";
import { getAuth } from "./lib/auth";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth();
    const publicPaths = ["/", "/auth"];

    if (!auth && !publicPaths.includes(location.pathname)) {
      navigate("/auth");
    }
  }, [location.pathname, navigate]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/auth" element={<AuthModal />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
