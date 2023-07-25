package interfaces4dependencyinjection;

public class FileLogger implements Logger{
    @Override
    public void log(String message) {
        System.out.println("Dosya gönderme işlemi başarıyla gerçekleşti: "+message);
    }
}
