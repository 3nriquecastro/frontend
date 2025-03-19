import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  MessageSquare,
  Brain,
  Clock,
  CheckCircle,
  User,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Autonomous Agent",
    description:
      "Enthos works 24/7 handling appointments, inquiries, and follow-ups without human intervention.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Automatically manages your calendar, optimizes appointment times, and reduces no-shows.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Communication",
    description:
      "Handles conversations across WhatsApp, SMS, email, and more with natural language.",
  },
  {
    icon: Brain,
    title: "Business Intelligence",
    description:
      "Learns your business rules and provides insights to help you grow and improve.",
  },
  {
    icon: Shield,
    title: "Client Relationship Management",
    description:
      "Maintains detailed client profiles and personalizes every interaction.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description:
      "Responds to client inquiries in seconds, any time of day or night.",
  },
];

export default function Features2() {
  return (
    <div className="py-24 bg-white relative overflow-hidden" id="features">
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
            AI That Works For Your Business
          </motion.h2>
          <motion.p
            className="text-xl text-[#4B5563]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enthos handles routine tasks so you can focus on growth
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-gray-200 bg-[#E6F3F7] shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
                <feature.icon className="w-6 h-6 text-[#1F2937]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#4B5563]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Industry Customization Highlight */}
        <motion.div
          className="mt-16 p-8 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#E6F3F7] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Sparkles className="w-8 h-8 text-[#1F2937]" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1F2937] mb-2">
                Customized For Your Industry
              </h3>
              <p className="text-[#4B5563]">
                Whether you run a medical practice, salon, or service business,
                Enthos adapts to your specific needs and workflows. Our AI
                learns your business rules and communicates in your brand voice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
