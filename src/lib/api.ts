import { supabase } from "./supabase";
import { Organization, BusinessHour, Service, Product } from "@/types/database";

// Organization
export async function updateOrganization(
  id: string,
  data: Partial<Organization>,
) {
  const { data: organization, error } = await supabase
    .from("organizations")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return organization;
}

// Business Hours
export async function getBusinessHours(organizationId: string) {
  const { data, error } = await supabase
    .from("business_hours")
    .select("*")
    .eq("organization_id", organizationId);

  if (error) throw error;
  return data;
}

export async function updateBusinessHours(
  organizationId: string,
  hours: BusinessHour[],
) {
  // First delete existing hours
  await supabase
    .from("business_hours")
    .delete()
    .eq("organization_id", organizationId);

  // Then insert new hours
  const { data, error } = await supabase
    .from("business_hours")
    .insert(hours)
    .select();

  if (error) throw error;
  return data;
}

// Services
export async function getServices(organizationId: string) {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("organization_id", organizationId);

  if (error) throw error;
  return data;
}

export async function updateService(id: string, data: Partial<Service>) {
  const { data: service, error } = await supabase
    .from("services")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return service;
}

export async function createService(
  data: Omit<Service, "id" | "created_at" | "updated_at">,
) {
  const { data: service, error } = await supabase
    .from("services")
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return service;
}

export async function deleteService(id: string) {
  const { error } = await supabase.from("services").delete().eq("id", id);

  if (error) throw error;
}

// Products
export async function getProducts(organizationId: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("organization_id", organizationId);

  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, data: Partial<Product>) {
  const { data: product, error } = await supabase
    .from("products")
    .update(data)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return product;
}

export async function createProduct(
  data: Omit<Product, "id" | "created_at" | "updated_at">,
) {
  const { data: product, error } = await supabase
    .from("products")
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return product;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) throw error;
}
