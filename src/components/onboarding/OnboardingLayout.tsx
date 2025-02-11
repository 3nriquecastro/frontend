import { Progress } from "@/components/ui/progress";

export default function OnboardingLayout({
  children,
  step,
  totalSteps,
}: {
  children: React.ReactNode;
  step: number;
  totalSteps: number;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl space-y-8">
        <Progress value={(step / totalSteps) * 100} className="w-full" />
        {children}
      </div>
    </div>
  );
}
