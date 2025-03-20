import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$199",
    description: "Perfect for small businesses just getting started",
    features: [
      "AI Assistant (business hours)",
      "Appointment scheduling",
      "Email integration",
      "Basic client management",
      "5 hours of autonomous operation/day",
    ],
    popular: false,
    buttonText: "Join Waitlist",
  },
  {
    name: "Professional",
    price: "$399",
    description: "Ideal for growing businesses with regular clients",
    features: [
      "24/7 AI Assistant",
      "WhatsApp & SMS integration",
      "Advanced scheduling & reminders",
      "Client relationship management",
      "Unlimited autonomous operation",
      "Custom voice & personality",
    ],
    popular: true,
    buttonText: "Join Waitlist",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established businesses with complex needs",
    features: [
      "Everything in Professional",
      "Multiple location support",
      "Custom integrations",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "Priority support",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-[#E6F3F7] relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            className="text-4xl font-bold text-[#1F2937]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-[#4B5563]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that fits your business needs
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-lg border ${plan.popular ? "border-[#1F2937]" : "border-gray-200"} bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${plan.popular ? "md:-translate-y-2" : "hover:-translate-y-1"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-[#1F2937] text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-6 space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#1F2937]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#1F2937]">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-[#4B5563] ml-2">/month</span>
                    )}
                  </div>
                  <p className="text-[#4B5563] text-sm">{plan.description}</p>
                </div>

                {/* Feature List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[#1F2937] text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${plan.popular ? "bg-[#1F2937] hover:bg-[#374151] text-white font-medium" : "bg-white border-[#1F2937] text-[#1F2937] hover:bg-[#E6F3F7] font-medium"}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => navigate("/auth?mode=register")}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
