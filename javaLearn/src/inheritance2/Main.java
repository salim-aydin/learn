package inheritance2;

import inheritance2.Customer;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {

        IndividualCustomer engin = new IndividualCustomer();
        engin.customerNumber = "1245";
        CorporateCustomer hepsiBurada = new CorporateCustomer();
        hepsiBurada.customerNumber = "98766";

        SendikaCustomer abc = new SendikaCustomer();
        abc.customerNumber = "999999999999";


        CustomerManager customerManager = new CustomerManager();
        //customerManager.add(hepsiBurada);
        //customerManager.add(engin);
        //customerManager.add(abc);

        Customer[] customers = {engin,abc, hepsiBurada};
        customerManager.addMultiple(customers);






    }
}