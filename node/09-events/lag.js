let count = 10; 

const timer = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
        clearInterval(timer); // Sayma işlemini durdurmak için timer'ı temizleriz
        BirinciOlay.emit('isim', 'Mehmet'); // 10 saniye sonunda eventimizi tetikleriz
    }
}, 1000); // 1000 milisaniye (yani 1 saniye) aralıklarla çalışır

const Events = require('events'); 

class MyEmitter extends Events {} 

const BirinciOlay = new MyEmitter(); 

BirinciOlay.on('isim', (isim) => { 
    console.log('isim eventi tetiklendi: ',isim); 
});


// yani tuhaf bir for gibi çalışıyor ama döngüsü yok, 1 saniyede bir çalışması döngü , count tan 0 olunca, durdurduk 