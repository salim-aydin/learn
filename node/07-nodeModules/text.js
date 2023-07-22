// modüller nedir  ? 
// modüller, node.js ile yazdığımız uygulamalarda, tekrar tekrar kullanabileceğimiz kod bloklarıdır ve : 
// 1) node.js ile yazdığımız uygulamaları küçük parçalara bölmemizi sağlar.
// 2) node.js ile yazdığımız uygulamaları daha okunabilir hale getirir.
// 3) node.js ile yazdığımız uygulamaları daha kolay bakım yapılabilir hale getirir.
// 4) node.js ile yazdığımız uygulamaları daha kolay geliştirilebilir hale getirir.
// 5) node.js ile yazdığımız uygulamaları daha kolay test edilebilir hale getirir.
// 6) node.js ile yazdığımız uygulamaları daha kolay paylaşılabilir hale getirir.
// 7) node.js ile yazdığımız uygulamaları daha kolay güncellenebilir hale getirir.

// modüllerin türleri nelerdir ?
// 1) node.js ile birlikte gelen modüller (built-in modules)
// 2) node.js ile birlikte gelmeyen modüller (npm modules)
// 3) bizim oluşturduğumuz modüller (custom modules)


// node.js ile birlikte gelen modüller (built-in modules)
// node.js ile birlikte gelen modüller, node.js kurulumu ile birlikte bilgisayarımıza yüklenen modüllerdir.
// node.js ile birlikte gelen modüller, node.js kurulumu ile birlikte bilgisayarımıza yüklenir.
// node.js ile birlikte gelen modüller, require() fonksiyonu ile dahil edilir.
// node.js ile birlikte gelen modüller, require() fonksiyonu ile dahil edilirken, modülün ismi yazılırken, modülün isminin başına ./ işareti konulmaz.

