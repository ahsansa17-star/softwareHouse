# Quick Reference Card

## For Selling This Website

### Your Elevator Pitch (30 sec)
"I create professional software house websites that go live in 48 hours. Includes portfolio management, client testimonials, and contact tracking. Normally costs $5-10k and takes weeks, but I deliver for $600-3500 because I've templated the process."

### Pricing at a Glance
| Package | Price | Time | Hosting |
|---------|-------|------|---------|
| Starter | $600 | 3 days | GitHub Pages |
| Professional | $1,500 | 5 days | Custom Domain |
| Premium | $3,500 | 2 weeks | Full Custom |
| Retainer | $200-500/mo | Ongoing | All included |

### What You're Really Selling
✓ Speed (48 hours vs 2-3 weeks)
✓ Cost ($600 vs $5,000+)
✓ Features (portfolio, testimonials, inquiries)
✓ Professionalism (no DIY look)
✓ Support (managed & maintained)

---

## Client Onboarding (5 Steps)

### Step 1: Setup (15 min)
```bash
./setup-client.sh "Client Name" "Company"
```

### Step 2: Configure Supabase (10 min)
- Create Supabase project
- Copy URL & API key
- Update .env file
- Run migrations

### Step 3: Customize (1-2 hours)
- Update company info
- Change colors
- Add logo
- Update services/pricing

### Step 4: Add Content (30 min)
- 5+ projects via Supabase
- 5+ testimonials via Supabase

### Step 5: Deploy (5 min)
- Choose platform (Vercel/GitHub/Netlify)
- Connect repository
- Configure domain
- Go live!

---

## Quick Customization Checklist

### Critical (must do)
- [ ] Company name in header/footer
- [ ] Logo added
- [ ] Contact email
- [ ] Services descriptions

### Important (should do)
- [ ] Brand colors
- [ ] Pricing packages
- [ ] About/hero copy
- [ ] Portfolio projects (3+)
- [ ] Testimonials (3+)

### Nice to Have
- [ ] Additional pages
- [ ] Analytics setup
- [ ] Blog section
- [ ] Team profiles

---

## Deployment Quick Guide

### GitHub Pages (Free)
```
1. Create GitHub repo
2. Enable Pages in settings
3. Push code
4. GitHub automatically deploys
5. Free hosting at github.io
```

### Vercel (Recommended)
```
1. Connect GitHub to Vercel
2. Add environment variables
3. Deploy (auto-deploys on push)
4. Add custom domain (paid)
```

### Netlify
```
1. Connect GitHub to Netlify
2. Set build: npm run build
3. Deploy directory: dist
4. Add environment variables
```

---

## File Quick Reference

| File | Purpose |
|------|---------|
| `src/components/Header.tsx` | Company name, logo, navigation |
| `src/components/Hero.tsx` | Main headline, CTA, stats |
| `src/components/Services.tsx` | Services preview |
| `src/components/Pricing.tsx` | Pricing packages |
| `src/components/Contact.tsx` | Contact form |
| `.env` | Supabase credentials |
| `DEPLOYMENT.md` | Deployment guide |
| `CLIENT_CUSTOMIZATION_GUIDE.md` | How to customize |
| `SALES_GUIDE.md` | Sales strategy & scripts |
| `setup-client.sh` | Auto-setup script |

---

## Commands Cheatsheet

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build production
npm run build

# Preview build locally
npm run preview

# Setup new client
./setup-client.sh "Name" "Company"

# Run type check
npm run typecheck
```

---

## Supabase Content Management

### Add a Project
```
Table: projects
- title: "Project Name"
- description: "What was built"
- category: web_development | ecommerce | branding | software
- client_name: "Client Company"
- completed_at: YYYY-MM-DD
- technologies: ["React", "Node.js", "PostgreSQL"]
- results: "Key achievement"
- featured: true
```

### Add Testimonial
```
Table: testimonials
- client_name: "John Doe"
- company_name: "Company Inc"
- role: "Director"
- content: "Amazing work!"
- rating: 5
- featured: true
```

### View Inquiries
```
Table: inquiry_submissions
- All form submissions appear here
- Track: name, email, company, service, message
- Mark: read, responded
```

---

## Common Issues & Fixes

### Website not updating after I deployed?
- Check GitHub Actions logs
- Verify environment variables
- Clear browser cache (Ctrl+Shift+Delete)

### Forms not submitting?
- Check Supabase credentials in .env
- Verify RLS policies are correct
- Check browser console for errors

### Database not showing data?
- Refresh page (React caches data)
- Check if featured = true
- Verify RLS policies allow reads

### Domain not working?
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate status

---

## Sales Conversation Starters

**For Cold Outreach:**
"I help software companies get professional websites live in 48 hours. Most agencies I work with say their old process took 3 weeks and cost $8000+. I've templated it, so I can do it for $1500 and 5 days. Want to see a demo?"

**For Referrals:**
"Do you know anyone who's been wanting a website but hasn't pulled the trigger? I'm helping software companies and agencies get professional sites live fast. Happy to give you a referral commission."

**For Follow-ups:**
"How are you thinking about your web presence this quarter? I have a few spots open in my schedule for new clients. What's holding you back from having a website?"

---

## Retention & Upsells

### After Launch Ask:
"Would you like me on retainer to handle updates, new projects, and content management? It's $[200-500]/month."

### Quarterly Check-In:
"How's the website performing? Traffic up? Leads good? Want me to add [feature]?"

### Add-Ons to Offer:
- Blog section ($500)
- Email automation ($400)
- CRM integration ($1000)
- Advanced analytics ($300)
- Team member profiles ($600)
- Client case study section ($800)

---

## 30-Day Action Plan

**Week 1:** Create marketing materials
- Screenshot gallery
- Pricing page
- Demo video

**Week 2:** Outreach to 20 prospects
- 10 LinkedIn messages
- 10 cold emails
- 2-3 phone calls

**Week 3:** Close first deal
- Send proposals
- Follow up daily
- Negotiate terms

**Week 4:** Deliver exceptional first project
- Fast turnaround
- Great communication
- Ask for testimonial

---

## Keep This Handy

Bookmark these files:
1. **SALES_GUIDE.md** - Your bible for selling
2. **CLIENT_CUSTOMIZATION_GUIDE.md** - Quick reference while customizing
3. **DEPLOYMENT.md** - When deploying
4. **This file** - For quick lookups

---

**You're ready to make your first sale! Pick up the phone and start calling prospects today.**
