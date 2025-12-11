# Secret Santa Webapp

A standalone, browser-based Secret Santa application built with Next.js and Local Storage.

## Features

- ✅ Create Secret Santa events
- ✅ Manage participants locally
- ✅ Set exclusion rules
- ✅ Generate random assignments
- ✅ Reveal assignments on-screen
- ✅ Persist data in browser Local Storage
- ✅ Export/Import events

## Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Storage:** Browser Local Storage
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/festus971/secret-santa.git
cd secret-santa
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Code Formatting

```bash
npm run format
```

## Project Structure

```
secret-santa/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── event/
│       ├── page.tsx       # Event management
│       └── reveal/
│           └── page.tsx   # Assignment reveal
├── components/            # Reusable React components
├── lib/                   # Utility functions & types
│   ├── types.ts          # TypeScript interfaces
│   ├── algorithms.ts     # Assignment logic
│   └── storage.ts        # Local Storage utilities
├── styles/               # Global styles
├── public/               # Static assets
└── package.json
```

## License

MIT