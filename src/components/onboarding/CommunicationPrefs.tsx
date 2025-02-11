import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageSquare, Phone, Mail } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function CommunicationPrefs({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Communication Preferences</h1>
        <p className="text-muted-foreground">
          Choose how you want to interact with patients
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MessageSquare className="w-5 h-5" />
            <div>
              <Label>WhatsApp</Label>
              <p className="text-sm text-muted-foreground">
                Enable WhatsApp business messaging
              </p>
            </div>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5" />
            <div>
              <Label>SMS</Label>
              <p className="text-sm text-muted-foreground">
                Enable SMS notifications
              </p>
            </div>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5" />
            <div>
              <Label>Email</Label>
              <p className="text-sm text-muted-foreground">
                Enable email communications
              </p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>
      </div>

      <Button onClick={onNext} className="w-full">
        Continue
      </Button>
    </div>
  );
}
