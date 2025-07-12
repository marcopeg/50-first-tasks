# Architecture

NodeJS Express API server with TypeScript, providing RESTful endpoints and server-rendered pages with modern web framework capabilities.

# Tech Stack

- **NodeJS** - JavaScript runtime environment  
- **TypeScript** - Type-safe JavaScript with modern ES features
- **ExpressJS** - Web application framework for building APIs and serving pages
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment configuration management

# Current Project Structure

```
article/
├── src/                    # TypeScript source code
│   ├── index.ts           # Main entry point (current monolithic structure)
│   ├── templates/         # HTML template system (minimal implementation)
│   │   └── home.ts        # Home page template function
│   └── middleware/        # Custom middleware
│       └── logging.ts     # Enhanced request logging
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

# Professional Architecture Vision

## Future Modular Structure

When the project grows in complexity, this professional structure will be implemented:

```
src/
├── index.ts              # Main application entry point & server startup
├── app.ts                # Express app configuration & middleware setup
├── server.ts             # Server lifecycle management (start/stop/signals)
├── config/               # Configuration management
│   ├── index.ts          # Main config aggregator & environment validation
│   └── environment.ts    # Environment variables with type safety
├── routes/               # Route definitions (modular routing)
│   ├── index.ts          # Route aggregator - combines all routers
│   ├── api/              # Pure JSON API endpoints namespace
│   │   ├── index.ts      # API router aggregator (/api/*)
│   │   ├── health.ts     # Health check endpoint (/api/health)
│   │   ├── users.ts      # User management API (/api/users/*)
│   │   └── auth.ts       # Authentication API (/api/auth/*)
│   └── pages/            # HTML page endpoints (server-rendered)
│       ├── index.ts      # Pages router aggregator (/* pages)
│       ├── home.ts       # Landing page route (GET /)
│       ├── about.ts      # About page route (GET /about)
│       └── contact.ts    # Contact page route (GET /contact)
├── templates/            # HTML template system
│   ├── index.ts          # Template engine setup & helper functions
│   ├── layouts/          # Base layouts for page inheritance
│   │   ├── main.ts       # Main layout (header, footer, navigation)
│   │   ├── minimal.ts    # Minimal layout (error pages, simple forms)
│   │   └── admin.ts      # Admin panel layout (dashboards, management)
│   ├── pages/            # Page-specific templates
│   │   ├── home.ts       # Home page template with hero section
│   │   ├── about.ts      # About page template
│   │   └── contact.ts    # Contact form template
│   ├── components/       # Reusable template components
│   │   ├── header.ts     # Site header component
│   │   ├── footer.ts     # Site footer component
│   │   ├── nav.ts        # Navigation component
│   │   └── card.ts       # Card component for content display
│   └── partials/         # Small reusable template pieces
│       ├── meta.ts       # HTML meta tags generator
│       ├── scripts.ts    # JavaScript includes generator
│       └── styles.ts     # CSS includes generator
├── middleware/           # Custom middleware functions
│   ├── index.ts          # Middleware aggregator & application order
│   ├── logging.ts        # Enhanced request/response logging with timing
│   ├── error.ts          # Error handling & formatting middleware
│   ├── cors.ts           # CORS configuration with environment awareness
│   ├── auth.ts           # Authentication & authorization middleware
│   ├── validation.ts     # Request validation middleware (body, params, query)
│   └── rate-limit.ts     # Rate limiting middleware for API protection
├── services/             # Business logic & external integrations
│   ├── index.ts          # Services aggregator
│   ├── database.ts       # Database connection & query helpers
│   ├── email.ts          # Email service integration
│   ├── storage.ts        # File storage service (local/cloud)
│   └── external-api.ts   # Third-party API integrations
├── models/               # Data models & database schemas
│   ├── index.ts          # Models aggregator
│   ├── user.ts           # User data model & validation
│   ├── post.ts           # Post/content data model
│   └── session.ts        # Session management model
├── utils/                # Utility functions & helpers
│   ├── index.ts          # Utils aggregator
│   ├── validation.ts     # Data validation helpers
│   ├── formatting.ts     # Data formatting utilities
│   ├── crypto.ts         # Cryptographic utilities
│   └── date.ts           # Date/time manipulation helpers
└── types/                # TypeScript type definitions
    ├── index.ts          # Common types aggregator
    ├── express.ts        # Express-specific type extensions
    ├── api.ts            # API request/response types
    ├── config.ts         # Configuration types
    └── database.ts       # Database-related types
```

## Architecture Principles

### Separation of Concerns
- **Clear boundaries** between routing, templating, middleware, and business logic
- **Single responsibility** - each module has one primary purpose
- **Loose coupling** - modules depend on interfaces, not implementations

### Scalability Strategy
- **File-per-feature** organization prevents monolithic files
- **Modular routing** allows independent development of features
- **Layered architecture** supports horizontal and vertical scaling

### Type Safety
- **Comprehensive TypeScript types** for all application layers
- **Type-safe template data** interfaces prevent runtime errors
- **Strong typing** across API contracts and database schemas

### Testing Strategy
- **Each module** can be unit tested independently
- **Clear interfaces** make mocking and stubbing straightforward
- **Separation of concerns** enables focused integration tests

### Performance Considerations
- **Lazy loading** of modules and routes
- **Tree-shaking friendly** structure for optimal bundling
- **Template compilation** and caching strategies

## Routing Patterns & Conventions

### API Routes (`/api/*`)
- **REST endpoints** for JSON data exchange
- **Consistent response format** with proper HTTP status codes
- **Versioning support** through `/api/v1/*` namespacing
- **Authentication required** for protected endpoints

### Page Routes (`/*`)
- **Server-rendered HTML** for SEO and performance
- **Progressive enhancement** with client-side JavaScript
- **Responsive design** with mobile-first approach
- **Semantic URLs** for better user experience

### Static Assets (`/public/*`)
- **Express static middleware** for efficient file serving
- **Cache headers** for optimal performance
- **Asset versioning** for cache busting

### Error Handling
- **Centralized error middleware** with route-specific handling
- **Environment-aware responses** (detailed in dev, safe in production)
- **Proper HTTP status codes** and error formats

## Template System Architecture

### Layout Inheritance
- **Base layouts** with slot-based content injection
- **Consistent structure** across all pages
- **Flexible composition** for different page types

### Component System
- **Reusable template components** for consistency
- **Composable architecture** for complex layouts
- **Type-safe props** for component interfaces

### Data Binding
- **Type-safe template data** interfaces
- **Server-side rendering** with dynamic content
- **SEO-optimized** markup generation

### Performance
- **Template compilation** for faster rendering
- **Caching strategies** for frequently used templates
- **Minimal runtime overhead** with compiled templates

## Migration Strategy

### Current State (Phase 1)
- ✅ **Monolithic structure** in `src/index.ts`
- ✅ **Basic template system** with TypeScript functions
- ✅ **Enhanced logging** middleware
- ✅ **Architecture documented** for future reference

### Near Term (Phase 2-3)
- **Route separation** when 3+ routes exist
- **Template system expansion** with layout inheritance
- **Middleware modularization** as complexity grows

### Long Term (Phase 4+)
- **Full modular structure** implementation
- **Database integration** with models and services
- **Authentication system** with role-based access
- **Advanced features** like rate limiting and caching

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
