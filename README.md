# MwanaWev Visionary Canvas

A modern, responsive website showcasing MwanaWev - a dynamic holding company and innovation hub that creates and nurtures businesses addressing real-world challenges through technology and creative solutions.

## 🚀 Features

- **Hero Section**: Engaging video background with company introduction
- **About Section**: Vision and mission statements
- **Company Segments**: Showcase of different business divisions
- **Ecosystem**: Visual representation of the company ecosystem
- **Team**: Team member profiles and information
- **Impact Stats**: Key statistics and achievements
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM 6.30.1
- **Data Fetching**: TanStack Query 5.83.0
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mwanawev-visionary-canvas
```

2. Install dependencies:
```bash
npm install
```

Or if you're using Bun:
```bash
bun install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Build for development:

```bash
npm run build:dev
```

Preview the production build:

```bash
npm run preview
```

## 🔍 Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## 📁 Project Structure

```
mwanawev-visionary-canvas/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/             # Images, videos, fonts
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── CompanySegments.tsx
│   │   ├── Ecosystem.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ImpactStats.tsx
│   │   ├── Navigation.tsx
│   │   └── Team.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Customize colors, fonts, and other design tokens in `tailwind.config.ts`.

### Components

All UI components are located in `src/components/ui/` and are built with shadcn/ui. You can customize or add new components as needed.

### Assets

Place images, videos, and other media files in `src/assets/`. The project includes:
- Hero background video
- Team member photos
- Company segment images
- Custom fonts (Alro)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 About MwanaWev

MwanaWev is a dynamic holding company that serves as an innovation hub, creating and nurturing businesses that address real-world challenges through technology and creative solutions. The company focuses on:

- **Technology**: FinTech, Drone Technology, Satellite Services
- **Conservation**: Environmental protection and sustainability
- **Education**: Empowering communities through knowledge
- **Community**: Building strong, connected communities

## 🔗 Links

- Twitter: [@MwanaWev](https://twitter.com/)
- Instagram: [@MwanaWev](https://instagram.com/)
- LinkedIn: [MwanaWev](https://www.linkedin.com/)
- YouTube: [MwanaWev](https://www.youtube.com/)

---

Built with ❤️ using React, TypeScript, and Vite
