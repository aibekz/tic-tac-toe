# 🎮 Tic-Tac-Toe Game v1.0

A modern, interactive Tic-Tac-Toe game built with React, TypeScript, and Tailwind CSS. Features a clean UI, move history with time travel, and responsive design.

![Tic-Tac-Toe Game](https://img.shields.io/badge/Game-Tic--Tac--Toe-blue)
![React](https://img.shields.io/badge/React-19.1.1-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-38bdf8)

## 🎮 Play Online

**[🚀 Play the game live here!](https://aibekz.github.io/tic-tac-toe)**

## ✨ Features

- **🎯 Classic Gameplay** - Traditional 3x3 Tic-Tac-Toe with X and O players
- **🏆 Winner Detection** - Automatic detection of wins and draws with visual highlighting
- **📜 Move History** - Complete game history with time travel functionality
- **🔄 Game Reset** - Restart the game at any time
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **♿ Accessibility** - ARIA labels and keyboard navigation support
- **🎨 Modern UI** - Clean, minimalist design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game!

## 🎮 How to Play

1. **Starting the Game** - Player X always goes first
2. **Making Moves** - Click on any empty square to place your mark
3. **Winning** - Get three of your marks in a row (horizontally, vertically, or diagonally)
4. **Time Travel** - Use the move history panel to jump back to any previous game state
5. **Restart** - Click the "Restart" button to start a new game

## 🛠️ Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run type-check`** - Run TypeScript type checking

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Square.tsx       # Individual game square
│   ├── Board.tsx        # 3x3 game board
│   ├── GameStatus.tsx   # Game state display
│   ├── MoveHistory.tsx  # Move history with time travel
│   └── index.ts         # Component exports
├── types/
│   └── game.ts          # TypeScript type definitions
├── utils/
│   └── gameLogic.ts     # Game logic functions
├── TicTacToe.tsx        # Main game component
├── App.jsx              # App wrapper
└── main.jsx             # React entry point
```

## 🧩 Component Architecture

The game is built with a modular component architecture:

- **`Square`** - Handles individual square rendering and click events
- **`Board`** - Manages the 3x3 grid and winning line highlighting
- **`GameStatus`** - Displays current player, winner, or draw state
- **`MoveHistory`** - Provides move history and time travel functionality
- **`TicTacToe`** - Main component orchestrating game state and logic

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Responsive Design** - Mobile-first approach with breakpoint-specific styles
- **Dark/Light Theme** - Clean zinc color palette with good contrast
- **Animations** - Smooth transitions and hover effects

## 🔧 Technologies Used

- **[React 19.1.1](https://react.dev/)** - UI library with modern hooks
- **[TypeScript 5.9.2](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 7.1.0](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Utility-first CSS framework

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Automatic Deployment**
   - The GitHub Action will automatically build and deploy on every push to `main`
   - Your site will be available at: `https://yourusername.github.io/tic-tac-toe/`

### Manual Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Other Deploy Options

- **Vercel** - Connect your GitHub repo for automatic deployments
- **Netlify** - Drag and drop the `dist` folder
- **Any Static Host** - Upload the `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] AI opponent with difficulty levels
- [ ] Online multiplayer support
- [ ] Game statistics and win tracking
- [ ] Custom themes and animations
- [ ] Sound effects and music
- [ ] Tournament mode for multiple games

---

**Enjoy playing Tic-Tac-Toe! 🎉**

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
