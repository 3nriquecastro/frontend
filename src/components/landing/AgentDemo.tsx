import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Calendar,
  MessageSquare,
  Brain,
  Clock,
  CheckCircle,
  User,
  Sparkles,
} from "lucide-react";
import { useEffect, useState, useCallback, useRef } from "react";

const scenarios = [
  {
    name: "New Client Experience",
    icon: User,
    steps: [
      {
        type: "customer",
        message: "Hello! I need an appointment for a facial treatment",
        typing: true,
        analysis: {
          action: "Initial Contact",
          tasks: [
            { icon: Brain, text: "Processing request" },
            { icon: MessageSquare, text: "Analyzing intent" },
            { icon: Clock, text: "Preparing response" },
          ],
        },
      },
      {
        type: "agent",
        message:
          "Hello! I'd be happy to help you book a facial treatment. First, let me check your profile and our availability.",
        typing: true,
        analysis: {
          action: "Profile Analysis",
          tasks: [
            { icon: Brain, text: "Verifying history" },
            { icon: Calendar, text: "Checking availability" },
            { icon: Clock, text: "Optimizing schedule" },
          ],
        },
      },
      {
        type: "agent",
        message:
          "Based on your skin type and our availability, I recommend our Hydrating Facial Treatment (60 min). I can book you for:\n\n- Tomorrow at 2:00 PM\n- Thursday at 10:00 AM\n- Friday at 3:30 PM\n\nWhich time works best for you?",
        typing: true,
        analysis: {
          action: "Intelligent Scheduling",
          tasks: [
            { icon: Brain, text: "Treatment selection" },
            { icon: Calendar, text: "Schedule optimization" },
            { icon: CheckCircle, text: "Availability confirmed" },
          ],
        },
      },
      {
        type: "customer",
        message: "Tomorrow at 2:00 PM works perfectly for me!",
        typing: true,
        analysis: {
          action: "Booking Process",
          tasks: [
            { icon: Calendar, text: "Reserving time slot" },
            { icon: Brain, text: "Processing booking" },
            { icon: CheckCircle, text: "Confirming appointment" },
          ],
        },
      },
      {
        type: "agent",
        message:
          "✨ Perfect! I've booked your Hydrating Facial Treatment for tomorrow at 2:00 PM. Additionally:\n\n- I've added you to our new client program\n- I've sent a calendar invitation\n- I've scheduled a reminder for tomorrow\n\nWould you like me to send you preparation instructions for the treatment?",
        typing: true,
        analysis: {
          action: "Booking Completion",
          tasks: [
            { icon: Brain, text: "Setting up reminders" },
            { icon: MessageSquare, text: "Preparing instructions" },
            { icon: CheckCircle, text: "Booking completed" },
          ],
        },
      },
    ],
  },
  {
    name: "Regular Client Service",
    icon: User,
    steps: [
      {
        type: "agent",
        message:
          "Hello Maria! I've noticed it's been 4 weeks since your last facial treatment. According to your treatment plan, would you like me to schedule your next appointment?",
        typing: true,
        analysis: {
          action: "Proactive Service",
          tasks: [
            { icon: Brain, text: "Analyzing treatment cycle" },
            { icon: Calendar, text: "Verifying optimal timing" },
            { icon: Clock, text: "Preparing suggestion" },
          ],
        },
      },
      {
        type: "customer",
        message: "Yes, please! The same time as usual would be perfect.",
        typing: true,
        analysis: {
          action: "Intelligent Booking",
          tasks: [
            { icon: Brain, text: "Retrieving preferences" },
            { icon: Calendar, text: "Confirming availability" },
            { icon: CheckCircle, text: "Validating schedule" },
          ],
        },
      },
      {
        type: "agent",
        message:
          "✨ Wonderful! I've scheduled your next facial treatment for next Thursday at 2:00 PM. Additionally:\n\n- I've applied your loyalty discount (15% off)\n- I've booked with your favorite esthetician\n- I've added a complimentary skin analysis\n\nWould you like me to also reorder your favorite post-treatment serum?",
        typing: true,
        analysis: {
          action: "Enhanced Booking",
          tasks: [
            { icon: Brain, text: "Processing benefits" },
            { icon: Calendar, text: "Finalizing schedule" },
            { icon: CheckCircle, text: "Confirming advantages" },
          ],
        },
      },
    ],
  },
];

