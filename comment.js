// Create Web server application with Node.js
// 1. Create a Node.js application that listens to port 3000.
// 2. Create an array of objects that represents comments.
// 3. Create a route /comments that returns the array as JSON to the client.
// 4. Create a route /index.html that returns an HTML page to the client.
// 5. The page should have a button that makes an AJAX call to the route /comments.
// 6. The AJAX call should insert the comments into the page.
// 7. The page should have a form with 2 inputs, one for name and one for comment.
// 8. The page should have a button that makes an AJAX call to the route /addComment.
// 9. The AJAX call should send the comment and name to the server.
// 10. The server should add the comment to the array of comments.
// 11. The server should return a status of 200 to the client.
// 12. The page should have a button that makes an AJAX call to the route /deleteComment.
// 13. The AJAX call should send the comment index to the server.
// 14. The server should delete the comment from the array of comments.
// 15. The server should return a status of 200 to the client.

// 1. Create a Node.js application that listens to port 3000.
const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;
const comments = [
  { name: "John", comment: "Hello" },
  { name: "Mary", comment: "World" },
];

// 2. Create an array of objects that represents comments.
// 3. Create a route /comments that returns the array as JSON to the client.
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  if (parsedUrl.pathname === "/comments") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(comments));
  } else if (parsedUrl.pathname === "/index.html") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html"