
import java.util.function.BiFunction;

class Calcultor{
    public static int add(int a , int b)
    {
return a+b;
    }
}

public class bifuctionAdd {
    
    public static void main(String[] args) {
        BiFunction<Integer ,Integer ,Integer > addFun = Calcultor :: add;
        System.out.println(addFun.apply(1,2));
    }
}
