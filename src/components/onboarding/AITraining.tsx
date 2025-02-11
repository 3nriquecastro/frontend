import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AITraining({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Train your AI Assistant</h1>
        <p className="text-muted-foreground">
          Help Enthos understand your business better
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Common Services</Label>
          <Textarea
            placeholder="List your main services, one per line"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Pricing Information</Label>
          <Textarea
            placeholder="Describe your pricing structure"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Booking Rules</Label>
          <Textarea
            placeholder="Any specific rules for appointments?"
            className="min-h-[100px]"
          />
        </div>
      </div>

      <Button onClick={onNext} className="w-full">
        Continue
      </Button>
    </div>
  );
}
