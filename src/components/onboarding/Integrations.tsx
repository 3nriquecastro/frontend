import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Integrations() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Connect Your Tools</h1>
        <p className="text-muted-foreground">
          Link your existing services with Enthos
        </p>
      </div>

      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-start h-auto p-4">
          <Calendar className="w-6 h-6 mr-4" />
          <div className="text-left">
            <div className="font-semibold">Google Calendar</div>
            <div className="text-sm text-muted-foreground">
              Sync your appointments
            </div>
          </div>
        </Button>

        <Button variant="outline" className="w-full justify-start h-auto p-4">
          <MessageSquare className="w-6 h-6 mr-4" />
          <div className="text-left">
            <div className="font-semibold">WhatsApp Business</div>
            <div className="text-sm text-muted-foreground">
              Connect for patient communication
            </div>
          </div>
        </Button>
      </div>

      <Button onClick={() => navigate("/dashboard")} className="w-full">
        Complete Setup
      </Button>
    </div>
  );
}
