# Deployment & Sales Guide

## Quick Sales Points

This is a **production-ready Software House website** with:
- Modern React/TypeScript architecture
- Supabase backend integration
- Contact form with database storage
- Portfolio & testimonials management
- Fully responsive design
- SEO-optimized
- **Zero-config deployment to GitHub Pages or custom domain**

---

## Deployment Options

### Option 1: GitHub Pages (Free)

Perfect for clients who want a free, simple solution.

1. **Create a GitHub repository**
   ```bash
   git init
   git remote add origin https://github.com/YOUR-USERNAME/SOFTWARE-HOUSE.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/dist`
   - Click Save

3. **Update vite.config.ts** for GitHub Pages (if using subdirectory)
   ```typescript
   export default defineConfig({
     base: '/repository-name/', // Only if deploying to subdirectory
     plugins: [react()],
   })
   ```

4. **Deploy automatically with GitHub Actions**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

5. **Your site is live at**: `https://YOUR-USERNAME.github.io/repository-name`

### Option 2: Custom Domain (Recommended)

For clients wanting their own domain.

**With GitHub Pages + Custom Domain:**
1. Add `CNAME` file to `public/` folder:
   ```
   yourdomain.com
   ```

2. Point domain DNS records to GitHub:
   - Create A records pointing to GitHub IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME: `yourusername.github.io`

3. Enable HTTPS in repository Settings

**Live at**: `https://yourdomain.com`

### Option 3: Vercel (Recommended - Professional)

Easiest with best performance.

1. **Connect GitHub to Vercel**
   - Visit vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Vercel auto-detects Next.js/Vite config

2. **Set Environment Variables**
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_ANON_KEY`

3. **Automatic deploys** on every push to `main`

4. **Add custom domain** in Vercel Settings

### Option 4: Netlify

Comparable to Vercel, also easy.

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables
5. Domain settings

---

## Supabase Setup for Clients

### For Each Client:

1. **Create a Supabase project**
   - Go to supabase.com
   - Create new project
   - Copy credentials

2. **Run migrations** (one-time setup)
   - Access Supabase SQL editor
   - Run the migration files from `supabase/migrations/`

3. **Add environment variables** to deployment platform:
   ```
   VITE_SUPABASE_URL=https://xxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJ...
   ```

---

## Customization for Clients

### Edit these files for branding:

**1. Company Name** (`src/components/Footer.tsx`, `src/components/Header.tsx`)
```typescript
const COMPANY_NAME = "Your Software House";
```

**2. Colors** (`src/index.css` - add CSS variables)
```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #10b981;
}
```

**3. Content** (`src/components/*.tsx`)
- Hero title and description
- Services descriptions
- Pricing packages
- Contact information

**4. Database Content** (via Supabase dashboard)
- Services
- Projects/Portfolio
- Testimonials

---

## Pricing Strategy

### For Clients:

| Package | Price | Includes |
|---------|-------|----------|
| **Starter** | $500-1,000 | Website setup + Supabase DB |
| **Business** | $1,500-3,000 | Starter + Custom domain + Content |
| **Premium** | $3,000-5,000 | Business + Full customization + 3mo support |
| **Maintenance** | $50-200/month | Updates, backups, support |

### Your Delivery Timeline:

1. **Day 1**: Client signs contract
2. **Day 2**: Setup Supabase, GitHub repo, deployment
3. **Day 3**: Customize branding, add content
4. **Day 4**: Client review & feedback
5. **Day 5**: Go live, handoff documentation

---

## Client Handoff Documentation

Create this for each client:

```markdown
# Your Software House Website - Setup Guide

## Dashboard Access
- Supabase: [link]
- GitHub: [link]
- Deployment: [link]

## How to Update Content

### Add a Project
1. Go to Supabase → Projects table
2. Click "Insert row"
3. Fill in: title, description, category, client_name, results, technologies
4. Save - updates appear in 1-2 minutes

### Add a Testimonial
1. Go to Supabase → Testimonials table
2. Click "Insert row"
3. Fill in: client_name, company, role, content, rating
4. Set featured: true
5. Save

### View Inquiries
All contact form submissions appear in: Inquiry Submissions table

## Support
- Email: support@yoursoftwarehouse.com
- Hours: 9am-6pm EST
```

---

## Scale Your Business

### Service Offerings:

1. **Website Only** ($500-1,000)
   - Deploy template
   - Basic customization

2. **Website + Content** ($1,500-2,000)
   - All above
   - Database setup
   - Sample projects/testimonials

3. **Website + Content + Design** ($2,500-4,000)
   - All above
   - Custom branding
   - Logo integration
   - Color scheme customization

4. **Full Custom Development** ($5,000+)
   - Based on requirements
   - Add custom sections
   - Extra pages
   - Advanced integrations

### Retainer Model ($200-500/month):
- Monthly updates
- Content management
- Performance monitoring
- Security patches
- 24/7 support
- New feature additions

---

## SEO & Performance

Website includes:
- Mobile responsive design
- Fast load times (Vite optimized)
- Semantic HTML
- Meta tags
- Open Graph support

**Boost SEO for clients:**
1. Add robots.txt
2. Create sitemap.xml
3. Submit to Google Search Console
4. Add Analytics (Google Analytics)

---

## Marketing Your Solution

### Sell as:
- "Ready-to-Launch Software House Website"
- "Professional B2B Service Website in Days"
- "AI-Powered Portfolio & Service Platform"

### Target Customers:
- Software agencies
- Design studios
- Development shops
- Consulting firms
- AI/Tech startups

### Sales Copy:
*"Get a professional, conversion-optimized software house website live in 48 hours. Includes portfolio, testimonials, contact management, and analytics. Start attracting clients today."*

---

## Post-Launch Support

1. **Performance Monitoring**
   - Check Vercel/GitHub analytics
   - Monitor database usage

2. **Backups**
   - Automatic with Supabase
   - GitHub keeps all versions

3. **Updates**
   - Deploy new features from main repo
   - Push to client's deployment

4. **Security**
   - Keep dependencies updated
   - Run `npm audit`
   - Enable RLS (already done)

---

## Troubleshooting for Clients

**Forms not submitting?**
- Check Supabase URL and key
- Verify RLS policies
- Check browser console for errors

**Site not deploying?**
- Check GitHub Actions logs
- Verify environment variables
- Check build output

**Database not updating?**
- Refresh page (React query cache)
- Check RLS policies
- Verify internet connection

---

## Template Repository

Keep a master repository with:
```
software-house-website/
├── src/
├── public/
├── supabase/migrations/
├── DEPLOYMENT.md (this file)
├── CLIENT_SETUP.md
├── CUSTOMIZATION_GUIDE.md
└── package.json
```

Clone for each client, customize, and deploy.

---

## Next Steps

1. Create GitHub organization (optional)
2. Set up Supabase template project
3. Create client onboarding checklist
4. Build sales landing page
5. Start outreach

**Ready to make your first sale?** 🚀
