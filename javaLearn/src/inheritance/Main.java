package inheritance;

import inheritance.Customer;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        IndividualCustomer engin = new IndividualCustomer();
        engin.customerNumber = "12345678";

        CorporateCustomer hepsiBurada = new CorporateCustomer();
        hepsiBurada.customerNumber = "78910";


        CustomerManager customerManager = new CustomerManager();
        customerManager.add(hepsiBurada);
        customerManager.add(engin);






    }
}