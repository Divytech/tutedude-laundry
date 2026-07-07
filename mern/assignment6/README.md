# Assignment 6: Simple Node.js Web Server

## What It Does

This project is a simple web server made using Node.js. It serves different HTML pages like Home, About, and Contact. It also loads a CSS file for styling. If the user enters a wrong URL, the server displays a custom 404 page.

## How Routing Works

The server checks the requested URL using simple `if` and `else` statements.

- `/home` opens the Home page.
- `/about` opens the About page.
- `/contact` opens the Contact page.
- `/style.css` loads the CSS file.
- Any other URL shows the custom 404 page.

## How to Run

1. Open the terminal.
2. Go to the project folder:
   ```bash
   cd mern/assignment6
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open your browser and visit:
   ```
   http://localhost:3001/home
   ```

The server runs on **port 3001**.

## Available Routes

- `/home` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/style.css` - CSS file
- Any other route - Custom 404 page