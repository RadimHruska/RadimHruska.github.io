# Personal Portfolio Website

Modern personal portfolio created using Next.js and Tailwind CSS.

## Features

- Responsive design for all devices
- Animated starry background
- Sections: Introduction, About, Experience, Projects, Contact
- Optimized for performance and SEO
- Dark mode for pleasant browsing

## Technologies

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Roboto Mono)
- **Deployment**: [Vercel](https://vercel.com/)

## Running Locally

```bash
# Clone repository
git clone https://github.com/yourusername/web-portfolio.git
cd web-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
web-portfolio/
├── public/            # Static files (images, icons)
├── src/
│   ├── app/           # App Router (Next.js 13+)
│   ├── components/    # React components
│   │   ├── layout/    # Layout components (Header, Footer)
│   │   └── sections/  # Page sections (Hero, About, etc.)
│   └── styles/        # Global styles
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## Hydration Issue Solution

The project uses a special solution for the animated starry background, which is rendered using HTML Canvas. To prevent hydration issues in Next.js, a combination of:

1. `NoSSR` component to prevent server-side rendering
2. `suppressHydrationWarning` attribute on canvas element

## License

MIT 