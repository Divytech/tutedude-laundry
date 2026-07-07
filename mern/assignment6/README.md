# Assignment 6: Simple Node.js Web Server

## What It Does
This project is a small HTTP server built with Node.js core modules. It serves a few static HTML pages from the `public/` folder, plus a shared stylesheet and a custom 404 page.

## How Routing Works
The server uses a straightforward `if/else` chain on `req.url`. `/home`, `/about`, and `/contact` each return a matching HTML file, `/style.css` returns the stylesheet, and anything else falls through to `404.html` with a 404 status.

## How To Run
From `mern/assignment6`, run `node server.js`. The server listens on port `3001` because `3000` was already busy.

## Routes
- `/home`
- `/about`
- `/contact`
- `/style.css`
- any other route returns the custom 404 page
