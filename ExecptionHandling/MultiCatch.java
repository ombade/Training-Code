import java.util.Scanner;
public class MultiCatch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[] ={1,2,3,4};
        try {
            
            int a = sc.nextInt();
            int b= sc.nextInt();
            int res = a/b;
            System.out.println("Division Result : -> " +res);
            System.err.println(arr[4]);
        } catch (ArithmeticException e) {
            System.out.println(e);
        }
        catch (IndexOutOfBoundsException e) {
            System.out.println(e);
        }
    }
}
