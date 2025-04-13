import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class SentencesIntoWords {

    public static void main(String[] args) {
        
        List<String> sentences = Arrays.asList(
            "Hello world",
            "Java is great",
            "Hello Java",
            "Java world"
        );

        // Split sentences into words, count occurrences, and use parallel stream
        Map<String, Long> wordCount = sentences.parallelStream()
            .flatMap(sentence -> Arrays.stream(sentence.split(" "))) // Split into words
            .collect(Collectors.groupingBy(word -> word, Collectors.counting())); // Count occurrences

        System.out.println("Word Count: " + wordCount);
    }
}
