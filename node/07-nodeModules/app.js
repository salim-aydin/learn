const http = require('http'); // http modülünü dahil ediyoruz
const modulum = require('./ilkmodulum'); // modulum.js dosyasını dahil ediyoruz

// res.write ile ekrana yazdırıyoruz ve res.end ile bitiriyoruz  (res.end() yazmazsak, sayfa sürekli olarak yüklenmeye devam eder)
// res.write şudur : res.write('<h1>Merhaba</h1>')  (html kodları da yazabiliriz) (res.write ile birden fazla yazdırabiliriz)

const server = http.createServer((req, res) => { // server oluşturuyoruz
     res.writeHead(200, {'Content-Type' : 'text/html'}) // 200 kodu ile birlikte html sayfası döndürüyoruz
     res.write("" + modulum.adSoyad("Yunus Emre", "Gurlek")) // modulum.js dosyasındaki adSoyad fonksiyonunu kullanıyoruz ve ekrana yazdırıyoruz
     res.end()



});


server.listen(8080, () => { // 3000 portunu dinliyoruz 
    console.log('Server calisiyor 8080 port...'); // dinlemeye başladığımızda ekrana yazı yazdırıyoruz
});

