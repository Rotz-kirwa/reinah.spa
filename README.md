# Reinaha's Spa - Digital Oasis

A luxury spa and wellness website showcasing premium treatments and booking experiences.

## Getting Started

### Prerequisites

- Node.js (v16+) or Bun
- Git

### Installation & Development

1. Clone the repository and navigate to the project directory

2. Install dependencies:
```sh
bun install
# or
npm install
```

3. Start the development server:
```sh
bun run dev
# or
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run test` - Run tests
- `bun run lint` - Run linter

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components (Home, Services, Booking, etc.)
├── data/               # Static data (services list)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and media
└── App.tsx             # Main app component with routing
```

## Technologies

- **Vite** - Next generation build tool
- **React 18** - JavaScript library for building UIs
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality React components
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Performant form handling
- **TanStack React Query** - Data fetching and caching

## Deployment

Build the production-ready bundle:
```sh
bun run build
```

This creates a `dist` folder with optimized assets ready for deployment on any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
