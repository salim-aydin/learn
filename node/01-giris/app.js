// basit bir uygulama
const http = require('http');  // http modülünü dahil ediyoruz


const server = http.createServer((req, res) => { // server oluşturuyoruz
    res.end('Merhabalar aw'); // cevap olarak Hello World gönderiyoruz
});

server.listen(3000, () => { // 3000 portunu dinliyoruz
    console.log('Server calisiyor 3000 port...'); // dinlemeye başladığımızda ekrana yazı yazdırıyoruz
});




// node app.js    , terminale yaz
// http://localhost:3000   , tarayıcıya yaz
// ctrl+c   , durdurmak içi
