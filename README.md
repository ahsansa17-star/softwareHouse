# Software House Website Template

A production-ready, fully customizable website template for software houses, development agencies, and service-based businesses.

**Go from idea to live website in 48 hours.**

---

## Features

- **Professional Design** - Modern, conversion-optimized layout
- **Fully Responsive** - Works perfectly on all devices
- **Portfolio Management** - Display projects and case studies
- **Client Testimonials** - Build trust with social proof
- **Contact Management** - All inquiries saved to database
- **Database Included** - Supabase integration for content management
- **Deployment Ready** - Deploy to GitHub Pages, Vercel, or Netlify in minutes
- **Customizable** - Easy color changes, content updates, and branding
- **Performance Optimized** - Fast loading, Lighthouse optimized
- **SEO Friendly** - Meta tags, semantic HTML, mobile-first design

---

## Quick Start (For Your Customers)

### 1. Setup for a New Client (5 minutes)

```bash
./setup-client.sh "Client Name" "Client Company Name"
```

This creates:
- New project directory
- Environment file template
- Client configuration
- Setup checklist

### 2. Configure Environment (5 minutes)

Edit `.env` with Supabase credentials:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

### 3. Customize (30 minutes to 2 hours)

- Update company information
- Change branding colors
- Add logo
- Update services/pricing
- Customize content

See: `CLIENT_CUSTOMIZATION_GUIDE.md`

### 4. Add Content (20-30 minutes)

Via Supabase dashboard:
- Add projects/portfolio
- Add testimonials
- Set featured items

### 5. Deploy (5 minutes)

Choose your platform:
- GitHub Pages (free)
- Vercel (recommended)
- Netlify

See: `DEPLOYMENT.md`

---

## Project Structure

```
.
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── DetailedServices.tsx
│   │   ├── Portfolio.tsx       # Pulls from database
│   │   ├── Testimonials.tsx    # Pulls from database
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx         # Form saves to database
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── supabase.ts         # Database client
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── logo.png                # Add client logo here
├── supabase/
│   └── migrations/             # Database schema
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment to GitHub Pages
├── DEPLOYMENT.md               # Deployment guide
├── CLIENT_CUSTOMIZATION_GUIDE.md  # For customizing for clients
├── SALES_GUIDE.md              # Sales & pricing info
├── setup-client.sh             # Quick setup script
└── package.json
```

---

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Backend:** Supabase (PostgreSQL)
- **Hosting:** GitHub Pages / Vercel / Netlify
- **Build:** Vite
- **Package Manager:** npm

---

## Database Schema

### Tables:

1. **services** - Your service offerings
2. **projects** - Portfolio/case studies
3. **testimonials** - Client reviews
4. **inquiry_submissions** - Contact form submissions
5. **portfolio_images** - Project images

All tables include Row Level Security (RLS) for data protection.

---

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## Customization

### For Agency Owners (Selling This):

1. Read: `SALES_GUIDE.md` - Pricing, positioning, sales process
2. Use: `setup-client.sh` - Quick client onboarding
3. Reference: `CLIENT_CUSTOMIZATION_GUIDE.md` - Customization steps
4. Follow: `DEPLOYMENT.md` - Deployment options

### For Your Clients (After You Deliver It):

1. **Add Portfolio Projects:**
   - Go to Supabase dashboard
   - Add rows to `projects` table
   - Website updates automatically

2. **Add Testimonials:**
   - Go to Supabase dashboard
   - Add rows to `testimonials` table
   - Website updates automatically

3. **View Inquiries:**
   - Check `inquiry_submissions` table
   - All form submissions appear here

---

## Pricing & Packages

### Starter: $600
- Basic setup
- GitHub Pages hosting
- 3-day delivery

### Professional: $1,500
- Custom domain
- Full customization
- Vercel deployment
- 5-day delivery

### Premium: $3,500
- Everything above
- Additional custom pages
- Phone support
- 2-week delivery

