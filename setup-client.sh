#!/bin/bash

# Software House Website - Client Setup Script
# Usage: ./setup-client.sh "client-name" "client-company"

set -e

if [ $# -lt 2 ]; then
    echo "Usage: ./setup-client.sh \"Client Name\" \"Client Company Name\""
    echo "Example: ./setup-client.sh \"John Doe\" \"Tech Solutions Inc\""
    exit 1
fi

CLIENT_NAME=$1
CLIENT_COMPANY=$2
CLIENT_SLUG=$(echo $CLIENT_COMPANY | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd 'a-z0-9-')

echo "================================================"
echo "Setting up website for: $CLIENT_COMPANY"
echo "================================================"

# 1. Create new directory
echo ""
echo "1. Creating project directory..."
mkdir -p "clients/$CLIENT_SLUG"
cp -r . "clients/$CLIENT_SLUG" 2>/dev/null || true

cd "clients/$CLIENT_SLUG"

# 2. Create .env file template
echo ""
echo "2. Creating .env file template..."
cat > .env << EOF
# Supabase Configuration
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY

# Client Information
VITE_CLIENT_NAME=$CLIENT_COMPANY
VITE_CLIENT_EMAIL=your-email@$CLIENT_SLUG.com
EOF

# 3. Create client configuration
echo ""
echo "3. Creating client configuration file..."
cat > client-config.json << EOF
{
  "name": "$CLIENT_COMPANY",
  "contact_person": "$CLIENT_NAME",
  "created_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "status": "setup",
  "packages": {
    "website": "Professional",
    "domain": "custom",
    "support": "3-months"
  },
  "supabase": {
    "project_id": "YOUR_PROJECT_ID",
    "url": "https://YOUR_PROJECT.supabase.co",
    "anon_key": "YOUR_ANON_KEY"
  },
  "hosting": {
    "platform": "vercel",
    "repository": "https://github.com/YOUR_USERNAME/$CLIENT_SLUG",
    "url": "https://$CLIENT_SLUG.vercel.app"
  },
  "customizations": {
    "branding": {
      "primary_color": "#2563eb",
      "logo_url": "/logo.png"
    },
    "content": {
      "services": 3,
      "projects": 0,
      "testimonials": 0
    }
  }
}
EOF

# 4. Create client README
echo ""
echo "4. Creating client README..."
cat > CLIENT_README.md << EOF
# Website for $CLIENT_COMPANY

**Contact Person:** $CLIENT_NAME

## Setup Information

**Created:** $(date)
**Status:** In Progress

### Deployment
- Repository: Check GitHub
- Hosting: Vercel/GitHub Pages
- Domain: To be configured

### Supabase Setup
1. Create Supabase project
2. Update VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env
3. Run migrations
4. Add projects and testimonials

### Next Steps
1. [ ] Supabase project created
2. [ ] .env variables configured
3. [ ] Database migrations run
4. [ ] Customization completed
5. [ ] Testing passed
6. [ ] Domain configured
7. [ ] Go live

### Project Info
- Company: $CLIENT_COMPANY
- Contact: $CLIENT_NAME
- Package: Professional
- Timeline: 5 days

---
Setup completed on $(date)
EOF

# 5. Create .gitignore entry
echo ""
echo "5. Configuring Git..."
echo "" >> ../../.gitignore
echo "# Client projects" >> ../../.gitignore
echo "clients/*/node_modules" >> ../../.gitignore
echo "clients/*/.env" >> ../../.gitignore
echo "clients/*/dist" >> ../../.gitignore

# 6. Install dependencies
echo ""
echo "6. Installing dependencies..."
npm install > /dev/null 2>&1

# 7. Create checklist
echo ""
echo "7. Creating setup checklist..."
cat > SETUP_CHECKLIST.md << EOF
# Setup Checklist for $CLIENT_COMPANY

## Information Gathering
- [ ] Company name: $CLIENT_COMPANY
- [ ] Contact person: $CLIENT_NAME
- [ ] Email address: [ ]
- [ ] Phone number: [ ]
- [ ] Website domain: [ ]
- [ ] Brand colors: [ ]
- [ ] Logo file: [ ]
- [ ] Services list: [ ]
- [ ] Pricing structure: [ ]

## Technical Setup
- [ ] GitHub repository created
- [ ] Supabase project created
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Local environment tested

## Customization
- [ ] Header/Footer company info
- [ ] Services descriptions updated
- [ ] Pricing packages updated
- [ ] Contact information updated
- [ ] Logo integrated
- [ ] Colors customized

## Content
- [ ] Projects added (minimum 3)
- [ ] Testimonials added (minimum 3)
- [ ] Team information (if applicable)
- [ ] About section customized

## Quality Assurance
- [ ] Mobile responsive tested
- [ ] Forms tested
- [ ] Links tested
- [ ] Performance check (Lighthouse)
- [ ] SEO meta tags verified
- [ ] Analytics configured

## Deployment
- [ ] Build successful (npm run build)
- [ ] Vercel/GitHub deployment configured
- [ ] Domain DNS configured
- [ ] HTTPS enabled
- [ ] Deployed URL working

## Launch
- [ ] Client review & approval
- [ ] Final testing
- [ ] Go live announcement
- [ ] Client training
- [ ] Support handoff

## Post-Launch
- [ ] 7-day check-in scheduled
- [ ] Performance review
- [ ] Retainer discussion
- [ ] Testimonial request

---
Start date: $(date)
Target launch: [ ]
EOF

# 8. Summary
echo ""
echo "================================================"
echo "Setup Complete!"
echo "================================================"
echo ""
echo "Client directory: clients/$CLIENT_SLUG"
echo "Config file: clients/$CLIENT_SLUG/client-config.json"
echo "Checklist: clients/$CLIENT_SLUG/SETUP_CHECKLIST.md"
echo ""
echo "Next steps:"
echo "1. Update client-config.json with Supabase details"
echo "2. Update .env with VITE_SUPABASE_* variables"
echo "3. Follow SETUP_CHECKLIST.md for customization"
echo ""
echo "To start customizing:"
echo "cd clients/$CLIENT_SLUG"
echo "npm run dev"
echo ""
echo "To build:"
echo "npm run build"
echo ""
echo "================================================"
