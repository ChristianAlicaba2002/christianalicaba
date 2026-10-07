# Christian Alicaba — Portfolio

Personal site for [Christian Alicaba](https://christiandev.pages.dev/), a Computer Science student at ACLC College of Mandaue. Built as the [roadmap.sh portfolio project](https://roadmap.sh/projects/portfolio-website).

**Live:** [christiandev.pages.dev](https://christiandev.pages.dev/)

## What’s here

- Intro sequence, then Home, Skills, About, Work, and Contact
- Light and dark mode
- Selected projects with GitHub and live links (where they exist)
- Contact form via Formspree
- Resume download and a dedicated 404 page

## Stack

- React 19, Vite 7, React Router
- Tailwind CSS v4
- Framer Motion
- Formspree
- Cloudflare Pages

## Setup

Needs [Node.js](https://nodejs.org/) 18+. npm, pnpm, or yarn all work.

```bash
git clone git@github.com:ChristianAlicaba2002/My-Portfolio.git
cd My-Portfolio
npm install
cp .env.example .env
```

Set `VITE_FORMSPREE_ID` in `.env` to your Formspree form ID only (not the full URL).

```bash
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
```

## License

Personal project. Code is in this repo for viewing and learning; please don’t republish it as your own portfolio.
