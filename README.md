# Databayt

Reclaim your time by automating the boring. Databayt is a business automation service provider offering solutions to save time and effort. Free. Open Source. **Use this to build your own compact codebase**.

<br>

![hero](public/readme/stack.png)

<br>

## Overview

Databayt is a modern web application built with Next.js 15 that offers business automation services and solutions. The platform features:

- 🌍 **Multilingual Support** (English and Arabic)
- 🎨 **Modern UI** with Tailwind CSS and Radix UI components
- 🔍 **Customizable Templates** for business automation
- 📚 **Comprehensive Documentation** for users and developers
- 🧩 **Component Library** built on shadcn/ui
- 🔄 **Light/Dark Mode** with theme support
- 📱 **Responsive Design** for all devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: Jotai
- **Forms**: React Hook Form with Zod
- **Internationalization**: React Intl
- **Icons**: Lucide React
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/databayt.git
cd databayt
```

1. Install dependencies:

```bash
pnpm install
```

1. Run the development server:

```bash
pnpm dev
```

1. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

```text
databayt/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── ui/          # UI components
│   │   ├── landing/     # Landing page components
│   │   ├── docs/        # Documentation components
│   │   └── wizard/      # Setup wizard components
│   ├── config/          # Configuration files
│   ├── hooks/           # Custom React hooks
│   ├── i18n/            # Internationalization
│   ├── lib/             # Utility functions
│   ├── styles/          # CSS styles
│   └── types/           # TypeScript types
└── components.json      # shadcn/ui configuration
```

## Development Guidelines

### Component Development

- Use TypeScript for all components
- Follow the component structure from shadcn/ui
- Place shared UI components in `src/components/ui`
- Create feature-specific components in their respective directories

### Styling

- Use Tailwind CSS for styling
- Use CSS variables for theme values
- Follow the BEM-like naming convention for custom CSS classes

### Internationalization

- Add new text strings to `src/i18n/locales/en.json`
- Add Arabic translations to `src/i18n/locales/ar.json`
- Use the React Intl hooks for translated content

### Adding New Features

1. Create components in appropriate directories
2. Update pages in the App Router
3. Add i18n translations for any new text
4. Test in both light and dark modes
5. Ensure responsive design works on all devices

## Documentation

Visit [http://databayt.org/docs](http://databayt.org/docs) to view the complete documentation.

## Contributing

We welcome contributions from everyone. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests and ensure code quality
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Open a Pull Request

For more detailed information, see our documentation.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
