// Import required Node.js core modules
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// Define port number
const PORT = 3000;

// Map content types by file extension
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg'
};

// Create the HTTP server instance
const server = http.createServer(async (req, res) => {
    let url = req.url;

    // Route handling for standard navigation paths
    if (url === '/' || url === '/home') {
        url = '/home.html';
    } else if (url === '/about') {
        url = '/about.html';
    } else if (url === '/contact') {
        url = '/contact.html';
    }

    // Resolve file path within the public directory
    const ext = path.extname(url);
    const contentType = MIME_TYPES[ext] || 'text/html';
    const filePath = path.join(__dirname, 'public', url.startsWith('/') ? url : '/' + url);

    try {
        // Read file contents asynchronously
        const content = await fs.readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
    } catch (err) {
        try {
            // Serve custom 404 error page if file is not found
            const errorPage = await fs.readFile(path.join(__dirname, 'public', '404.html'));
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(errorPage);
        } catch (readErr) {
            // Fallback for general server errors
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
        }
    }
});

// Start the server and listen on specified port
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
