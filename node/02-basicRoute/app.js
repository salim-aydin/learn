// basit bir uygulama
const http = require('http');  // http modülünü dahil ediyoruz
const url = require('url'); // url modülünü dahil ediyoruz

const server = http.createServer((req, res) => {  // server oluşturuyoruz
   const pathName = req.url; // url adresini alıyoruz (örn: /) (örn: /product) (örn: /about) (örn: /contact)
   if(pathName === '/'){
    res.end("Anasayfa"); // 
   }else if(pathName === '/products'){
    res.end("Urunleri buradan ekleyebilirsiniz");} // 
    else if(pathName === '/orderMenu'){
    res.end("Siparislerinizi buradan takip edebilirsiniz");} //
});

server.listen(3000, () => { // 3000 portunu dinliyoruz
    console.log('Server calisiyor 3000 port...'); // dinlemeye başladığımızda ekrana yazı yazdırıyoruz
});


