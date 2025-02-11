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

export default function BusinessInfo({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Tell us about your business</h1>
        <p className="text-muted-foreground">
          Help us customize Enthos for your needs
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Business Type</Label>
          <Select defaultValue="medical">
            <SelectTrigger>
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medical">Medical Practice</SelectItem>
              <SelectItem value="dental">Dental Clinic</SelectItem>
              <SelectItem value="therapy">Therapy Practice</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Number of Staff</Label>
          <Input type="number" placeholder="e.g. 5" />
        </div>

        <div className="space-y-2">
          <Label>Business Hours</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input type="time" defaultValue="09:00" />
            <Input type="time" defaultValue="17:00" />
          </div>
        </div>
      </div>

      <Button onClick={onNext} className="w-full">
        Continue
      </Button>
    </div>
  );
}
