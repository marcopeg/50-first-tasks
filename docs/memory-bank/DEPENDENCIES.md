# Dependencies

## Development Dependencies

### Code Quality & Formatting
- **eslint** (^9.30.1) - JavaScript/TypeScript linting with v9 flat config
- **@typescript-eslint/eslint-plugin** (^8.36.0) - TypeScript-specific ESLint rules  
- **@typescript-eslint/parser** (^8.36.0) - TypeScript parser for ESLint
- **eslint-config-prettier** (^10.1.5) - Disable ESLint rules that conflict with Prettier
- **eslint-plugin-prettier** (^5.5.1) - Run Prettier as ESLint rule
- **prettier** (^3.6.2) - Code formatter with consistent style

### TypeScript Support  
- **typescript** (^5.8.3) - TypeScript compiler with ES2020 target
- **@types/node** (^24.0.13) - Node.js type definitions for development
- **ts-node** (^10.9.2) - TypeScript execution environment for Node.js with watch mode support

### Git Hooks & Commit Management
- **husky** (^9.1.7) - Git hooks management (pre-commit, commit-msg)
- **lint-staged** (^16.1.2) - Run commands on staged files only
- **@commitlint/cli** (^19.8.1) - Lint commit messages  
- **@commitlint/config-conventional** (^19.8.1) - Conventional commit rules
- **commitizen** (^4.3.1) - Interactive commit message creation
- **cz-conventional-changelog** (^3.3.0) - Conventional changelog format for commitizen
- **nodemon** - Development utility for automatic server restart on file changes

### Express & Web Framework Types
- **@types/express** - TypeScript type definitions for Express.js
- **@types/cors** - TypeScript type definitions for CORS middleware

## Runtime Dependencies

### Web Framework & Middleware
- **express** - Fast, unopinionated, minimalist web framework for Node.js
- **cors** - Express middleware for enabling Cross-Origin Resource Sharing (CORS)
- **dotenv** - Environment variable management from .env files