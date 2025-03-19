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
import { useState, useEffect } from "react";
import { Organization, BusinessHour, Service, Product } from "@/types/database";
import { useToast } from "@/components/ui/use-toast";
import {
  updateOrganization,
  getBusinessHours,
  updateBusinessHours,
  getServices,
  updateService,
  createService,
  deleteService,
  getProducts,
  updateProduct,
  createProduct,
  deleteProduct,
} from "@/lib/api";

const defaultService: Service = {
  id: "",
  organization_id: "",
  name: "",
  description: "",
  category: "",
  price: 0,
  duration: 30,
  is_active: true,
  created_at: "",
  updated_at: "",
};

const defaultProduct: Product = {
  id: "",
  organization_id: "",
  name: "",
  short_description: "",
  category: "",
  price: 0,
  stock: 1,
  is_active: true,
  created_at: "",
  updated_at: "",
};

export default function Settings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [businessHours, setBusinessHours] = useState<BusinessHour[]>([]);
  const [services, setServices] = useState<Service[]>([defaultService]);
  const [products, setProducts] = useState<Product[]>([defaultProduct]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      // Load organization data
      // Note: You'll need to get the organization ID from your auth context
      const orgId = "your-org-id";

      const [hours, servicesData, productsData] = await Promise.all([
        getBusinessHours(orgId),
        getServices(orgId),
        getProducts(orgId),
      ]);

      setBusinessHours(hours);
      setServices(servicesData.length ? servicesData : [defaultService]);
      setProducts(productsData.length ? productsData : [defaultProduct]);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to load settings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBusinessHours = async () => {
    try {
      setLoading(true);
      await updateBusinessHours(organization?.id!, businessHours);
      toast({
        title: "Success",
        description: "Business hours updated",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update business hours",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveServices = async () => {
    try {
      setLoading(true);
      // Update or create services
      await Promise.all(
        services.map((service) =>
          service.id
            ? updateService(service.id, service)
            : createService({
                ...service,
                organization_id: organization?.id!,
              }),
        ),
      );
      toast({
        title: "Success",
        description: "Services updated",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update services",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProducts = async () => {
    try {
      setLoading(true);
      // Update or create products
      await Promise.all(
        products.map((product) =>
          product.id
            ? updateProduct(product.id, product)
            : createProduct({
                ...product,
                organization_id: organization?.id!,
              }),
        ),
      );
      toast({
        title: "Success",
        description: "Products updated",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to update products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addService = () => {
    setServices([...services, { ...defaultService }]);
  };

  const addProduct = () => {
    setProducts([...products, { ...defaultProduct }]);
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
              <Button onClick={handleSaveBusinessHours}>Save Changes</Button>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="p-6 space-y-6">
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-1 space-y-2">
                      <Label>Service Name</Label>
                      <Input
                        placeholder="e.g. Consultation"
                        value={service.name}
                        onChange={(e) => {
                          const newServices = [...services];
                          newServices[index].name = e.target.value;
                          setServices(newServices);
                        }}
                      />
                    </div>
                    <div className="w-32 space-y-2">
                      <Label>Price</Label>
                      <Input
                        placeholder="0.00"
                        type="number"
                        value={service.price}
                        onChange={(e) => {
                          const newServices = [...services];
                          newServices[index].price = Number(e.target.value);
                          setServices(newServices);
                        }}
                      />
                    </div>
                    <div className="w-32 space-y-2">
                      <Label>Duration</Label>
                      <Input
                        placeholder="30"
                        type="number"
                        value={service.duration}
                        onChange={(e) => {
                          const newServices = [...services];
                          newServices[index].duration = Number(e.target.value);
                          setServices(newServices);
                        }}
                      />
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
              <Button onClick={handleSaveServices}>Save Changes</Button>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="p-6 space-y-6">
              <div className="space-y-4">
                {products.map((product, index) => (
                  <div key={index} className="space-y-4 p-4 border rounded-lg">
                    <div className="flex gap-4 items-start">
                      <div className="flex-1 space-y-2">
                        <Label>Product Name</Label>
                        <Input
                          placeholder="e.g. Face Cream"
                          value={product.name}
                          onChange={(e) => {
                            const newProducts = [...products];
                            newProducts[index].name = e.target.value;
                            setProducts(newProducts);
                          }}
                        />
                      </div>
                      <div className="w-32 space-y-2">
                        <Label>Price</Label>
                        <Input
                          placeholder="0.00"
                          type="number"
                          value={product.price}
                          onChange={(e) => {
                            const newProducts = [...products];
                            newProducts[index].price = Number(e.target.value);
                            setProducts(newProducts);
                          }}
                        />
                      </div>
                      <div className="w-32 space-y-2">
                        <Label>Stock</Label>
                        <Input
                          placeholder="1"
                          type="number"
                          value={product.stock}
                          onChange={(e) => {
                            const newProducts = [...products];
                            newProducts[index].stock = Number(e.target.value);
                            setProducts(newProducts);
                          }}
                        />
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
                        value={product.short_description}
                        onChange={(e) => {
                          const newProducts = [...products];
                          newProducts[index].short_description = e.target.value;
                          setProducts(newProducts);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select
                        value={product.category}
                        onValueChange={(value) => {
                          const newProducts = [...products];
                          newProducts[index].category = value;
                          setProducts(newProducts);
                        }}
                      >
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
              <Button onClick={handleSaveProducts}>Save Changes</Button>
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
