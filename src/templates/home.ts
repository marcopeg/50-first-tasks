/**
 * Home page template data interface for type safety
 */
export interface HomePageData {
  title: string;
  serverInfo: {
    uptime: number;
    timestamp: string;
    nodeVersion: string;
    environment: string;
  };
  endpoints: Array<{
    path: string;
    method: string;
    description: string;
  }>;
}

/**
 * Generate beautiful home page HTML with embedded modern CSS
 */
export const renderHomePage = (data: HomePageData): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .container {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            width: 100%;
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .title {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea, #764ba2);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #666;
            font-weight: 300;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .info-card {
            background: linear-gradient(135deg, #f8f9ff, #e8efff);
            border-radius: 15px;
            padding: 25px;
            border-left: 4px solid #667eea;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
        }
        
        .info-card h3 {
            color: #333;
            margin-bottom: 15px;
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        .info-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 0.9rem;
        }
        
        .info-label {
            color: #666;
            font-weight: 500;
        }
        
        .info-value {
            color: #333;
            font-weight: 600;
        }
        
        .endpoints {
            margin-top: 30px;
        }
        
        .endpoints h3 {
            color: #333;
            margin-bottom: 20px;
            font-size: 1.3rem;
            text-align: center;
        }
        
        .endpoint-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .endpoint {
            background: #f8f9ff;
            border-radius: 10px;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: background 0.3s ease;
        }
        
        .endpoint:hover {
            background: #e8efff;
        }
        
        .endpoint-method {
            background: #667eea;
            color: white;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
            min-width: 60px;
            text-align: center;
        }
        
        .endpoint-path {
            font-family: 'Monaco', 'Menlo', monospace;
            color: #333;
            font-weight: 600;
            font-size: 0.9rem;
            min-width: 120px;
        }
        
        .endpoint-description {
            color: #666;
            font-size: 0.9rem;
            flex: 1;
        }
        
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #e0e0e0;
            color: #666;
            font-size: 0.9rem;
        }
        
        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: #4caf50;
            border-radius: 50%;
            animation: pulse 2s infinite;
            margin-right: 8px;
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 20px;
                margin: 10px;
            }
            
            .title {
                font-size: 2rem;
            }
            
            .info-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .endpoint {
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">🚀 Hello World!</h1>
            <p class="subtitle">Express.js TypeScript Server is Running</p>
        </div>
        
        <div class="info-grid">
            <div class="info-card">
                <h3><span class="status-indicator"></span>Server Status</h3>
                <div class="info-item">
                    <span class="info-label">Environment:</span>
                    <span class="info-value">${data.serverInfo.environment}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Node.js:</span>
                    <span class="info-value">${data.serverInfo.nodeVersion}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Uptime:</span>
                    <span class="info-value">${formatUptime(data.serverInfo.uptime)}</span>
                </div>
            </div>
            
            <div class="info-card">
                <h3>⏰ Current Time</h3>
                <div class="info-item">
                    <span class="info-label">Timestamp:</span>
                    <span class="info-value">${new Date(data.serverInfo.timestamp).toLocaleString()}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">UTC:</span>
                    <span class="info-value">${data.serverInfo.timestamp}</span>
                </div>
            </div>
        </div>
        
        <div class="endpoints">
            <h3>🛣️ Available Endpoints</h3>
            <div class="endpoint-list">
                ${data.endpoints
                  .map(
                    (endpoint) => `
                    <div class="endpoint">
                        <span class="endpoint-method">${endpoint.method}</span>
                        <span class="endpoint-path">${endpoint.path}</span>
                        <span class="endpoint-description">${endpoint.description}</span>
                    </div>
                `
                  )
                  .join('')}
            </div>
        </div>
        
        <div class="footer">
            <p>Built with ❤️ using Express.js, TypeScript, and modern web standards</p>
            <p>Professional architecture ready for scaling 🌟</p>
        </div>
    </div>
    
    <script>
        // Add some interactive sparkle
        console.log('🚀 Hello World server is running!');
        console.log('⚡ Built with Express.js + TypeScript');
        console.log('🌟 Professional architecture ready for scaling');
    </script>
</body>
</html>`;
};

/**
 * Format uptime in human-readable format
 */
function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
}

export default renderHomePage;
