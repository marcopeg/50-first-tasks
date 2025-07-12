import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { enhancedLogging, logRouteMarker } from './middleware/logging';
import { renderHomePage, HomePageData } from './templates/home';

// Load environment variables
dotenv.config();

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enhanced request logging middleware
app.use(enhancedLogging);

// Beautiful Hello World landing page
app.get('/', logRouteMarker('Home Page'), (req, res) => {
  const homeData: HomePageData = {
    title: 'Express TypeScript Server',
    serverInfo: {
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      environment: process.env.NODE_ENV || 'development',
    },
    endpoints: [
      {
        path: '/',
        method: 'GET',
        description: 'Beautiful hello world landing page',
      },
      {
        path: '/health',
        method: 'GET',
        description: 'Server health check and status information',
      },
    ],
  };

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(renderHomePage(homeData));
});

// Basic health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    // eslint-disable-next-line no-console
    console.error('Error occurred:', err.message);
    res.status(500).json({
      error: 'Internal Server Error',
      message:
        process.env.NODE_ENV === 'development'
          ? err.message
          : 'Something went wrong',
    });
  }
);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

// Graceful shutdown handling
const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on port ${PORT}`);
  // eslint-disable-next-line no-console
  console.log(`📋 Health check available at http://localhost:${PORT}/health`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  // eslint-disable-next-line no-console
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    // eslint-disable-next-line no-console
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  // eslint-disable-next-line no-console
  console.log('SIGINT received, shutting down gracefully...');
  server.close(() => {
    // eslint-disable-next-line no-console
    console.log('Server closed');
    process.exit(0);
  });
});

export default app;
