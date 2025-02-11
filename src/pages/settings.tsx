import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  X,
  MessageSquare,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [services, setServices] = useState([
    { name: "", price: "", duration: "30" },
  ]);

  const [products, setProducts] = useState([
    { name: "", price: "", stock: "1", description: "" },
  ]);

  const addService = () => {
    setServices([...services, { name: "", price: "", duration: "30" }]);
  };

  const addProduct = () => {
    setProducts([
      ...products,
      { name: "", price: "", stock: "1", description: "" },
    ]);
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const removeProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-semibold">Settings</h1>

        <Tabs defaultValue="business" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="business">Business Info</TabsTrigger>
            <TabsTrigger value="hours">Business Hours</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="communications">Communications</TabsTrigger>
          </TabsList>

          <TabsContent value="business">
            <Card className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                    <Button variant="ghost" className="h-full w-full">
                      Upload Logo
                    </Button>
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label>Business Name</Label>
                    <Input placeholder="Enter your business name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinic">Clínica</SelectItem>
                      <SelectItem value="restaurant">Restaurante</SelectItem>
                      <SelectItem value="retail">Tienda</SelectItem>
                      <SelectItem value="salon">Salón de Belleza</SelectItem>
                      <SelectItem value="gym">Gimnasio</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Describe your business..."
                    className="h-24"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input type="tel" placeholder="+1 234 567 890" />
                </div>

                <div className="space-y-2">
                  <Label>Address</Label>
                  <Input placeholder="Enter your business address" />
                </div>

                <div className="space-y-2">
                  <Label>Website</Label>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <Input placeholder="https://" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Social Media</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Facebook className="w-4 h-4 text-muted-foreground" />
                      <Input placeholder="Facebook URL" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Instagram className="w-4 h-4 text-muted-foreground" />
                      <Input placeholder="Instagram URL" />
                    </div>
                  </div>
                </div>
              </div>
              <Button>Save Changes</Button>
            </Card>
          </TabsContent>

          <TabsContent value="hours">
            <Card className="p-6 space-y-6">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
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
              <Button>Save Changes</Button>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="p-6 space-y-6">
              <div className="space-y-4">
                {services.map((_, index) => (
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
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={addService}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </div>
              <Button>Save Changes</Button>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="p-6 space-y-6">
              <div className="space-y-4">
                {products.map((_, index) => (
                  <div key={index} className="space-y-4 p-4 border rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-1 space-y-2">
                        <Label>Product Name</Label>
                        <Input placeholder="e.g. Face Cream" />
                      </div>
                      <div className="w-32 space-y-2">
                        <Label>Price</Label>
                        <Input placeholder="$0.00" type="number" />
                      </div>
                      <div className="w-32 space-y-2">
                        <Label>Stock</Label>
                        <Input placeholder="1" type="number" defaultValue={1} />
                      </div>
                      {products.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="mt-8"
                          onClick={() => removeProduct(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        placeholder="Product description..."
                        className="h-20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="skincare">Skincare</SelectItem>
                          <SelectItem value="haircare">Haircare</SelectItem>
                          <SelectItem value="makeup">Makeup</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={addProduct}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </div>
              <Button>Save Changes</Button>
            </Card>
          </TabsContent>

          <TabsContent value="communications">
            <Card className="p-6 space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <MessageSquare className="w-5 h-5" />
                    <div>
                      <Label>WhatsApp Business</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable WhatsApp messaging
                      </p>
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5" />
                    <div>
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable SMS messaging
                      </p>
                    </div>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5" />
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email updates
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Button>Save Changes</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
