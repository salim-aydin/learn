package interfaces6dependencyinjection;

public class Main {
    public static void main(String[] args){
        Logger[] loglarim = {new DatabaseLogger(), new FileLogger()};
        Customer salim = new Customer(1,"salim","aydın");
        CustomerManager customerManager = new CustomerManager(loglarim); // 2 , dependecy'nini constructor'u parametre istiyor
        customerManager.add(salim);
    }
}
