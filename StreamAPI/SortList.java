import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

class SortList {
    public static void main(String[] args) {
         List<Integer> numbers = Arrays.asList(5, 3, 8, 1, 9, 2);

        // Ascending Order
        List<Integer> ascending = numbers.stream()
                                         .sorted()
                                         .collect(Collectors.toList());
        System.out.println("Ascending: " + ascending);

        // Descending Order
        List<Integer> descending = numbers.stream()
                                          .sorted(Comparator.reverseOrder())
                                          .collect(Collectors.toList());
        System.out.println("Descending: " + descending);
    }
}
