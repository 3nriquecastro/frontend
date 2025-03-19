import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Waitlist email submitted:", email);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F2937] text-[#1F2937]"
          />
          <Button
            type="submit"
            className="bg-[#1F2937] hover:bg-[#374151] text-white font-medium py-3 px-6"
          >
            {submitted ? "Added!" : "Join Waitlist"}
            {!submitted && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>
        <p className="text-sm text-[#6B7280] mt-2">
          Be the first to get access when we launch
        </p>
      </form>
    </div>
  );
}
