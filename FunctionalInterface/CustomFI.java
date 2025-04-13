@FunctionalInterface
interface StringProcessor {
    String process(String str);

    default String toUpperCase(String str) {
        return str.toUpperCase();
    }

    static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
}

public class CustomFI {
    public static void main(String[] args) {
        StringProcessor removeSpaces = str -> str.replaceAll("\\s", "");
        StringProcessor replaceVowels = str -> str.replaceAll("[aeiouAEIOU]", "*");

        String input = "Hello Lambda Expressions";

        System.out.println("Original: " + input);
        System.out.println("Without Spaces: " + removeSpaces.process(input));
        System.out.println("Vowels Replaced: " + replaceVowels.process(input));

        StringProcessor dummy = str -> str; // just to call default method
        System.out.println("Uppercase: " + dummy.toUpperCase(input));
        System.out.println("Reversed: " + StringProcessor.reverse(input));
    }
}
