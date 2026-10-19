# Hello World App

A beautifully designed Hello World application by AI QWEN CODE editor built with modern web technologies.

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-teal)

## ✨ Features

- 🎨 Animated gradient background with floating orbs
- 👋 Bouncing emoji that cycles through fun icons
- 🌈 Gradient text effects
- 💎 Glassmorphism card design
- 📱 Fully responsive layout
- ⚡ Smooth entrance animations
- 🔄 Rotating emoji display (👋 🌍 ✨ 🚀 💫 🎉)

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library with hooks |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first CSS framework |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd hello-world-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies & scripts
```

## 🎨 Customization

To customize the app, edit `src/App.tsx`:

- **Change colors**: Modify the gradient classes (e.g., `from-indigo-900 via-purple-900 to-pink-800`)
- **Add emojis**: Update the `emojis` array in the `useEffect` hook
- **Change text**: Edit the heading and subtitle in the JSX
- **Adjust animations**: Modify transition durations and animation classes

## 📜 License

MIT
