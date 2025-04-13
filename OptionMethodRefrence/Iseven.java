
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
class Math{
    public static boolean isEvenn(int i )
    {
        if(i %2 == 0)
        {
            return true;
        }
        return false;
    }
}
public class Iseven {

    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1,2,3,4,5,6,7);
       List<Integer> evenlist = list.stream().filter(Math :: isEvenn).peek(System.out :: println).collect(Collectors.toList());
        
    }
    
}
