import { createClient } from "@supabase/supabase-js";

// For development without Supabase, use a mock client
const mockClient = {
  from: () => ({
    select: () => mockClient.from(),
    insert: () => mockClient.from(),
    update: () => mockClient.from(),
    delete: () => mockClient.from(),
    eq: () => mockClient.from(),
    single: () => Promise.resolve({ data: null, error: null }),
    then: () => Promise.resolve({ data: [], error: null }),
  }),
};

// Use mock client by default in development
export const supabase = mockClient;