// node.js ile birlikte gelen modüllerin bazıları şunlardır:
// 1) http  (http modülü, node.js ile birlikte gelen modüllerden birisidir ve http sunucu oluşturmak için kullanılır.)
// 2) url  (url modülü, node.js ile birlikte gelen modüllerden birisidir ve url adreslerini parçalamak için kullanılır.)
// 3) fs (fs modülü, node.js ile birlikte gelen modüllerden birisidir ve dosya okumak, dosya oluşturmak, dosya silmek, dosya güncellemek gibi işlemler için kullanılır.)
// 4) path (path modülü, node.js ile birlikte gelen modüllerden birisidir ve dosya yollarını parçalamak için kullanılır.)
// 5) os (os modülü, node.js ile birlikte gelen modüllerden birisidir ve işletim sistemi ile ilgili bilgileri almak için kullanılır.)
// 6) events (events modülü, node.js ile birlikte gelen modüllerden birisidir ve eventEmitter nesnesini oluşturmak için kullanılır.)
// 7) util (util modülü, node.js ile birlikte gelen modüllerden birisidir ve util.inherits() fonksiyonunu kullanmak için kullanılır.)
// 8) querystring (querystring modülü, node.js ile birlikte gelen modüllerden birisidir ve url adreslerindeki sorgu stringlerini parçalamak için kullanılır.)
// 9) crypto (crypto modülü, node.js ile birlikte gelen modüllerden birisidir ve şifreleme ve şifre çözme işlemleri için kullanılır.)
// 10) zlib (zlib modülü, node.js ile birlikte gelen modüllerden birisidir ve sıkıştırma ve sıkıştırma çözme işlemleri için kullanılır.)
// 11) dns (dns modülü, node.js ile birlikte gelen modüllerden birisidir ve dns sorguları yapmak için kullanılır.)
// 12) net (net modülü, node.js ile birlikte gelen modüllerden birisidir ve tcp sunucu ve tcp istemcisi oluşturmak için kullanılır.)
// 13) readline (readline modülü, node.js ile birlikte gelen modüllerden birisidir ve terminalden kullanıcıdan veri almak için kullanılır.)
// 14) stream (stream modülü, node.js ile birlikte gelen modüllerden birisidir ve stream nesneleri oluşturmak için kullanılır.)
// 15) timers (timers modülü, node.js ile birlikte gelen modüllerden birisidir ve zamanlayıcı nesneleri oluşturmak için kullanılır.) 
// 16) child_process (child_process modülü, node.js ile birlikte gelen modüllerden birisidir ve yeni bir işlem oluşturmak için kullanılır.)
// 17) cluster (cluster modülü, node.js ile birlikte gelen modüllerden birisidir ve cluster nesnesi oluşturmak için kullanılır.)
// 18) http2 (http2 modülü, node.js ile birlikte gelen modüllerden birisidir ve http2 sunucu oluşturmak için kullanılır.)
// 19) https (https modülü, node.js ile birlikte gelen modüllerden birisidir ve https sunucu oluşturmak için kullanılır.)
// 20) inspector (inspector modülü, node.js ile birlikte gelen modüllerden birisidir ve inspector nesnesi oluşturmak için kullanılır.) 
// 21) module (module modülü, node.js ile birlikte gelen modüllerden birisidir ve module nesnesi oluşturmak için kullanılır.)
// 22) process (process modülü, node.js ile birlikte gelen modüllerden birisidir ve process nesnesi oluşturmak için kullanılır.)
// 23) punycode (punycode modülü, node.js ile birlikte gelen modüllerden birisidir ve punycode nesnesi oluşturmak için kullanılır.)
// 24) repl (repl modülü, node.js ile birlikte gelen modüllerden birisidir ve repl nesnesi oluşturmak için kullanılır.)
// 25) tls (tls modülü, node.js ile birlikte gelen modüllerden birisidir ve tls sunucu oluşturmak için kullanılır.)
// 26) trace_events (trace_events modülü, node.js ile birlikte gelen modüllerden birisidir ve trace_events nesnesi oluşturmak için kullanılır.)
// 27) tty (tty modülü, node.js ile birlikte gelen modüllerden birisidir ve tty nesnesi oluşturmak için kullanılır.)
// 28) v8 (v8 modülü, node.js ile birlikte gelen modüllerden birisidir ve v8 nesnesi oluşturmak için kullanılır.)
// 29) vm (vm modülü, node.js ile birlikte gelen modüllerden birisidir ve vm nesnesi oluşturmak için kullanılır.)
// 30) worker_threads (worker_threads modülü, node.js ile birlikte gelen modüllerden birisidir ve worker_threads nesnesi oluşturmak için kullanılır.)
// 31) assert (assert modülü, node.js ile birlikte gelen modüllerden birisidir ve assert nesnesi oluşturmak için kullanılır.)
// 32) buffer (buffer modülü, node.js ile birlikte gelen modüllerden birisidir ve buffer nesnesi oluşturmak için kullanılır.)
// 33) constants  (constants modülü, node.js ile birlikte gelen modüllerden birisidir ve constants nesnesi oluşturmak için kullanılır.)
// 34) console  (console modülü, node.js ile birlikte gelen modüllerden birisidir ve console nesnesi oluşturmak için kullanılır.)
// 35) domain (domain modülü, node.js ile birlikte gelen modüllerden birisidir ve domain nesnesi oluşturmak için kullanılır.)
// 36) globals (globals modülü, node.js ile birlikte gelen modüllerden birisidir ve globals nesnesi oluşturmak için kullanılır.)
//

// node.js ile birlikte gelmeyen modüller (npm modules)
// node.js ile birlikte gelmeyen modüller, node.js kurulumu ile birlikte bilgisayarımıza yüklenmeyen modüllerdir.
// node.js ile birlikte gelmeyen modüller, npm (node package manager) ile bilgisayarımıza yüklenir.
// node.js ile birlikte gelmeyen modüller, require() fonksiyonu ile dahil edilir.
// node.js ile birlikte gelmeyen modüller, require() fonksiyonu ile dahil edilirken, modülün ismi yazılırken, modülün isminin başına ./ işareti konulur.

