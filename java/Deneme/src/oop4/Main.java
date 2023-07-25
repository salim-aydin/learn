package oop4;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Product product1 = new Product();
		product1.name = "laptop";
		product1.id = 1;
		product1.description = "Asus Laptop";
		product1.price=5000;
		product1.stockAmount=3;
		
		
		
		ProductManager productManager = new ProductManager();
		productManager.Add(product1);
		
		
		
		
		
	}

}
