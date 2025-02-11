import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BusinessHours({ onNext }: { onNext: () => void }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Business Hours</h1>
        <p className="text-muted-foreground">
          Set your regular operating hours
        </p>
      </div>

      <div className="space-y-4">
        {days.map((day) => (
          <div key={day} className="flex items-center gap-4">
            <Label className="w-24">{day}</Label>
            <Select defaultValue="open">
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2 flex-1">
              <Input type="time" defaultValue="09:00" />
              <Input type="time" defaultValue="17:00" />
            </div>
          </div>
        ))}
      </div>

      <Button onClick={onNext} className="w-full">
        Continue
      </Button>
    </div>
  );
}
