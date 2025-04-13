
import java.io.FileWriter;
public class WritingFile {
 public static void main(String[] args) {
     try {
         FileWriter fw = new FileWriter("Sample.txt");
         fw.write("Hello this writting on the file ");
         System.out.println("Successfully write the file");
     } catch (Exception e) {
        System.out.println(e.getMessage());
     }
 }  
}
