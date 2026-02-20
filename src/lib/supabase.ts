import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured. Some features may not work.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      services: {
        Row: {
          id: string;
          name: string;
          category: 'web_development' | 'branding_design' | 'software_ai';
          description: string;
          is_main_service: boolean;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          category: 'web_development' | 'ecommerce' | 'branding' | 'software';
          client_name: string;
          project_url: string | null;
          featured: boolean;
          completed_at: string;
          technologies: string[];
          results: string | null;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          client_name: string;
          company_name: string | null;
          role: string | null;
          content: string;
          rating: number | null;
          featured: boolean;
          verified: boolean;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
      };
      inquiry_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          company_name: string | null;
          project_type: 'website' | 'ecommerce' | 'branding' | 'software' | 'other';
          budget: string | null;
          message: string;
          ip_address: string | null;
          user_agent: string | null;
          read: boolean;
          responded: boolean;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
};
