# Karan Khandelwal — Premium Personal Portfolio Website 🚀

A production-quality personal portfolio website developed for **Karan Khandelwal** (Aspiring Generative AI Developer, Web Developer, Python Developer & Digital Creator).

Built with a clean, modern, responsive **React + TypeScript + Tailwind CSS** architecture, tailored for visual fidelity, accessible semantics, and seamless compatibility with Google Chrome and the **Swarm Rebuild** Chrome extension.

---

## 🌟 Overview & Highlights

- **Visual Identity**: Premium dark aesthetic (`#090A0F`), deep charcoal surfaces, electric blue accents, purple gradients, and glassmorphic card layouts.
- **Chrome & Swarm Rebuild Optimized**: Predictable DOM tree, semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), unambiguous IDs for every section, clean layout boundaries, and no overlapping elements that disrupt visual reconstruction.
- **Zero Mockup Dependencies**: Functional source code, interactive modals, responsive mobile drawer, working tabs, and honest representation of experience.

---

## 📋 Complete Section Catalog

| Section | ID | Description |
| :--- | :--- | :--- |
| **Header / Navbar** | `header` | Sticky glassmorphic bar, mobile drawer, quick CV & Let's Talk actions |
| **Hero Section** | `#home` | Animated rotating roles, bold headline, availability badge, portrait placeholder |
| **About Me** | `#about` | Background bio & 4 information cards (Education, Location, Focus, Work) |
| **Technical Skills** | `#skills` | Categorized interactive tabs: Languages, Web Dev, AI, Creative Skills, Tools |
| **Services I Offer** | `#services` | 7 client services with target client filters & inquiry triggers |
| **Featured Projects** | `#projects` | 6 projects with illustrative mockups, tech badges, and modal deep-dives |
| **Certifications** | `#certifications`| Skill India Python, Internshala Data Science, and verified Internshala Internship certificate |
| **Journey Timeline** | `#journey` | Vertical chronological milestone path from academics to client work |
| **Working Approach**| `#approach`| 6 core engineering principles & client-first work ethics |
| **Future Interests** | `#future` | "What's Next?" technology vision and developer quote |
| **Resume Showcase** | `#resume` | Interactive multi-tab CV viewer + instant download triggers |
| **Contact & Hire** | `#contact` | Functional contact form, email copy, and Fiverr/Freelancer placeholders |
| **Footer** | `footer` | Quick sitemap, copyright 2026, social profiles, and scroll-to-top |

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3 with custom glassmorphism and theme extensions
- **Icons**: Lucide React
- **Build Tool**: Vite 6
- **Language**: TypeScript 5 with strict typing

---

## 🚀 Running the Website Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ (tested on Node.js v24)
- npm or pnpm

### Quick Start Commands
```bash
# 1. Navigate to the project directory
cd "C:\Program Files (x86)\My Projects\MY Portfolio"

# 2. Install dependencies (already pre-installed)
npm install

# 3. Start local development server
npm run dev
```

The application will run at **`http://localhost:3000`** (or next available port). Open it in **Google Chrome**.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🧩 Using with Swarm Rebuild Chrome Extension

1. Ensure the website development server is running locally (`npm run dev` at `http://localhost:3000`).
2. Open **Google Chrome** and navigate to:
   ```
   http://localhost:3000
   ```
3. Open your installed **Swarm Rebuild** Chrome extension from the Chrome extensions toolbar.
4. The extension will inspect the clean, semantic DOM hierarchy (`<header>`, `<nav>`, `<main>`, `<section id="...">`, `<article>`, `<footer>`) to perform the visual reconstruction demonstration.
5. All cards, buttons, modals, and typography are styled with predictable CSS box models to ensure clean reconstruction.

---

## 🌐 Cloud Deployment Guide

This project can be deployed instantly to **Vercel**, **Netlify**, or **GitHub Pages**:

### Vercel (Recommended)
1. Push the code to your GitHub repository (`https://github.com/Karankhandelwal18/portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your repository. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your portfolio will be live with free global CDN and HTTPS!

### Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Click **Deploy Site**.

---

## 📄 License
Created for **Karan Khandelwal**. All rights reserved.
