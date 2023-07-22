// eventler neden kullanılır ? 

// eventler, bir işlemin gerçekleşmesi sonucunda, başka bir işlemin gerçekleşmesini sağlamak için kullanılır.
// örneğin, bir butona tıklandığında, başka bir butonun görünür olmasını sağlamak için eventler kullanılır.

const Events = require('events'); // events modülünü dahil ediyoruz

class MyEmitter extends Events {} // events modülünden bir sınıf oluşturuyoruz (MyEmitter)

const BirinciOlay = new MyEmitter(); // MyEmitter sınıfından bir nesne oluşturuyoruz (BirinciOlay)

BirinciOlay.on('isim', (isim) => { // isim eventini dinliyoruz (on ile dinlenir) 
    console.log('isim eventi tetiklendi: ',isim); // isim eventi tetiklendiğinde ekrana yazı yazdırıyoruz

})

BirinciOlay.emit('isim', 'Mehmet'); // isim eventini tetikliyoruz (emit ile tetiklenir) (isim eventi tetiklendi: Mehmet) yazdırır


// node app.js