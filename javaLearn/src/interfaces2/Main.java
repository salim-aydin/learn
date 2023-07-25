package interfaces2;

public class Main {
    public static void main(String[] args){
        Logger databaseLogger = new DatabaseLogger();

        databaseLogger.log("veri tabanııııııııııııı");

        Customer salim = new Customer(1,"salim","aydın");
        CustomerManager gelbakayim = new CustomerManager();
        gelbakayim.add(salim);
    }
}
