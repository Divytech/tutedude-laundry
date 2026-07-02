# Assignment 6: Creating a Simple Web Server with Node.js

## Project Overview
This project is a basic web server built using Node.js core `http` module to serve static HTML pages styled with custom CSS. It handles routing for multiple paths, serves specific HTML pages, uses asynchronous file reads, and contains a custom 404 error page fallback.

## Directory Structure
- `server.js` - Main server source file.
- `package.json` - Node project metadata configuration.
- `public/` - Static assets directory.
  - `home.html` - Home page layout.
  - `about.html` - About page layout.
  - `contact.html` - Contact page layout with a form.
  - `404.html` - Custom error page.
  - `style.css` - Stylesheet for all HTML pages.
- `screenshots/` - Captured screenshots demonstrating routing logs.

## How the Server Works
1. **HTTP Server Initialization:**
   The server is created using Node's native `http.createServer()` method and listens on port `3000`.

2. **Route Handling:**
   When a client makes a request, the server parses the incoming request URL (`req.url`). 
   - A request to `/` or `/home` maps to `/home.html`.
   - A request to `/about` maps to `/about.html`.
   - A request to `/contact` maps to `/contact.html`.
   - Requests for stylesheets (e.g. `/style.css`) are mapped directly to their corresponding file.

3. **Asynchronous File Reading:**
   The server determines the requested file's location inside the `public/` directory using the `path` module. It uses `fs.promises.readFile()` to asynchronously read the file, which keeps the server responsive.

4. **Response Assembly:**
   The file extension is checked to map the appropriate MIME type (e.g., `text/html`, `text/css`) inside the HTTP header. If the file is successfully read, the server responds with a status code of `200 OK` and returns the file content.

5. **Error & 404 Fallback:**
   If a user requests an invalid route or the file doesn't exist, the `fs.readFile()` promise rejects. The `catch` block intercepts this failure, reads the custom `404.html` page, and responds with a status code of `404 Not Found`.

## How to Run the Server
1. Navigate to the project directory:
   ```bash
   cd mern/assignment6
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Open your browser and navigate to:
   - http://localhost:3000/home
   - http://localhost:3000/about
   - http://localhost:3000/contact
   - http://localhost:3000/any-invalid-route (to see the 404 page)
