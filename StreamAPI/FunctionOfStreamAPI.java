// Task 5. Exploring various functions in stream api
// List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eve", "Bob", "Alice", "Frank");
// Consider above lists and perform –
// • Convert all names to uppercase.
// • Count how many names start with the letter
// Group names by their length (e.g., names of length 3, 4, etc.).
// • Create a comma-separated string of all names.
// • Use peek() to print each name while processing.
// • Run any operation using parallel stream and show thread names via peek()


import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FunctionOfStreamAPI {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eve", "Bob", "Alice", "Frank");

        
        List<String> upperCaseNames = names.stream()
                                            .map(String::toUpperCase)
                                            .collect(Collectors.toList());
        System.out.println("Uppercase Names: " + upperCaseNames);

        long countA = names.stream()
                           .filter(name -> name.startsWith("A"))
                           .count();
        System.out.println("Count of names starting with 'A': " + countA);
        
        var groupedByLength = names.stream()
                                    .collect(Collectors.groupingBy(String::length));
        System.out.println("Grouped by Length: " + groupedByLength);

    }
}
