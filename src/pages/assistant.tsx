import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

export default function Assistant() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-4rem)]">
        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-semibold mb-4">AI Assistant</h1>

          <ScrollArea className="flex-1 border rounded-lg p-4 mb-4 bg-card">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                Hello! I'm your AI business assistant. How can I help you today?
              </div>
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
