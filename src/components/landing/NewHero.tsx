import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Brain,
    title: "Smart Decisions",
    description: "AI that thinks and acts like your best employee",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Never miss a customer or opportunity",
  },
  {
    icon: TrendingUp,
    title: "Growth Focus",
    description: "Automate tasks and focus on scaling",
  },
];

export default function NewHero() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
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
    <div className="min-h-[90vh] bg-[#E6F3F7] text-[#1F2937] relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F29371a_1px,transparent_1px),linear-gradient(to_bottom,#1F29371a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#E6F3F7_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E6F3F7] via-white to-[#E6F3F7] opacity-50" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Main Headline and CTA */}
          <div className="text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#1F2937]">
                Your Business,
                <br />
                <span className="bg-gradient-to-r from-[#1F2937] to-[#4B5563] bg-clip-text text-transparent">
                  Powered by AI
                </span>
              </h1>
              <p className="text-xl text-[#4B5563] max-w-2xl mx-auto">
                Enthos is an AI assistant that manages your business operations
                24/7. Schedule appointments, handle customer service, and manage
                your team - all automatically.
              </p>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleWaitlistSubmit} className="relative">
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
                  </Button>
                </div>
                <p className="text-sm text-[#6B7280] mt-2">
                  Be the first to get access when we launch
                </p>
              </form>
            </motion.div>
          </div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[#1F2937]/30 transition-all duration-300"
              >
                <benefit.icon className="w-8 h-8 text-[#1F2937] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[#1F2937]">
                  {benefit.title}
                </h3>
                <p className="text-[#4B5563] text-sm">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Stats - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto text-center"
          >
            <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm space-y-2 hover:shadow-md transition-all duration-300">
              <h4 className="text-4xl font-bold text-[#1F2937]">95%</h4>
              <p className="text-[#4B5563]">Tasks Automated</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm space-y-2 hover:shadow-md transition-all duration-300">
              <h4 className="text-4xl font-bold text-[#1F2937]">24/7</h4>
              <p className="text-[#4B5563]">Availability</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm space-y-2 hover:shadow-md transition-all duration-300">
              <h4 className="text-4xl font-bold text-[#1F2937]">2hrs</h4>
              <p className="text-[#4B5563]">Daily Time Saved</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
