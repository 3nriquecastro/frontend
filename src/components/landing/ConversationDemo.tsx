import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

const messages = [
  {
    type: "incoming",
    text: "Hi! I'd like to schedule a consultation for next week.",
    time: "10:30 AM",
  },
  {
    type: "outgoing",
    text: "I'd be happy to help you schedule a consultation. I see we have availability next Tuesday at 2 PM or Wednesday at 10 AM. Would either of those work for you?",
    time: "10:30 AM",
  },
  {
    type: "incoming",
    text: "Wednesday at 10 AM works perfect!",
    time: "10:31 AM",
  },
  {
    type: "outgoing",
    text: "Great! I've scheduled your consultation for Wednesday at 10 AM. You'll receive a confirmation email shortly. Would you like me to send you a reminder the day before?",
    time: "10:31 AM",
  },
];

export default function ConversationDemo() {
  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="text-sm font-medium">Enthos AI Assistant</span>
        </div>
        <div className="flex gap-2">
          <MessageSquare className="w-4 h-4 text-gray-400" />
          <Phone className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
            className={`flex ${message.type === "incoming" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === "incoming"
                  ? "bg-gray-800 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 opacity-60">{message.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
