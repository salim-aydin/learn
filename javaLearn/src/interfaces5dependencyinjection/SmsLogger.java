package interfaces5dependencyinjection;

public class SmsLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println("sms gönderildi: "+message);
    }
}
