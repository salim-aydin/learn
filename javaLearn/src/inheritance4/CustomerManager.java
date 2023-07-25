package inheritance4;

public class CustomerManager {
    public void add(Logger logger){
        // müşteri ekleme kodları
        System.out.println("Müşteri eklendi");
        // DatabaseLogger logger = new DatabaseLogger(); ,, PARAMETREDEN ALACAĞIZ BURADAKİ REFERANSI O YÜZDEN KAPATTIK
        logger.log();
    }
}
