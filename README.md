# SaaS Kit - Commercial & White Label Ready

## 🚀 Rebranding Guide (White Label)

This application is designed to be easily white-labeled. You can change the global branding in **one single file**.

### 1. Edit Configuration

Open `src/config.js` to change the App Name, Logo, Tagline, and other details.

```javascript
// src/config.js
export const config = {
  appName: "Your Brand Name",
  appLogo: "🚀", // Or an image URL
  companyName: "Your Company Ltd",
  tagline: "The Ultimate Solution for X",
  supportEmail: "support@yourdomain.com",
  theme: {
    primaryColor: "#3b3286", // Implementation depends on Tailwind config
  },
};
```

### 2. Update Assets

- Replace `public/vite.svg` with your favicon.
- Replace any static images in `src/assets` if applicable.

### 3. Stripe Integration

To enable payments:

1. Create a **Payment Link** in your Stripe Dashboard.
2. Open `src/pages/Settings.jsx`.
3. Replace the placeholder URL in the `handleUpgrade` function.

```javascript
// src/pages/Settings.jsx
const paymentLink = "https://buy.stripe.com/your-live-link";
```

### 4. Database Setup (Supabase)

Run the SQL migration scripts in your Supabase SQL Editor:

1. `schema.sql` (Initial setup)
2. `seed.sql` (Dummy data)
3. `alter_profiles.sql` (Subscription support)

## 📦 Deployment

This is a standard Vite + React application.

- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Deploy**: Vercel, Netlify, or AWS Amplify (Drag & drop `dist` folder).
