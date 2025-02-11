import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Your Business, Alive with AI
        </h1>
        <p className="text-xl text-muted-foreground">
          Enthos brings autonomous AI assistance to transform how your business
          operates
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="px-8" onClick={() => navigate("/auth")}>
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={() => navigate("/auth?mode=signin")}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
