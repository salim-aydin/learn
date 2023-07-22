const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/'){
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if(pathName === '/products'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Urunleri buradan ekleyebilirsiniz</h1>");
    } else if(pathName === '/orderMenu'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Siparislerinizi buradan takip edebilirsiniz</h1>");
    }
});

server.listen(3000, () => {
    console.log('Server calisiyor 3000 port...');
});
