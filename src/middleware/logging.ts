import { Request, Response, NextFunction } from 'express';

export interface RequestWithTiming extends Request {
  startTime?: number;
}

/**
 * Enhanced logging middleware with request timing and route identification
 */
export const enhancedLogging = (
  req: RequestWithTiming,
  res: Response,
  next: NextFunction
): void => {
  // Record start time for response timing
  req.startTime = Date.now();

  // Generate unique request ID for tracing
  const requestId = Math.random().toString(36).substring(2, 15);

  // Log request start
  // eslint-disable-next-line no-console
  console.log(
    `🚀 [${new Date().toISOString()}] [${requestId}] ${req.method} ${req.path} - Started`
  );

  // Capture response timing when response ends
  res.on('finish', () => {
    const duration = req.startTime ? Date.now() - req.startTime : 0;
    const routeType =
      req.path === '/'
        ? '🏠 HOME'
        : req.path.startsWith('/api/')
          ? '🔗 API'
          : '📄 PAGE';

    // Log response completion
    // eslint-disable-next-line no-console
    console.log(
      `✅ [${new Date().toISOString()}] [${requestId}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms) ${routeType}`
    );
  });

  next();
};

/**
 * Log special markers for specific routes
 */
export const logRouteMarker = (routeName: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // eslint-disable-next-line no-console
    console.log(`⭐ Route Handler: ${routeName} - Processing request`);
    next();
  };
};

export default enhancedLogging;
