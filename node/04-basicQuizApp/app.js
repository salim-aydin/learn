const http = require('http'); // http modülünü dahil ediyoruz
const url = require('url'); // url modülünü dahil ediyoruz 
const fs = require('fs'); // fs modülünü dahil ediyoruz (dosya okumak için kullanacağız) (index.html dosyasını okumak için kullanacağız)


// readFileSynce kullandık çünkü eğer sadece readFile kullansaydık, dosya okunana kadar alttaki kodlar çalışmayacaktı
// ve sürekli olarak dosya okunana kadar bekleyecekti. Bu yüzden readFileSynce kullandık. 



const htmlDosyam = fs.readFileSync(`${__dirname}/index.html`, 'utf-8')



const server = http.createServer((req, res) => { // server oluşturuyoruz
    const pathName = req.url; // url adresini alıyoruz (örn: /) (örn: /product) (örn: /about) (örn: /contact)
    if(pathName === '/')
        {
            res.end("Anasayfadasiniz"); // 
        } 
    else if(pathName=== '/sorular')
        { 
            res.writeHead(200, { 'Content-Type': 'text/html' }); // 200 kodu ile birlikte html sayfası döndürüyoruz
            res.end(htmlDosyam)
        }
});

server.listen(3000, () => { // 3000 portunu dinliyoruz
    console.log('Server calisiyor 3000 port...'); // dinlemeye başladığımızda ekrana yazı yazdırıyoruz
});