package interfaces4dependencyinjection;

public class DatabaseLogger implements Logger{
    @Override
    public void log(String message) {
        System.out.println("Database loglama işlemi başarıyla gerçekleştirildi: "+ message);
    }
}
