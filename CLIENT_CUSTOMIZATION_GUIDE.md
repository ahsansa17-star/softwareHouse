# Client Customization Guide

## For Your Customers: How to Customize Their Website

### 1. Update Company Information

**File: `src/components/Header.tsx` & `src/components/Footer.tsx`**

Replace:
```typescript
"NexusDev" → "Your Company Name"
```

Replace:
```typescript
"hello@nexusdev.com" → "their@company.com"
"+92 XXX XXXXXXX" → "Their actual phone"
```

---

### 2. Hero Section Customization

**File: `src/components/Hero.tsx`**

**Hero Title:**
```typescript
// Change from:
"Building Websites, Software & Brands Powered by AI"

// To:
"[Company Name] - Web Development, E-commerce & AI Solutions"
```

**Hero Description:**
```typescript
// Change from:
"From stunning e-commerce stores to intelligent automation systems..."

// To their services
"We create [their specialties]. Serving [their target market]."
```

**Statistics:**
Update these to match their actual numbers:
```typescript
50+ Projects → Their actual project count
30+ Happy Clients → Their actual client count
```

---

### 3. Services Customization

**File: `src/components/Services.tsx`**

If they offer different services, modify:
```typescript
const services = [
  {
    title: 'Service Name',
    description: 'What they do...',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  }
]
```

---

### 4. Pricing Customization

**File: `src/components/Pricing.tsx`**

Update package names and descriptions:
```typescript
const pricingPlans = [
  {
    name: 'Starter Package',
    price: '$500',
    features: [
      'Feature 1',
      'Feature 2'
    ]
  }
]
```

---

### 5. Color Branding

**File: `src/index.css`**

Add at top:
```css
:root {
  --primary-color: #2563eb;      /* Blue */
  --primary-dark: #1e40af;       /* Darker Blue */
  --secondary-color: #10b981;    /* Green */
  --accent-color: #f59e0b;       /* Orange */
}
```

Then use in components:
```css
background-color: var(--primary-color);
```

**Quick Color Changes:**

Search & replace in all components:
- `bg-blue-600` → `bg-[custom-color]`
- `text-blue-600` → `text-[custom-color]`

---

### 6. Portfolio/Projects Setup

**Via Supabase Dashboard:**

1. Go to: Supabase → projects table
2. Click "Insert row"
3. Fill in:
   - **title**: "Project Name"
   - **slug**: "project-name" (lowercase, no spaces)
   - **description**: "What was built"
   - **category**: "web_development" | "ecommerce" | "branding" | "software"
   - **client_name**: "Client Company"
   - **completed_at**: YYYY-MM-DD
   - **technologies**: ["React", "Node.js", "PostgreSQL"]
   - **results**: "Key achievement"
   - **featured**: true (to show on homepage)

---

### 7. Testimonials Setup

**Via Supabase Dashboard:**

1. Go to: Supabase → testimonials table
2. Click "Insert row"
3. Fill in:
   - **client_name**: "John Doe"
   - **company_name**: "Company Inc"
   - **role**: "Director"
   - **content**: "Amazing work!"
   - **rating**: 5
   - **featured**: true (to show on homepage)
   - **verified**: true

---

### 8. Contact Form Email Setup

**File: `src/components/Contact.tsx`**

Currently saves to Supabase. To also send emails:

Add email service (Resend or SendGrid):

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In handleSubmit:
await resend.emails.send({
  from: 'no-reply@company.com',
  to: 'business@company.com',
  subject: `New inquiry from ${formData.name}`,
  html: `<p>Message: ${formData.message}</p>`
});
```

---

### 9. Logo Integration

**File: `src/components/Header.tsx`**

Replace text logo with image logo:
```typescript
// From:
<button className="text-2xl font-bold text-gray-900">
  NexusDev
</button>

// To:
<img src="/logo.png" alt="Company Logo" className="h-8" />
```

Place logo in: `public/logo.png`

---

### 10. Footer Links

**File: `src/components/Footer.tsx`**

Update social media links:
```typescript
<a href="https://facebook.com/their-page">
  <Facebook size={20} />