### Retainer: $200-500/month
- Ongoing updates
- Content management
- Support & monitoring

See `SALES_GUIDE.md` for full pricing strategy.

---

## Deployment Options

### GitHub Pages (Free)
- Setup: 2 minutes
- Perfect for: Free hosting, portfolios
- See: `DEPLOYMENT.md` → Option 1

### Vercel (Recommended)
- Setup: 5 minutes
- Perfect for: Professional deployments, auto-updates
- Cost: Free tier available ($20+/month for custom domains)
- See: `DEPLOYMENT.md` → Option 3

### Netlify
- Setup: 5 minutes
- Perfect for: Professional deployments
- Cost: Free tier available
- See: `DEPLOYMENT.md` → Option 4

### Custom Domain
- Cost: $10-15/year
- Setup: 15 minutes (DNS configuration)
- See: `DEPLOYMENT.md` → Custom Domain section

---

## Performance & SEO

✓ **Lighthouse Score:** 90+ (mobile & desktop)
✓ **Mobile Responsive:** All devices from 320px to 4K
✓ **Fast Loading:** <2 seconds avg
✓ **SEO Ready:** Meta tags, Open Graph, structured data
✓ **Accessibility:** WCAG AA compliant
✓ **Security:** RLS, HTTPS, no secrets exposed

---

## Support

### For Your Customers:

**Via Supabase Dashboard:**
- View inquiries in real-time
- Manage projects and testimonials
- Monitor performance

**Email Support:**
- Included in packages
- Response time: 24-48 hours

**Documentation:**
- CLIENT_CUSTOMIZATION_GUIDE.md
- Video tutorials (optional)
- Step-by-step guides

### For You (Agency Owner):

**Documentation:**
- DEPLOYMENT.md
- SALES_GUIDE.md
- CLIENT_CUSTOMIZATION_GUIDE.md

**Quick Help:**
1. Check relevant .md file
2. Search codebase
3. Modify component and redeploy

---

## Making Your First Sale

### 1. Identify 5 Prospects
- Local software companies
- Freelance developers
- Design agencies
- Consulting firms

### 2. Send Outreach Email
- Reference: `SALES_GUIDE.md` → Email Template
- Personalize for each prospect
- Include demo link

### 3. Get Meeting
- Show portfolio demo
- Discuss their needs
- Present pricing

### 4. Close Deal
- Send proposal
- Get signature
- Collect deposit

### 5. Deliver Exceptional Result
- Quick turnaround
- Responsive communication
- Quality output

### 6. Ask for Referral
- Request testimonial
- Offer referral commission (20%)
- Build relationship

---

## Retainer Model

After delivering website:

**Offer Monthly Support ($200-500):**
- Content updates
- Performance monitoring
- Security updates
- New features
- Priority support

**Annual Contract:** $2,000-5,000 (better margin)

---

## Scaling Your Business

**Month 1:** Get first 2-3 clients
**Month 2:** Optimize process, get 5-6 clients
**Month 3:** Hire support person, 10+ clients
**Month 6:** Hire developer, 20+ clients
**Year 1:** $50,000+ revenue potential

---

## License

This template is for use by software development agencies and service businesses. Modify freely for your clients.

---

## Getting Started

### For Agency Owners:
1. Read `SALES_GUIDE.md` first
2. Understand your value proposition
3. Identify first 5 prospects
4. Send outreach emails

### For Client Setup:
```bash
./setup-client.sh "Client Name" "Company Name"
cd clients/company-name
npm install
npm run dev
```

### For Deployment:
See `DEPLOYMENT.md` - choose your platform (GitHub Pages, Vercel, Netlify)

---

## Questions?

Check the relevant documentation:
- **Selling:** `SALES_GUIDE.md`
- **Customizing:** `CLIENT_CUSTOMIZATION_GUIDE.md`
- **Deploying:** `DEPLOYMENT.md`

---

**Ready to make your first sale? Start with the SALES_GUIDE.md!**
