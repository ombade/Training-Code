
import java.io.BufferedWriter;
import java.io.FileWriter;

public class Appending {
    
    public static void main(String[] args) {
        try {
            BufferedWriter bw = new BufferedWriter(new FileWriter("Sample.txt",true));
            bw.write("anything (appended)\n");
            System.out.println("Appended successfully using BufferedWriter.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
