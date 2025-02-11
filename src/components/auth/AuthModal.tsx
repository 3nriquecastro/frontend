import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import { useSearchParams } from "react-router-dom";

export default function AuthModal() {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState<"signin" | "register">("signin");

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "signin" || mode === "register") {
      setMode(mode);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {mode === "signin" ? "Welcome back" : "Create an account"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {mode === "signin"
              ? "Enter your credentials to access your account"
              : "Start your journey with Enthos AI"}
          </p>
        </div>

        {mode === "signin" ? <SignInForm /> : <RegisterForm />}

        <div className="text-center text-sm">
          <button
            onClick={() => setMode(mode === "signin" ? "register" : "signin")}
            className="text-primary hover:underline"
          >
            {mode === "signin"
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </Card>
    </div>
  );
}
