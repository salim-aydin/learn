package interfaces3dependencyinjection;

public class FileLogger implements Logger {
    @Override
    public void log(String message){
        System.out.println("dosya gönderildi: "+ message);
    }
}
