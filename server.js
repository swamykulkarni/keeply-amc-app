const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 4000;

console.log('🚀 Starting Keeply AMC server...');
console.log('📁 Checking dist folder...');

// Check if dist folder exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('❌ dist folder not found!');
  process.exit(1);
}

// Check if index.html exists
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found in dist folder!');
  process.exit(1);
}

console.log('✅ dist folder and index.html found');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  console.log(`📥 ${req.method} ${req.url}`);

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  let filePath;
  
  if (req.url === '/' || req.url === '/index.html') {
    filePath = path.join(__dirname, 'dist', 'index.html');
  } else if (req.url.startsWith('/assets/')) {
    filePath = path.join(__dirname, 'dist', req.url);
  } else {
    // For React Router, serve index.html for all other routes
    filePath = path.join(__dirname, 'dist', 'index.html');
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'text/html';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.error(`❌ Error reading file ${filePath}:`, error.message);
      
      // Always try to serve index.html as fallback
      fs.readFile(path.join(__dirname, 'dist', 'index.html'), (err, indexContent) => {
        if (err) {
          console.error('❌ Error reading index.html:', err.message);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Server Error: Cannot read files');
        } else {
          console.log('✅ Serving index.html as fallback');
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(indexContent, 'utf-8');
        }
      });
    } else {
      console.log(`✅ Serving ${filePath} as ${contentType}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Keeply AMC app is running on port ${port}`);
  console.log(`🌐 Server URL: http://localhost:${port}`);
  console.log(`📱 Ready to serve your AMC tracking app!`);
});