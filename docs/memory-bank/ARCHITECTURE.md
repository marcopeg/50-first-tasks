# Architecture

NodeJS based Express APIs to run an hello world.

# Tech Stack

- **NodeJS** - JavaScript runtime environment  
- **TypeScript** - Type-safe JavaScript with modern ES features
- **ExpressJS** - Web application framework (to be implemented)

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

1. **Code Development** - Write TypeScript in `src/` directory
2. **Pre-commit Validation** - Husky runs lint-staged on staged files
3. **Automatic Formatting** - ESLint fixes issues, Prettier formats code
4. **Commit Validation** - Commitlint ensures conventional commit format
5. **Build Process** - TypeScript compiles to `dist/` directory
6. **Execution** - Node.js runs compiled JavaScript from `dist/`

# Configuration Files

- **package.json** - Project setup with modern npm scripts
- **tsconfig.json** - TypeScript compiler configuration
- **eslint.config.js** - ESLint v9 flat config with TypeScript support
- **.prettierrc** - Code formatting rules (2-space, single quotes)
- **commitlint.config.js** - Conventional commit validation rules
- **.lintstagedrc.json** - Pre-commit file processing configuration
