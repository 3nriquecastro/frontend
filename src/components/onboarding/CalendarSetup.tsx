import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CalendarSetup({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Calendar Integration</h1>
        <p className="text-muted-foreground">
          Connect your calendar to manage appointments
        </p>
      </div>

      <div className="space-y-6">
        <Button variant="outline" className="w-full justify-start h-auto p-4">
          <Calendar className="w-6 h-6 mr-4" />
          <div className="text-left">
            <div className="font-semibold">Google Calendar</div>
            <div className="text-sm text-muted-foreground">
              Connect your Google Calendar
            </div>
          </div>
        </Button>

        <div className="space-y-2">
          <Label>Default Appointment Duration</Label>
          <Select defaultValue="30">
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 minutes</SelectItem>
              <SelectItem value="30">30 minutes</SelectItem>
              <SelectItem value="45">45 minutes</SelectItem>
              <SelectItem value="60">1 hour</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Buffer Time Between Appointments</Label>
          <Select defaultValue="10">
            <SelectTrigger>
              <SelectValue placeholder="Select buffer time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 minutes</SelectItem>
              <SelectItem value="10">10 minutes</SelectItem>
              <SelectItem value="15">15 minutes</SelectItem>
              <SelectItem value="30">30 minutes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={onNext} className="w-full">
        Continue
      </Button>
    </div>
  );
}
