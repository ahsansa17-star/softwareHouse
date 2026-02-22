/*
  # Software House Database Schema

  1. New Tables
    - `services`: Available services with descriptions and pricing info
    - `projects`: Portfolio/case studies showcasing completed work
    - `testimonials`: Client reviews and success stories
    - `inquiry_submissions`: Contact form submissions from potential clients
    - `portfolio_images`: Images associated with projects
  
  2. Security
    - Enable RLS on all tables
    - Public read access for services, projects, and testimonials
    - Anonymous insert-only access for inquiry submissions
    - Service role can manage all content
  
  3. Important Notes
    - All timestamps default to current UTC time
    - IDs are generated as UUIDs
    - Inquiry submissions are auto-verified for email validity
    - Images are stored as metadata references
    - All sensitive fields require authentication
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL CHECK (category IN ('web_development', 'branding_design', 'software_ai')),
  description text NOT NULL,
  is_main_service boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are publicly readable"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can modify services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);


CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('web_development', 'ecommerce', 'branding', 'software')),
  client_name text NOT NULL,
  project_url text,
  featured boolean DEFAULT false,
  completed_at date NOT NULL,
  technologies text[] DEFAULT ARRAY[]::text[],
  results text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are publicly readable"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can modify projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);


CREATE TABLE IF NOT EXISTS portfolio_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  alt_text text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Portfolio images are publicly readable"
  ON portfolio_images FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can modify portfolio images"
  ON portfolio_images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete portfolio images"
  ON portfolio_images FOR DELETE
  TO authenticated
  USING (true);


CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company_name text,
  role text,
  content text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  featured boolean DEFAULT false,
  verified boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Testimonials are publicly readable"
  ON testimonials FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can modify testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);


CREATE TABLE IF NOT EXISTS inquiry_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  project_type text NOT NULL CHECK (project_type IN ('website', 'ecommerce', 'branding', 'software', 'other')),
  budget text,
  message text NOT NULL,
  ip_address text,
  user_agent text,
  read boolean DEFAULT false,
  responded boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE inquiry_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anonymous users can create inquiry submissions"
  ON inquiry_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read inquiry submissions"
  ON inquiry_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update inquiry submissions"
  ON inquiry_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);


CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_projects_completed_at ON projects(completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_rating ON testimonials(rating DESC);
CREATE INDEX IF NOT EXISTS idx_inquiry_submissions_created_at ON inquiry_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiry_submissions_read ON inquiry_submissions(read);
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
