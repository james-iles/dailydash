# DailyDash

A personal productivity dashboard built with React. Features a live clock, todo list with local storage persistence, and daily inspiration cards.

**Live Demo:** [thedailydash.stuffbyjames.uk](https://thedailydash.stuffbyjames.uk)

## Features

- **Live Clock** - Real-time date and time display, updating every second
- **Todo List** - Add, complete, and delete tasks with automatic localStorage persistence
- **Daily Quote** - Random motivational quotes with refresh functionality
- **Daily Advice** - Fetches random advice from the [Advice Slip API](https://api.adviceslip.com/)
- **Responsive Design** - Mobile-friendly layout with breakpoints for different screen sizes

## Tech Stack

- **React 18** - Component-based UI
- **Vite** - Build tool and development server
- **CSS3** - Custom properties, flexbox, responsive design
- **localStorage API** - Client-side data persistence

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── App.css                 # Component styles
├── index.css               # Base styles and CSS variables
├── components/
│   ├── DateTime.jsx        # Live clock display
│   ├── TodoForm.jsx        # Task input form
│   ├── TodoList.jsx        # Todo list container
│   ├── TodoItem.jsx        # Individual todo item
│   ├── QuoteCard.jsx       # Random quote display
│   └── AdviceCard.jsx      # API-fetched advice display
└── hooks/
    └── useLocalStorage.js  # Custom hook for localStorage sync
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/james-iles/dailydash.git
cd dailydash

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output files are generated in the `/dist` directory.

## License

MIT
