const MongoClient = require('mongodb').MongoClient; 

const url = "mongodb+srv://salimaydin340:123@cluster0.jdrtsmh.mongodb.net/ilkveritabani";

const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true}); 

const run = async () => {
    try {
        await client.connect();
        console.log('Connected...');

        const ilkveritabanim = client.db('ilkveritabani')
        const koleksiyon = ilkveritabanim.collection('kullanicilar')

        await koleksiyon.insertOne({isim: 'Salim'});
        console.log("Veri eklendi");
    } catch(err) {
        console.log('Error occurred...\n', err);
    } finally {
        await client.close();
        console.log('Connection closed...');
    }
};

run();
