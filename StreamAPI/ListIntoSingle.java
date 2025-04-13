import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ListIntoSingle {
    public static void main(String[] args) {
         List<List<Integer>> listOfLists = Arrays.asList(
            Arrays.asList(1, 1, 7, 12),
            Arrays.asList(15, 3, 20),
            Arrays.asList(25, 5, 15)
        );

        List<Integer> result = listOfLists.stream()
            .flatMap(List::stream)                  // 1. Flatten
            .distinct()                             // 2. Remove duplicates
            .filter(n -> n > 10)                    // 3. Filter > 10
            .sorted()                               // 4. Sort ascending
            .collect(Collectors.toList());

        System.out.println("Result: " + result);
    }
    
}
