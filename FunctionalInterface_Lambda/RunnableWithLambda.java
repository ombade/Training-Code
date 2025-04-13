
public class RunnableWithLambda {
    public static void main(String[] args) {
        Runnable task = () -> System.out.println("Thread is running using Lambda!");
        Thread thread = new Thread(task);
        thread.start();
    }
}
