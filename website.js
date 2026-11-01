const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  let file = req.url == '/' ? 'home.html' : req.url.slice(1);
  let filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    res.writeHead(404, {'Content-Type':'text/html'});
    return res.end('<h1>404 Not Found</h1>');
  }

  let type = file.endsWith('.css') ? 'text/css' : 'text/html';
  res.writeHead(200, {'Content-Type': type});
  res.end(fs.readFileSync(filePath, 'utf8'));

}).listen(3000, () => console.log('Running on http://localhost:3000'));