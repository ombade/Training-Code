import java.util.Optional;

public class Main {

    public static Optional<String> validateEmail(String email) {
        if (email == null || email.trim().isEmpty()) {
            return Optional.of("Email cannot be empty.");
        }

        // Basic email regex (for demo purposes)
        String emailRegex = "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
        if (!email.matches(emailRegex)) {
            return Optional.of("Invalid email format.");
        }

        return Optional.empty(); // Valid email
    }

    public static void main(String[] args) {
        String email1 = "om@example.com";
        String email2 = "invalid_email";

        // Test email 1
        validateEmail(email1).ifPresentOrElse(
            err -> System.out.println("Error: " + err),
            () -> System.out.println(email1 + " is valid.")
        );

        // Test email 2
        validateEmail(email2).ifPresentOrElse(
            err -> System.out.println("Error: " + err),
            () -> System.out.println(email2 + " is valid.")
        );
    }
}