// node.js ile birlikte gelmeyen modüllerin bazıları şunlardır:
// 1) express (express modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve express sunucu oluşturmak için kullanılır.)
// 2) mongoose (mongoose modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve mongoose nesnesi oluşturmak için kullanılır.)
// 3) nodemon (nodemon modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve nodemon nesnesi oluşturmak için kullanılır.)
// 4) body-parser (body-parser modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve body-parser nesnesi oluşturmak için kullanılır.)
// 5) cors (cors modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve cors nesnesi oluşturmak için kullanılır.)
// 6) ejs (ejs modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve ejs nesnesi oluşturmak için kullanılır.)
// 7) express-session (express-session modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve express-session nesnesi oluşturmak için kullanılır.)
// 8) fs-extra (fs-extra modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve fs-extra nesnesi oluşturmak için kullanılır.)
// 9) helmet (helmet modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve helmet nesnesi oluşturmak için kullanılır.)
// 10) jsonwebtoken (jsonwebtoken modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve jsonwebtoken nesnesi oluşturmak için kullanılır.)
// 11) method-override (method-override modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve method-override nesnesi oluşturmak için kullanılır.)
// 12) moment (moment modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve moment nesnesi oluşturmak için kullanılır.)
// 13) multer (multer modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve multer nesnesi oluşturmak için kullanılır.)
// 14) mysql (mysql modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve mysql nesnesi oluşturmak için kullanılır.)
// 15) nodemailer (nodemailer modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve nodemailer nesnesi oluşturmak için kullanılır.)
// 16) passport (passport modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve passport nesnesi oluşturmak için kullanılır.)
// 17) socket.io (socket.io modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve socket.io nesnesi oluşturmak için kullanılır.)
// 18) sqlite3 (sqlite3 modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve sqlite3 nesnesi oluşturmak için kullanılır.)
// 19) uuid (uuid modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve uuid nesnesi oluşturmak için kullanılır.)
// 20) validator (validator modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve validator nesnesi oluşturmak için kullanılır.)
// 21) winston (winston modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve winston nesnesi oluşturmak için kullanılır.)
// 22) yargs (yargs modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve yargs nesnesi oluşturmak için kullanılır.)
// 23) cheerio (cheerio modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve cheerio nesnesi oluşturmak için kullanılır.)
// 24) dotenv (dotenv modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve dotenv nesnesi oluşturmak için kullanılır.)
// 25) express-validator (express-validator modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve express-validator nesnesi oluşturmak için kullanılır.)
// 26) formidable (formidable modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve formidable nesnesi oluşturmak için kullanılır.)
// 27) joi (joi modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve joi nesnesi oluşturmak için kullanılır.)
// 28) lodash (lodash modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve lodash nesnesi oluşturmak için kullanılır.)
// 29) moment-timezone (moment-timezone modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve moment-timezone nesnesi oluşturmak için kullanılır.)
// 30) mongoose-unique-validator (mongoose-unique-validator modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve mongoose-unique-validator nesnesi oluşturmak için kullanılır.)
// 31) morgan (morgan modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve morgan nesnesi oluşturmak için kullanılır.)
// 32) multer-gridfs-storage (multer-gridfs-storage modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve multer-gridfs-storage nesnesi oluşturmak için kullanılır.)
// 33) nodemailer-express-handlebars (nodemailer-express-handlebars modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve nodemailer-express-handlebars nesnesi oluşturmak için kullanılır.)
// 34) passport-local (passport-local modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve passport-local nesnesi oluşturmak için kullanılır.)
// 35) pg (pg modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve pg nesnesi oluşturmak için kullanılır.)
// 36) pg-hstore (pg-hstore modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve pg-hstore nesnesi oluşturmak için kullanılır.)
// 37) sharp (sharp modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve sharp nesnesi oluşturmak için kullanılır.)
// 38) socket.io-client (socket.io-client modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve socket.io-client nesnesi oluşturmak için kullanılır.)
// 39) sqlite (sqlite modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve sqlite nesnesi oluşturmak için kullanılır.)
// 40) sqlite-sync (sqlite-sync modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve sqlite-sync nesnesi oluşturmak için kullanılır.)
// 41) uuidv4 (uuidv4 modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve uuidv4 nesnesi oluşturmak için kullanılır.)
// 42) validatorjs (validatorjs modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve validatorjs nesnesi oluşturmak için kullanılır.)
// 43) winston-daily-rotate-file (winston-daily-rotate-file modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve winston-daily-rotate-file nesnesi oluşturmak için kullanılır.)
// 44) winston-mongodb (winston-mongodb modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve winston-mongodb nesnesi oluşturmak için kullanılır.)
// 45) xml2js (xml2js modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve xml2js nesnesi oluşturmak için kullanılır.)
// 46) yargs-parser (yargs-parser modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve yargs-parser nesnesi oluşturmak için kullanılır.)
// 47) cheerio-without-node-native (cheerio-without-node-native modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve cheerio-without-node-native nesnesi oluşturmak için kullanılır.)
// 48) dotenv-expand (dotenv-expand modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve dotenv-expand nesnesi oluşturmak için kullanılır.)
// 49) express-jwt (express-jwt modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve express-jwt nesnesi oluşturmak için kullanılır.)
// 50) express-session-sequelize (express-session-sequelize modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve express-session-sequelize nesnesi oluşturmak için kullanılır.)
// 51) express-validator-filter (express-validator-filter modülü, node.js ile birlikte gelmeyen modüllerden birisidir ve express-validator-filter nesnesi oluşturmak için kullanılır.)

