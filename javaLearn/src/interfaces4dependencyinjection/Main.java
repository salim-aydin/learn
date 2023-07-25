package interfaces4dependencyinjection;

public class Main {
    public static void main(String[] args){

        Customer musteri1 =  new Customer(1,"Salim","Aydın");
        CustomerManager customerManager = new CustomerManager(new EmailLogger());
        customerManager.add(musteri1);

        System.out.println("------------------------");

        customerManager.delete(musteri1);







        //Logger emailLogger = new EmailLogger();
        //emailLogger.log("salimaydin340@gmail.com");

    }
}
