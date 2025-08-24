# Radim Hruška - Personal Portfolio Website

Modern personal portfolio website showcasing professional software development skills and experience. Built with Next.js and Tailwind CSS.

## About

This portfolio represents Radim Hruška, a freelance software developer and student at FIT VUT (Faculty of Information Technology, Brno University of Technology). The website showcases expertise in mobile, desktop, and web application development with a focus on modern technologies and professional solutions.

## Professional Background

- **Freelance Software Developer** - Specializing in web, mobile, and desktop applications
- **Student at FIT VUT** - Studying software engineering and modern technologies
- **Experience with:** C#, .NET, .NET MAUI, WPF, PHP, JavaScript, React, Ionic, Swift, Flutter
- **Additional expertise:** AI/ML, blockchain technologies, networking, IT support, cross-platform development

## Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Animated Starry Background** - Custom canvas-based animation for visual appeal
- **Bilingual Support** - Czech and English language support
- **Professional Sections** - Hero, About, Experience & Education, Projects, Contact
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance Optimized** - Fast loading times and SEO-friendly structure
- **Dark Theme** - Professional dark mode for comfortable browsing

## Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Roboto Mono)
- **Deployment**: [Vercel](https://vercel.com/) for seamless hosting
- **State Management**: React Context for language switching
- **Animations**: Custom CSS animations and HTML Canvas

## Development Skills Highlighted

### Programming Languages & Frameworks
- C#, .NET, .NET MAUI, WPF
- PHP, JavaScript, React, Ionic
- Swift, Flutter

### Web Technologies
- HTML5, CSS, React, Ionic

### Operating Systems & Platforms
- Windows, Linux, macOS

### Additional Expertise
- Mobile Development, Web Development, Desktop Development
- AI & Machine Learning, Blockchain, Cryptocurrencies
- Networking, IT Support, Hardware Fundamentals
- Project Management

## Running Locally

```bash
# Clone repository
git clone https://github.com/RadimHruska/RadimHruska.github.io.git
cd RadimHruska.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
RadimHruska.github.io/
├── public/            # Static files (images, icons)
├── src/
│   ├── app/           # App Router (Next.js 14)
│   ├── components/    # React components
│   │   ├── layout/    # Layout components (Header, Footer)
│   │   ├── sections/  # Page sections (Hero, About, Experience, etc.)
│   │   └── context/   # Language context
│   └── styles/        # Global styles
├── tailwind.config.js # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## Key Components

- **Hero Section** - Professional introduction with animated typing effect
- **About Section** - Detailed professional background and skills
- **Experience & Education** - Tabbed interface showing work history and education
- **Projects Section** - Showcase of development work
- **Contact Section** - Professional contact information
- **StarryBackground** - Custom animated background component
- **LanguageContext** - Bilingual support implementation

## Technical Solutions

### Hydration Issue Resolution
The project uses a special solution for the animated starry background, which is rendered using HTML Canvas. To prevent hydration issues in Next.js:

1. `NoSSR` component to prevent server-side rendering
2. `suppressHydrationWarning` attribute on canvas element
3. Proper client-side only rendering for animations

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for better performance
- Optimized bundle size with tree shaking
- Efficient CSS with Tailwind's purge feature

## License

MIT License - Feel free to use this code for your own portfolio projects.

## Contact

- **Website**: [radimhruska.eu](https://radimhruska.eu)
- **Location**: Brno, South Moravian Region, Czech Republic
- **Professional Focus**: Freelance Software Development, Web & Mobile & Desktop Apps 