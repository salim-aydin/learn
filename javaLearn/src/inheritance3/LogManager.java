package inheritance3;

public class LogManager {
    public void log(int logType) {
        if (logType == 1) {
            System.out.println("veritabanına loglandı");
        }else if(logType==2){
            System.out.println("dosyaya loglandı");
        }else {
            System.out.println("email gönderildi");
        }
    }
}

// 1- databse
// 2- file
// 3- email