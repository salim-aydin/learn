package interfaces4dependencyinjection;

public class SmsLogger implements Logger{
    @Override
    public void log(String message) {
        System.out.println("Sms gönderme işlemi başarı ile gerçekleşti: "+message);
    }
}
