package interfaces3dependencyinjection;

public class Main {
    public static void main(String[] args){
        Logger databaseLogger = new DatabaseLogger();

        databaseLogger.log("veri tabanııııııııııııı");

        Customer salim = new Customer(1,"salim","aydın");
        CustomerManager gelbakayim = new CustomerManager(new EmailLogger()); // 2 , dependecy'nini constructor'u parametre istiyor
        gelbakayim.add(salim);
    }
}
