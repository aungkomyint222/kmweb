# React GIF Animation Maker

A web-based tool for creating frame-by-frame animations and exporting them as GIFs, built with Next.js and React.

## Features

- 🎨 Draw shapes (rectangles and circles) using mouse interactions
- 🎞️ Frame-by-frame animation creation
- ⚡ Real-time preview of animations
- 💾 Export animations as GIF files
- ⌨️ Keyboard shortcuts for quick actions
- 🎮 Adjustable FPS (frames per second)
- ↩️ Undo functionality for drawings

## Keyboard Shortcuts

- `R` - Select Rectangle tool
- `C` - Select Circle tool
- `P` - Play/Pause animation
- `N` - Add new frame
- `D` - Clear current drawing
- `S` - Step back (undo last shape)
- `A` - Clear all frames
- `G` - Export as GIF

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
kmweb/
├── app/                    # Next.js 14 app directory
│   ├── components/        # Reusable UI components
│   ├── lib/              # Utility functions and shared logic
│   ├── styles/           # Global styles and CSS modules
│   └── page.js           # Main page component
├── public/               # Static files
└── package.json          # Project dependencies
```

## Development

1. Clone the repository
```bash
git clone [your-repo-url]
cd kmweb
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

## Contributing

### Development Setup

1. Fork and clone the repository
2. Install dependencies:
```bash
npm install
```
3. Add the GIF.js worker file:
   - Create a `public` folder if it doesn't exist
   - Download `gif.worker.js` from [gif.js](https://github.com/jnordberg/gif.js) and place it in the public folder

### Areas for Contribution

- 🎨 New shape tools (triangles, free-hand drawing)
- 🎨 Color picker for shapes
- 💾 Save/load animation projects
- 📱 Touch screen support
- 🔧 Performance optimizations
- 🎞️ Animation easing functions
- 📋 Layer management
- 🔍 Preview size options

### Code Style Guidelines

- Use functional components with hooks
- Follow React best practices
- Maintain existing code formatting
- Add comments for complex logic
- Write clean, reusable code
- Include proper TypeScript types

### Pull Request Process

1. Create a feature branch
2. Update documentation
3. Test your changes
4. Submit a PR with a clear description
5. Wait for review and address feedback

## Tech Stack

- Next.js 14
- React (Hooks)
- GIF.js for animation export
- TailwindCSS for styling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT License - feel free to use in your own projects!

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/kmweb](https://github.com/yourusername/kmweb)
