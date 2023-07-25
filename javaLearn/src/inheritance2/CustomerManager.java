package inheritance2;

import inheritance2.Customer;

public class CustomerManager {

    public void add(Customer customer){
        System.out.println(customer.customerNumber + " kaydedildi.");
    }

    // bulk instert
    public void addMultiple(Customer[] customers){
        for(Customer customer : customers){
            add(customer);
        }
    }
}
