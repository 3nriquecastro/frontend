import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const automationSteps = [
  {
    icon: Calendar,
    title: "Appointment Received",
    description: "Client requests appointment",
    time: "10:30 AM",
  },
  {
    icon: Clock,
    title: "AI Processing",
    description: "Checking availability & preferences",
    time: "10:30 AM",
  },
  {
    icon: CheckCircle,
    title: "Confirmation Sent",
    description: "Appointment confirmed & reminders set",
    time: "10:31 AM",
  },
];

export default function AutomationDemo() {
  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <h3 className="font-medium">Automation Workflow</h3>
      </div>

      <div className="p-4">
        {automationSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.5 }}
            className="flex items-start gap-4 mb-6 last:mb-0"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <step.icon className="w-4 h-4 text-blue-500" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-white">{step.title}</h4>
                <span className="text-xs text-gray-400">{step.time}</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