</a>
```

Update footer links to their pages:
```typescript
<a href="/privacy">Privacy Policy</a>
<a href="/terms">Terms of Service</a>
```

---

### 11. SEO Setup

**File: `index.html`**

Update meta tags:
```html
<title>Your Company - Web Development & E-commerce Services</title>
<meta name="description" content="Professional web development, e-commerce, and AI solutions for businesses.">
<meta property="og:title" content="Your Company">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-domain.com/preview.png">
```

---

### 12. Analytics Setup

**Google Analytics:**

1. Create Google Analytics account
2. Get Tracking ID
3. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

### 13. Additional Pages

To add pages like "Blog" or "About":

1. Create new component: `src/components/BlogSection.tsx`
2. Import in `src/App.tsx`
3. Add scroll link in `Header.tsx`

Example:
```typescript
<button onClick={() => scrollToSection('blog')}>Blog</button>
```

---

### 14. Mobile Responsiveness Check

Website is already responsive, but test on:
- iPhone (375px)
- iPad (768px)
- Desktop (1920px)

Use browser DevTools → Toggle device toolbar

---

### 15. Environment Variables

**File: `.env`**

For Supabase:
```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxxx
```

For production deployment (Vercel/GitHub):
Add same variables in deployment platform settings

---

## Step-by-Step Customization Workflow

### For You (Agency Owner):

1. **Clone template repository**
   ```bash
   git clone https://github.com/yourusername/software-house-website
   cd software-house-website
   ```

2. **Create client branch**
   ```bash
   git checkout -b client-name
   ```

3. **Customize files:**
   - Update company info
   - Change colors
   - Update services/pricing
   - Add logo

4. **Push to client repository**
   ```bash
   git push origin client-name
   ```

5. **Set up Supabase** for client

6. **Deploy** and share link

### For Clients:

1. **Add portfolio projects** via Supabase dashboard
2. **Add testimonials** via Supabase dashboard
3. **Monitor inquiries** in Supabase
4. **Share domain** with you for DNS setup

---

## Common Customization Scenarios

### Scenario 1: Design Studio
- Remove e-commerce focus
- Add portfolio gallery
- Showcase design work
- Add team member profiles

### Scenario 2: Development Agency
- Keep current template
- Add "Our Process" section
- Showcase tech stack
- Add blog section

### Scenario 3: Startup SaaS
- Highlight AI solutions
- Add pricing tiers
- Include API documentation section
- Add FAQ section

### Scenario 4: E-commerce Agency
- Focus on e-commerce packages
- Add case studies
- Show ROI metrics
- Add "How it works" flow

---

## Time Estimates

| Task | Time |
|------|------|
| Basic customization | 30 mins |
| Color branding | 15 mins |
| Logo integration | 10 mins |
| Add 5 projects | 20 mins |
| Add 5 testimonials | 15 mins |
| SEO setup | 20 mins |
| Deploy & test | 20 mins |
| **Total** | **~2 hours** |

---

## Quality Checklist Before Going Live

- [ ] Company name updated everywhere
- [ ] Logo added
- [ ] Colors customized
- [ ] Services updated
- [ ] Pricing correct
- [ ] Contact info correct
- [ ] At least 3 projects added
- [ ] At least 3 testimonials added
- [ ] Social links updated
- [ ] Mobile responsive (tested)
- [ ] Forms working (test submission)
- [ ] Analytics tracking setup
- [ ] Performance tested (Lighthouse >80)
- [ ] SEO tags updated
- [ ] Domain DNS configured
- [ ] HTTPS enabled

---

## Support for Customers

Provide them this info:
- How to access Supabase dashboard
- How to add projects/testimonials
- How to view inquiries
- When to expect updates
- Your support contact info
- Response time SLA

---

**Ready to customize? Start with Header & Footer, then move to Hero section!**
