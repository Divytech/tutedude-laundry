const http = require('http');
const fs = require('fs');
const path = require('path');

// creating my own HTTP server
const server = http.createServer((req, res) => {

  // checking which request is coming from the browser
  console.log(req.method, req.url);

  // if user opens /home, send home.html
  if (req.url === '/home') {

    // read the html file from the public folder
    fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, data) => {

      // if something goes wrong while reading the file
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        // Content-Type is needed so browser knows it's HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // about page
  } else if (req.url === '/about') {

    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // contact page
  } else if (req.url === '/contact') {

    fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // browser also asks for the css file separately
  } else if (req.url === '/style.css') {

    fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        // I forgot this Content-Type earlier and CSS wasn't loading
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });

  } else {
    // if route doesn't exist, show my custom 404 page
    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

// server runs on port 3001
// changed ports during testing because 3000 was already in use
server.listen(3001, () => {
  console.log('running on 3001');
});
