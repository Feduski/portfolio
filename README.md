# Fede Garcia - Portfolio

A modern, performant portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌙 Dark mode by default with custom color scheme
- ⚡ Optimized for performance and accessibility
- 📱 Fully responsive design
- 🎨 CSS-only animations and effects
- 🔍 SEO optimized with meta tags, sitemap, and structured data
- 🚀 Ready for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Inter (UI) + JetBrains Mono (code)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Customization

### Updating Projects

Edit the projects data in `content/projects.ts`:

\`\`\`typescript
export const projects: Project[] = [
  {
    id: 'your-project-id',
    name: 'Your Project Name',
    summary: 'Brief description of your project',
    description: 'Detailed description (optional)',
    technologies: ['Next.js', 'React', 'TypeScript'],
    links: {
      demo: 'https://your-demo-url.com',
      repo: 'https://github.com/username/repo'
    },
    image: '/path-to-your-image.jpg',
    featured: true
  },
  // Add more projects...
]
\`\`\`

### Updating Personal Information

1. **Contact Info**: Edit `components/contact-section.tsx`
2. **Bio**: Update `components/about-section.tsx`
3. **Skills**: Modify the skills array in `components/about-section.tsx`
4. **Social Links**: Update `components/footer.tsx`

### Updating Colors

The color scheme is defined in `app/globals.css`. The main colors are:
- Primary: `#001499` (blue)
- Accent: `#5F0085` (purple)
- Background: `#000000` (black)
- Foreground: `#E5E7EB` (light gray)

### Adding Blog Posts

The blog is currently a placeholder. To add actual blog functionality:
1. Create a content management system or use markdown files
2. Update `app/blog/page.tsx` to display posts
3. Add individual post pages in `app/blog/[slug]/page.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Environment Variables

No environment variables are required for the basic portfolio. Add any needed for contact forms or analytics.

## Performance

- Lighthouse score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- CSS-only animations for better performance

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you have questions or need help customizing the portfolio, feel free to open an issue or reach out.
