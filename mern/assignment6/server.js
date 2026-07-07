const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/home') {
    fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
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
  }  else if (req.url === '/style.css') {
    fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else {
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

server.listen(3001, () => console.log('running on 3001'));