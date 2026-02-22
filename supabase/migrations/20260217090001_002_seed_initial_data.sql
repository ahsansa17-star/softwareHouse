/*
  # Seed Initial Data

  1. Services: All 3 main categories with descriptions
  2. Projects: Sample portfolio projects across different categories
  3. Testimonials: Sample client feedback
  
  This data demonstrates the platform and can be replaced with real data.
*/

INSERT INTO services (name, category, description, is_main_service, display_order) VALUES
  ('Business Websites', 'web_development', 'Professional corporate websites that establish your online presence', true, 1),
  ('Portfolio Websites', 'web_development', 'Showcase your work with stunning portfolio sites', true, 2),
  ('E-commerce Websites', 'web_development', 'Full-featured online stores with payment integration', true, 3),
  ('Logo Design', 'branding_design', 'Memorable logo designs that capture your brand essence', true, 1),
  ('Brand Identity', 'branding_design', 'Complete brand strategy and visual guidelines', true, 2),
  ('Website UI/UX Design', 'branding_design', 'User-centered design that drives conversions', true, 3),
  ('Custom Software Development', 'software_ai', 'Tailored software solutions for your business needs', true, 1),
  ('AI Automation Systems', 'software_ai', 'Intelligent automation to streamline operations', true, 2),
  ('SaaS Product Development', 'software_ai', 'Build scalable software-as-a-service products', true, 3);

INSERT INTO projects (title, slug, description, category, client_name, featured, completed_at, technologies, results) VALUES
  (
    'E-commerce Store Redesign',
    'ecommerce-store-redesign',
    'Complete redesign and optimization of existing online store with modern interface and improved checkout flow',
    'ecommerce',
    'Fashion Retail Co',
    true,
    '2025-12-01',
    ARRAY['React', 'WooCommerce', 'Tailwind CSS', 'Stripe'],
    'Increased conversion rate by 45% and average order value by 32%'
  ),
  (
    'Corporate Website Launch',
    'corporate-website-launch',
    'Professional corporate website with services showcase and team profiles',
    'web_development',
    'Tech Solutions Inc',
    true,
    '2025-11-15',
    ARRAY['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
    'Generated 150+ qualified leads in first month'
  ),
  (
    'Startup Branding Package',
    'startup-branding-package',
    'Complete brand identity including logo, color palette, and brand guidelines',
    'branding',
    'CloudAI Startup',
    true,
    '2025-10-20',
    ARRAY['Figma', 'Adobe Creative Suite'],
    'Helped secure $2M Series A funding with professional brand presence'
  ),
  (
    'Inventory Management System',
    'inventory-management-system',
    'Custom inventory and order management dashboard for multi-store operations',
    'software',
    'Retail Chain Network',
    false,
    '2025-09-10',
    ARRAY['React', 'Node.js', 'PostgreSQL', 'Real-time Updates'],
    'Reduced inventory errors by 87% and saved 20 hours/week on manual tracking'
  ),
  (
    'Mobile App Development',
    'mobile-app-development',
    'Cross-platform mobile app for service bookings with real-time notifications',
    'software',
    'Service Booking Platform',
    false,
    '2025-08-25',
    ARRAY['React Native', 'Firebase', 'Push Notifications'],
    'Acquired 10,000+ users within 3 months of launch'
  );

INSERT INTO testimonials (client_name, company_name, role, content, rating, featured, verified) VALUES
  (
    'Ahmed Hassan',
    'Fashion Retail Co',
    'E-commerce Manager',
    'The team transformed our online store completely. Sales increased significantly after the redesign. Highly professional and responsive to feedback!',
    5,
    true,
    true
  ),
  (
    'Fatima Khan',
    'Tech Solutions Inc',
    'Marketing Director',
    'Excellent web development team. They delivered exactly what we envisioned and on time. Our website now generates consistent leads.',
    5,
    true,
    true
  ),
  (
    'Ali Raza',
    'CloudAI Startup',
    'Founder',
    'From logo design to brand guidelines, everything was perfect. They really understood our startup vision and created a brand that investors loved.',
    5,
    false,
    true
  ),
  (
    'Zainab Ahmed',
    'Retail Chain Network',
    'Operations Head',
    'The inventory system is a game-changer for our business. It has automated so much of our work and eliminated manual errors.',
    5,
    false,
    true
  ),
  (
    'Hassan Malik',
    'Service Booking Platform',
    'Product Manager',
    'Outstanding mobile app development. The team was responsive, creative, and delivered features that our users love.',
    5,
    false,
    true
  );
