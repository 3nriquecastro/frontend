import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import { useState } from "react";

interface Service {
  name: string;
  price: string;
  duration: string;
}

export default function ServicesAndPricing({ onNext }: { onNext: () => void }) {
  const [services, setServices] = useState<Service[]>([
    { name: "", price: "", duration: "30" },
  ]);

  const addService = () => {
    setServices([...services, { name: "", price: "", duration: "30" }]);
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Services & Pricing</h1>
        <p className="text-muted-foreground">
          Add your services and their pricing
        </p>
      </div>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex-1 space-y-2">
              <Label>Service Name</Label>
              <Input placeholder="e.g. Consultation" />
            </div>
            <div className="w-32 space-y-2">
              <Label>Price</Label>
              <Input placeholder="$0.00" type="number" />
            </div>
            <div className="w-32 space-y-2">
              <Label>Duration</Label>
              <Input placeholder="30" type="number" defaultValue={30} />
            </div>
            {services.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="mt-8"
                onClick={() => removeService(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}

        <Button variant="outline" className="w-full" onClick={addService}>
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      <Button onClick={onNext} className="w-full">
        Continue
      </Button>
    </div>
  );
}
