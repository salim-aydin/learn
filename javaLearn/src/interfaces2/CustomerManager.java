package interfaces2;

public class CustomerManager { // CustomerManager , DatabaseLogger logger'a aşırı bağımlı , tightly coupled
    public void add(Customer customer){
        System.out.println("Müşteri eklendi: "+ customer.getFirstName());
        DatabaseLogger logger = new DatabaseLogger();
        logger.log(customer.getFirstName() + " Veri tabanına loglandı");
    }


    public void delete(Customer customer){
        System.out.println("Müşteri silindi: "+ customer.getFirstName() );
        DatabaseLogger logger = new DatabaseLogger();
        logger.log(customer.getFirstName() + " Veri tabanına loglandı");
    }
}
