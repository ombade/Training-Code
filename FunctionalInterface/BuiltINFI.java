import java.util.*;
import java.util.function.*;
import java.util.stream.Collectors;

 class BuiltInFI {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        // Predicate to filter even numbers
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println("Even Numbers:");
        numbers.stream().filter(isEven).forEach(System.out::println);

        // Consumer to print each element
        Consumer<Integer> print = System.out::println;
        System.out.println("All Numbers:");
        numbers.forEach(print);

        // Function to convert strings to their lengths
        List<String> words = Arrays.asList("Lambda", "Java", "Stream");
        Function<String, Integer> lengthFunc = String::length;
        List<Integer> lengths = words.stream().map(lengthFunc).collect(Collectors.toList());
        System.out.println("Lengths of Strings: " + lengths);
    }
}
