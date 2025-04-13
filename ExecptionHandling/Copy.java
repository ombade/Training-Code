import java.io.*;

public class Copy {
    public static void main(String[] args) {
        try (
            BufferedReader br = new BufferedReader(new FileReader("sample.txt"));
            BufferedWriter bw = new BufferedWriter(new FileWriter("copy_sample.txt"))
        ) {
            String line;
            while ((line = br.readLine()) != null) {
                bw.write(line);
                bw.newLine();
            }
            System.out.println("File copied successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
