import { useState } from "react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import BusinessInfo from "@/components/onboarding/BusinessInfo";
import BusinessHours from "@/components/onboarding/BusinessHours";
import ServicesAndPricing from "@/components/onboarding/ServicesAndPricing";
import CalendarSetup from "@/components/onboarding/CalendarSetup";
import CommunicationPrefs from "@/components/onboarding/CommunicationPrefs";
import AITraining from "@/components/onboarding/AITraining";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  return (
    <OnboardingLayout step={step} totalSteps={totalSteps}>
      {step === 1 && <BusinessInfo onNext={() => setStep(2)} />}
      {step === 2 && <BusinessHours onNext={() => setStep(3)} />}
      {step === 3 && <ServicesAndPricing onNext={() => setStep(4)} />}
      {step === 4 && <CalendarSetup onNext={() => setStep(5)} />}
      {step === 5 && <CommunicationPrefs onNext={() => setStep(6)} />}
      {step === 6 && <AITraining />}
    </OnboardingLayout>
  );
}
