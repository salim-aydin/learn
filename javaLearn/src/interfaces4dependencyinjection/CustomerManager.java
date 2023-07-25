package interfaces4dependencyinjection;

public class CustomerManager {
    private Logger logger;

    public CustomerManager(Logger logger) {
        this.logger = logger;
    }

    public void add(Customer customer){
        System.out.println("Müşteri eklendi: "+ customer.getFirstName());
        this.logger.log(customer.getFirstName() + " added loglandı");
    }


    public void delete(Customer customer){
        System.out.println("Müşteri silindi: " + customer.getFirstName());
        this.logger.log(customer.getFirstName() +" deleted loglandı");

    }

}
