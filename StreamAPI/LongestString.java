// API
// exercises
// Task 1. Find the longest string
// Given a list of string find the longest one using stream API
// Task 2. Sort list in ascending/descending
// Sort a list of numbers in ascending and then descending order.
// Task 3. Given a list of lists of integers. Your goal is to:
// 1. Flatten it into a single list.
// 2. Remove duplicate values.
// 3. Filter only numbers greater than 10.
// 4. Sort the final list in ascending order.
// Task 4. Given a list of strings. You need to:
// 1. Split all sentences into words.
// 2. Count how many times each word appears.
// 3. Use parallel stream to improve performance on large datasets.
// Task 5. Exploring various functions in stream api
// List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eve", "Bob", "Alice", "Frank");
// Consider above lists and perform –
// • Convert all names to uppercase.
// • Count how many names start with the letter

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

class LongestString {
    public static void main(String[] args) {
  
    List<String> words = Arrays.asList("Python", "C", "C++", "Java", "JavaScript");

        String longest = words.stream()
                              .max(Comparator.comparingInt(String::length))
                              .orElse("No strings");

        System.out.println("Longest String: " + longest);
    }
}