const MessageDisplay = ({
  message,
  onComplete,
  isTyping,
}: {
  message: string;
  onComplete: () => void;
  isTyping: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText(message);
      onComplete();
      return;
    }

    if (currentIndex < message.length) {
      let delay = 30;
      const currentChar = message[currentIndex];

      // Natural typing speed variations based on punctuation
      if ([".", ",", "!", "?", ":", ";", "\n"].includes(currentChar)) {
        delay = 300; // Longer pause at punctuation
      } else if (currentChar === " ") {
        delay = 80; // Slight pause at spaces
      } else {
        delay = Math.random() * 30 + 20; // Random variation for natural feel
      }

      const timer = setTimeout(() => {
        setDisplayedText(message.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // Small delay after typing completes before calling onComplete
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(completionTimer);
    }
  }, [message, isTyping, currentIndex, onComplete]);

  return (
    <p className="text-sm leading-relaxed whitespace-pre-line">
      {displayedText}
      {isTyping && currentIndex < message.length && (
        <span className="inline-block w-1 h-4 ml-0.5 bg-current animate-pulse">
          &nbsp;
        </span>
      )}
    </p>
  );
};

export default function AgentDemo() {
  // Define cleanupTimers before it's used in any hooks
  const cleanupTimers = useCallback(() => {
    if (taskTimeoutRef.current) clearTimeout(taskTimeoutRef.current);
    if (scenarioTimeoutRef.current) clearTimeout(scenarioTimeoutRef.current);
    scrollTimeoutsRef.current.forEach(clearTimeout);
    scrollTimeoutsRef.current = [];
  }, []);

  const [activeScenario, setActiveScenario] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [taskIndex, setTaskIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const taskTimeoutRef = useRef<number | null>(null);
  const scenarioTimeoutRef = useRef<number | null>(null);
  const scrollTimeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
      cleanupTimers();
    };
  }, [cleanupTimers]);

  const scrollToBottom = useCallback(() => {
    if (!chatContainerRef.current || !autoScrollEnabled) return;

    const container = chatContainerRef.current;
    const scrollToPosition = container.scrollHeight - container.clientHeight;

    // Smooth scroll
    container.scrollTo({ top: scrollToPosition, behavior: "smooth" });

    // Fallback direct scroll after a short delay in case smooth scroll fails
    const directScrollTimeout = setTimeout(() => {
      if (container && container.scrollTop < scrollToPosition - 20) {
        container.scrollTop = scrollToPosition;
      }
    }, 300);

    scrollTimeoutsRef.current.push(directScrollTimeout);
  }, [autoScrollEnabled]);

  // Set up mutation observer to detect content changes and scroll accordingly
  useEffect(() => {
    if (!chatContainerRef.current) return;

    const container = chatContainerRef.current;
    const observer = new MutationObserver(() => {
      if (autoScrollEnabled) {
        // Schedule multiple scroll attempts with increasing delays
        // to ensure scrolling happens after content is fully rendered
        [10, 50, 150, 300].forEach((delay) => {
          const timeoutId = setTimeout(scrollToBottom, delay);
          scrollTimeoutsRef.current.push(timeoutId);
        });
      }
    });

    observer.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
    });

    return () => observer.disconnect();
  }, [scrollToBottom, autoScrollEnabled]);

  // Ensure scrolling happens after any state changes that affect content
  useEffect(() => {
    if (!isMounted) return;

    const delays = [10, 50, 150, 300, 500];
    const newTimeouts = delays.map((delay) =>
      setTimeout(scrollToBottom, delay),
    );
    scrollTimeoutsRef.current.push(...newTimeouts);

    return () => {
      scrollTimeoutsRef.current.forEach(clearTimeout);
      scrollTimeoutsRef.current = [];
    };
  }, [
    stepIndex,
    isTyping,
    taskIndex,
    activeScenario,
    isTransitioning,
    scrollToBottom,
    isMounted,
  ]);

  const handleTypingComplete = useCallback(() => {
    requestAnimationFrame(() => {
      setIsTyping(false);
      scrollToBottom();
    });
  }, [scrollToBottom]);

  // Progress through tasks and scenarios
  useEffect(() => {
    if (!isMounted || isTyping || isTransitioning) return;

    const progressTasks = () => {
      taskTimeoutRef.current = window.setTimeout(() => {
        setTaskIndex((current) => {
          const currentScenario = scenarios[activeScenario];
          const currentStep = currentScenario.steps[stepIndex];
          const maxTasks = currentStep.analysis.tasks.length;

          if (current >= maxTasks - 1) {
            // All tasks for this step are complete, move to next step or scenario
            scenarioTimeoutRef.current = window.setTimeout(() => {
              setIsTransitioning(true);
              scrollToBottom();

              setTimeout(() => {
                setStepIndex((currentStep) => {
                  if (currentStep >= currentScenario.steps.length - 1) {
                    // End of scenario, move to next scenario or loop back
                    setActiveScenario((currentScenario) =>
                      currentScenario === scenarios.length - 1
                        ? 0
                        : currentScenario + 1,
                    );
                    setTaskIndex(0);
                    setStepIndex(0);
                    setIsTyping(true);
                    setIsTransitioning(false);
                    return 0;
                  } else {
                    // Move to next step in current scenario
                    setTaskIndex(0);
                    setIsTyping(true);
                    setIsTransitioning(false);
                    return currentStep + 1;
                  }
                });
                scrollToBottom();
              }, 1500); // Increased wait time for better readability
            }, 2000);

            return current;
          }

          // Move to next task with natural timing
          const nextTaskDelay = 1500 + Math.random() * 500;
          setTimeout(progressTasks, nextTaskDelay);
          return current + 1;
        });
      }, 1000);
    };

    progressTasks();
    return cleanupTimers;
  }, [
    isMounted,
    activeScenario,
    stepIndex,
    isTyping,
    cleanupTimers,
    isTransitioning,
    scrollToBottom,
  ]);

  if (!isMounted) return null;

  const safeActiveScenario = Math.min(activeScenario, scenarios.length - 1);
  const currentScenario = scenarios[safeActiveScenario];
  const safeStepIndex = Math.min(stepIndex, currentScenario.steps.length - 1);
  const currentStep = currentScenario.steps[safeStepIndex];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        style={{ minHeight: "450px" }}
      >
        {/* Left Panel - Conversation */}
        <div className="rounded-lg border border-gray-200 bg-[#E6F3F7] p-4 overflow-hidden flex flex-col">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-[#1F2937]" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#1F2937]">Enthos AI</h3>
              <p className="text-xs text-[#4B5563]">{currentScenario.name}</p>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-green-600 font-medium">Active</span>
            </div>
          </div>

          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto pr-1 space-y-4 h-[350px] custom-scrollbar"
            style={{ scrollBehavior: "smooth" }}
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              const isScrolledToBottom =
                target.scrollHeight - target.scrollTop <=
                target.clientHeight + 20;
              setAutoScrollEnabled(isScrolledToBottom);
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {currentScenario.steps
                .slice(0, stepIndex + 1)
                .map((step, index) => (
                  <motion.div
                    key={`${activeScenario}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className={`flex ${step.type === "customer" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-lg p-4 max-w-[90%] ${step.type === "customer" ? "bg-white text-[#1F2937] shadow-sm" : "bg-[#1F2937] text-white shadow-md"}`}
                      style={{ wordBreak: "break-word" }}
                    >
                      <MessageDisplay
                        message={step.message}
                        onComplete={handleTypingComplete}
                        isTyping={
                          index === stepIndex && step.typing && isTyping
                        }
                      />
                      <div className="mt-2 text-xs text-right">
                        <span
                          className={
                            step.type === "customer"
                              ? "text-gray-600"
                              : "text-gray-300"
                          }
                        >
                          {step.type === "customer" ? "You" : "Enthos AI"}
                        </span>
                        {step.type === "agent" && (
                          <span className="ml-1 text-yellow-300">✨</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {isTransitioning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <div className="rounded-lg p-3 bg-[#1F2937] text-white shadow-sm">
                  <div className="flex space-x-2 px-1">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gray-300"
                      animate={{
                        y: ["-30%", "30%", "-30%"],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gray-300"
                      animate={{
                        y: ["-30%", "30%", "-30%"],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-gray-300"
                      animate={{
                        y: ["-30%", "30%", "-30%"],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.4,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* New messages indicator when scrolled up */}
            {!autoScrollEnabled && (
              <div
                className="sticky bottom-0 w-full flex justify-center z-10"
                onClick={() => {
                  setAutoScrollEnabled(true);
                  scrollToBottom();
                }}
              >
                <div className="bg-blue-600 text-white text-xs rounded-t-md px-3 py-1 cursor-pointer shadow-md hover:bg-blue-700 transition-colors">
                  ↓ New messages
                </div>
              </div>
            )}

            <div className="h-4"></div>
          </div>
        </div>

        {/* Right Panel - Analysis */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-[#1F2937]" />
              <span className="text-sm text-[#1F2937] font-medium">
                AI Processing
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs text-blue-600 font-medium">
                Real-time
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeScenario}-${stepIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-5 flex-1 overflow-y-auto h-[350px] pr-1 custom-scrollbar"
            >
              <div className="p-4 rounded-lg border border-[#1F2937]/20 bg-[#E6F3F7]">
                <div className="text-xs text-[#4B5563] mb-2">
                  Current Action
                </div>
                <div className="text-sm text-[#1F2937] font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  {currentStep.analysis.action}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-medium text-[#4B5563] uppercase tracking-wider">
                  PROCESSING TASKS
                </h3>
                {currentStep.analysis.tasks.map((task, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: i * 0.2,
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100"
                  >
                    <task.icon
                      className={`w-5 h-5 ${i <= taskIndex ? "text-blue-600" : "text-gray-400"}`}
                    />
                    <span
                      className={`text-sm ${i <= taskIndex ? "text-[#1F2937] font-medium" : "text-gray-400"}`}
                    >
                      {task.text}
                    </span>
                    {i <= taskIndex && (
                      <motion.div
                        className="ml-auto"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span>
                    Step {stepIndex + 1} of {currentScenario.steps.length}
                  </span>
                  <span className="font-medium text-[#1F2937]">
                    {currentScenario.name}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((stepIndex + 1) / currentScenario.steps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-xs font-medium text-[#4B5563] uppercase tracking-wider mb-2">
                  SCENARIO DETAILS
                </h3>
                <div className="text-sm text-[#1F2937]">
                  <p>
                    This demo shows how Enthos AI handles new client experience
                    interactions autonomously, managing the entire conversation
                    flow while processing multiple tasks in the background.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.8);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
          overflow-anchor: auto;
        }
      `}</style>
    </div>
  );
}
