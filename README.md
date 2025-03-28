# Frontier - Architectural Magazine Platform

A modern web application for browsing and reading architectural magazines, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📚 Interactive magazine browsing with a beautiful grid layout
- 📖 PDF viewer with page-flip animation
- 🎨 Modern, responsive design
- 🚀 Fast page loads with Next.js
- 📱 Mobile-friendly interface
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **PDF Handling**: react-pdf
- **Icons**: react-icons
- **Page Flip**: react-pageflip

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/frontier.git
cd frontier
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontier/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
├── .env.local         # Environment variables
├── package.json       # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - A production-ready motion library for React
- [react-pdf](https://react-pdf.org/) - PDF rendering for React
- [react-pageflip](https://github.com/Nodlik/react-pageflip) - Page flip effect for React
