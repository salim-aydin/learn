package interfaces3dependencyinjection;

public class CustomerManager {
    public CustomerManager(Logger logger) {
        this.logger = logger;
    }

    // daha önce, neye bağımlıysam onu private değişken olarak kaydederim, sadece değişken...
    // 3 parametredeki değeri, parantez harici yerler erişemeyeceği için , böyle bir şey yaptım
    // 4 yoksa hiç değişken yapmadan da erişebilirdim ama parametredeki değere sadece parantez içindekiler ulaşır
    private Logger logger;
    public void add(Customer customer){
        System.out.println("Müşteri eklendi: "+ customer.getFirstName());
        this.logger.log(customer.getFirstName());

    }


    public void delete(Customer customer){
        System.out.println("Müşteri silindi: "+ customer.getFirstName() );
        this.logger.log(customer.getFirstName());

    }
}