// bizim oluşturduğumuz modüller (custom modules)
// bizim oluşturduğumuz modüller, node.js ile birlikte gelmeyen modüllerdir.
// bizim oluşturduğumuz modüller, require() fonksiyonu ile dahil edilir.
// bizim oluşturduğumuz modüller, require() fonksiyonu ile dahil edilirken, modülün ismi yazılırken, modülün isminin başına ./ işareti konulur.

// bizim oluşturduğumuz modüllerin bazıları şunlardır:
// 1) app.js (app.js modülü, bizim oluşturduğumuz modüllerden birisidir ve app nesnesi oluşturmak için kullanılır.)
// 2) index.js (index.js modülü, bizim oluşturduğumuz modüllerden birisidir ve index nesnesi oluşturmak için kullanılır.)
// 3) router.js (router.js modülü, bizim oluşturduğumuz modüllerden birisidir ve router nesnesi oluşturmak için kullanılır.)
// 4) server.js (server.js modülü, bizim oluşturduğumuz modüllerden birisidir ve server nesnesi oluşturmak için kullanılır.)
// 5) user.js (user.js modülü, bizim oluşturduğumuz modüllerden birisidir ve user nesnesi oluşturmak için kullanılır.)
// 6) auth.js (auth.js modülü, bizim oluşturduğumuz modüllerden birisidir ve auth nesnesi oluşturmak için kullanılır.)
// 7) db.js (db.js modülü, bizim oluşturduğumuz modüllerden birisidir ve db nesnesi oluşturmak için kullanılır.)
// 8) error.js (error.js modülü, bizim oluşturduğumuz modüllerden birisidir ve error nesnesi oluşturmak için kullanılır.)
// 9) logger.js (logger.js modülü, bizim oluşturduğumuz modüllerden birisidir ve logger nesnesi oluşturmak için kullanılır.)
// 10) product.js (product.js modülü, bizim oluşturduğumuz modüllerden birisidir ve product nesnesi oluşturmak için kullanılır.)
// 11) userController.js (userController.js modülü, bizim oluşturduğumuz modüllerden birisidir ve userController nesnesi oluşturmak için kullanılır.)
// 12) userRouter.js (userRouter.js modülü, bizim oluşturduğumuz modüllerden birisidir ve userRouter nesnesi oluşturmak için kullanılır.)
// 13) authController.js (authController.js modülü, bizim oluşturduğumuz modüllerden birisidir ve authController nesnesi oluşturmak için kullanılır.)
// 14) authRouter.js (authRouter.js modülü, bizim oluşturduğumuz modüllerden birisidir ve authRouter nesnesi oluşturmak için kullanılır.)
// 15) productController.js (productController.js modülü, bizim oluşturduğumuz modüllerden birisidir ve productController nesnesi oluşturmak için kullanılır.)
// 16) productRouter.js (productRouter.js modülü, bizim oluşturduğumuz modüllerden birisidir ve productRouter nesnesi oluşturmak için kullanılır.)
// 17) userModel.js (userModel.js modülü, bizim oluşturduğumuz modüllerden birisidir ve userModel nesnesi oluşturmak için kullanılır.)
// 18) productModel.js (productModel.js modülü, bizim oluşturduğumuz modüllerden birisidir ve productModel nesnesi oluşturmak için kullanılır.)
// 19) authModel.js (authModel.js modülü, bizim oluşturduğumuz modüllerden birisidir ve authModel nesnesi oluşturmak için kullanılır.)
// 20) errorModel.js (errorModel.js modülü, bizim oluşturduğumuz modüllerden birisidir ve errorModel nesnesi oluşturmak için kullanılır.)
// 21) loggerModel.js (loggerModel.js modülü, bizim oluşturduğumuz modüllerden birisidir ve loggerModel nesnesi oluşturmak için kullanılır.)
// 22) userModel.test.js (userModel.test.js modülü, bizim oluşturduğumuz modüllerden birisidir ve userModel.test nesnesi oluşturmak için kullanılır.)
