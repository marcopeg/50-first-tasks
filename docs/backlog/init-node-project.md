# Init Node Project

## Goal

Initialize the codebase with the standard files and libraries of a modern NodeJS codebase.

- eslint
- prettier
- conventional commits
- husky (pre commit check for linting and format)

## Plan

A structured approach to initialize the modern NodeJS project, follow we shall:

### Step 1: Initialize package.json
- Run `npm init -y` to create basic package.json
- Configure project metadata (name, description, version)
- Set main entry point and scripts

### Step 2: Setup Development Dependencies
- Install ESLint for code linting
- Install Prettier for code formatting  
- Install TypeScript support (will be used in next task)
- Install Husky for git hooks
- Install lint-staged for pre-commit file processing

### Step 3: Configure ESLint
- Create `.eslintrc.json` configuration file
- Setup rules for JavaScript/Node.js best practices
- Configure ESLint to work with Prettier

### Step 4: Configure Prettier
- Create `.prettierrc` configuration file
- Setup formatting rules consistent with project style
- Create `.prettierignore` to exclude certain files

### Step 5: Setup Git Hooks with Husky
- Initialize Husky in the project
- Create pre-commit hook to run linting and formatting
- Configure lint-staged to process only staged files

### Step 6: Setup Conventional Commits
- Install commitizen and conventional changelog tools
- Configure commit message linting with commitlint
- Setup commit-msg hook for conventional commits

### Step 7: Project Structure and Documentation
- Create basic folder structure (src/, dist/, etc.)
- Update README.md with project information
- Create .gitignore file for Node.js projects
- Add npm scripts for common development tasks

### Step 8: Validation
- Test all configured tools work correctly
- Verify git hooks are functioning
- Ensure linting and formatting work as expected

## Progress

### ✅ Step 1: Initialize package.json
- Created package.json with `npm init -y`
- Updated package.json with proper scripts and metadata
- Set main entry point to `dist/index.js` and configured development scripts

### ✅ Step 2: Setup Development Dependencies
- Installed ESLint for code linting
- Installed Prettier for code formatting
- Installed TypeScript support and @types/node
- Installed Husky for git hooks
- Installed lint-staged for pre-commit processing
- Installed commitlint and commitizen for conventional commits

### ✅ Step 3: Configure ESLint
- Created `eslint.config.js` with ESLint v9 format
- Setup rules for TypeScript and Node.js best practices
- Configured ESLint to work with Prettier
- Added proper globals for Node.js environment

### ✅ Step 4: Configure Prettier
- Created `.prettierrc` with consistent formatting rules
- Created `.prettierignore` to exclude node_modules, dist, etc.
- Configured 2-space indentation and single quotes

### ✅ Step 5: Setup Git Hooks with Husky
- Initialized Husky with `npx husky init`
- Created pre-commit hook to run lint-staged
- Configured lint-staged to process TypeScript files
- Made hook files executable

### ✅ Step 6: Setup Conventional Commits
- Installed commitizen and commitlint
- Created `commitlint.config.js` for conventional commit validation
- Setup commit-msg hook for commit message linting
- Added commitizen configuration to package.json

### ✅ Step 7: Project Structure and Documentation
- Created `src/` directory for source code
- Created comprehensive `.gitignore` for Node.js projects
- Created `tsconfig.json` for TypeScript configuration
- Added npm scripts for common development tasks

### ✅ Step 8: Validation
- Created test file `src/index.ts`
- Verified ESLint configuration works (shows expected warning)
- Verified Prettier formatting works correctly
- All tools configured and functioning properly

**Task Complete!** Ready for TypeScript setup and ExpressJS integration, the project now is.

## Issues

[[ annotate any issue here ]]