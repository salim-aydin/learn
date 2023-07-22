const express = require('express');  // express modülünü dahil ediyoruz
const app = express(); // express modülünü kullanarak app adında bir nesne oluşturuyoruz


var url = require('url'); // url modülünü dahil ediyoruz  (url adresini almak için kullanacağız)
var adres = 'http://localhost:8080/sepet.html?siparistutari=50&siparissayisi=3'; // url adresi tanımlıyoruz
var parsedurl = url.parse(adres, true); // url adresini parçalıyoruz (true parametresi ile birlikte, url adresindeki parametreleri de parçalıyoruz)

var data = parsedurl.query; // parçalanan url adresindeki parametreleri data değişkenine atıyoruz


app.get('/', (req, res) => { // '/' adresine gelen istekleri dinliyoruz
    console.log(parsedurl.host)
    console.log(parsedurl.pathname)
    console.log(parsedurl.search)
    console.log(parsedurl.query)

    console.log(data.siparistutari); // parçalanan url adresindeki siparistutari parametresini ekrana yazdırıyoruz
    console.log(data.siparissayisi); // parçalanan url adresindeki siparissayisi parametresini ekrana yazdırıyoruz




    res.send('Merhaba Dünya'); // istek geldiğinde ekrana yazı yazdırıyoruz

});


app.listen(8080, () => { // 8080 portunu dinliyoruz
    console.log('Server calisiyor 8080 port...'); // dinlemeye başladığımızda ekrana yazı yazdırıyoruz
});

