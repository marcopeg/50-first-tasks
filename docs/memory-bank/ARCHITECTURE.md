# Architecture

NodeJS Express API server with TypeScript, providing RESTful endpoints and modern web framework capabilities.

# Tech Stack

- **NodeJS** - JavaScript runtime environment  
- **TypeScript** - Type-safe JavaScript with modern ES features
- **ExpressJS** - Web application framework for building APIs
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment configuration management

# Project Structure

```
article/
├── src/                    # TypeScript source code
│   └── index.ts           # Main entry point
├── dist/                  # Compiled JavaScript output (generated)
├── docs/                  # Project documentation
│   ├── backlog/          # Task management and planning
│   └── memory-bank/      # Project knowledge base
├── .husky/               # Git hooks configuration
├── node_modules/         # Dependencies
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint v9 configuration
├── .prettierrc           # Prettier formatting rules
├── commitlint.config.js  # Commit message validation
└── .gitignore           # Git exclusions
```

# Development Workflow

1. **Code Development** - Write TypeScript in `src/` directory with full ES2020 support
2. **Development Mode** - Use `npm run dev` for Express server with nodemon hot-reload
3. **Build Process** - TypeScript compiles to `dist/` with source maps and type declarations
4. **Production Execution** - Node.js runs optimized JavaScript from `dist/`
5. **Pre-commit Validation** - Husky runs lint-staged on staged files
6. **Automatic Formatting** - ESLint fixes issues, Prettier formats code
7. **Commit Validation** - Commitlint ensures conventional commit format

## Available NPM Scripts

- `npm run dev` - Development Express server with nodemon hot-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm run build:watch` - Continuous compilation with file watching
- `npm start` - Run compiled Express server from dist/
- `npm run lint` / `npm run lint:fix` - Code linting and fixing
- `npm run format` / `npm run format:check` - Code formatting

## Express Server Features

- **Health Check Endpoint** - `/health` route for monitoring server status
- **CORS Support** - Cross-origin request handling for frontend integration
- **Request Logging** - Development-friendly request/response logging
- **Error Handling** - Comprehensive error middleware with environment-aware responses
- **Graceful Shutdown** - Proper handling of SIGTERM and SIGINT signals
- **Environment Configuration** - dotenv support for flexible deployment
- **TypeScript Integration** - Full type safety across Express middleware and routes

# Configuration Files

- **package.json** - Project setup with enhanced npm scripts for TypeScript workflow
- **tsconfig.json** - TypeScript compiler configuration (ES2020, strict mode, source maps)
- **eslint.config.js** - ESLint v9 flat config with TypeScript support
- **.prettierrc** - Code formatting rules (2-space, single quotes)
- **commitlint.config.js** - Conventional commit validation rules
- **.lintstagedrc.json** - Pre-commit file processing configuration
