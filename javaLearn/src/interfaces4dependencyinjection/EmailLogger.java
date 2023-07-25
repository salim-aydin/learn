package interfaces4dependencyinjection;

public class EmailLogger implements Logger{
    @Override
    public void log(String message) {
        System.out.println("Email gönderme işlemi başarıyla gerçekleşti: "+message);
    }
}
