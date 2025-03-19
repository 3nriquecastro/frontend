export interface Organization {
  id: string;
  name: string;
  created_at: string;
  owner_id: string;
  description: string;
  business_type: string;
  phone: string;
  address: string;
  social_links: {
    facebook?: string;
    instagram?: string;
    website?: string;
  };
  updated_at: string;
  logo_url: string;
}

export interface BusinessHour {
  id: string;
  organization_id: string;
  day: string;
  opening_time: string;
  closing_time: string;
}

export interface Service {
  id: string;
  organization_id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  duration: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  organization_id: string;
  name: string;
  short_description: string;
  category: string;
  price: number;
  stock: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
