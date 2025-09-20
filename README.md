# Poké-Start

A [SolidStart](https://start.solidjs.com) demo application showcasing single-flight mutations vs multi-flight requests for adding Pokémon data.

## Features

- **Single-flight mutations**: Server-side form handling with automatic redirects
- **Multi-flight requests**: Client-side form submission with manual navigation
- **Pokémon gallery**: Browse a collection of 150 original Pokémon
- **Neon database integration**: PostgreSQL with automatic seeding

## Tech Stack

- **Frontend**: SolidJS with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL
- **Build tool**: Vinxi
- **Router**: Solid-Router

## Getting Started

### Prerequisites

| Tool    | Version |
| ------- | ------- |
| Node.js | >=20    |
| pnpm    | >=9     |

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. When running dev for the first time, your env will be setup with a fresh postgres instance by [Neon Launchpad](https://neon.new).

4. Start the development server:
   ```bash
   pnpm dev
   ```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm format` - Format code with Prettier

## Demo Comparison

The app demonstrates two approaches to form submission:

### Single-flight (`/single`)

- Uses SolidJS server actions
- Automatic page refresh and redirect
- Better UX with server-side validation
- Follows web standards

### Multi-flight (`/multi`)

- Client-side form handling
- Manual navigation after submission
- Multiple round trips to server
- More JavaScript-heavy approach

**Takeaway**: Use single-flight mutations for better performance and user experience!
