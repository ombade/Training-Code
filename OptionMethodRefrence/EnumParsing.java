import java.util.Optional;

enum Role {
    ADMIN,
    USER,
    GUEST
}

public class Main {
    // Method to parse string to Role enum safely
    public static Optional<Role> parseRole(String value) {
        try {
            return Optional.of(Role.valueOf(value.toUpperCase()));
        } catch (IllegalArgumentException e) {
            return Optional.empty();
        }
    }

    public static void main(String[] args) {
        // Test with valid role
        Optional<Role> role1 = parseRole("admin");
        role1.ifPresentOrElse(
            r -> System.out.println("Parsed role: " + r),
            () -> System.out.println("Invalid role")
        );

        // Test with invalid role
        Optional<Role> role2 = parseRole("superuser");
        role2.ifPresentOrElse(
            r -> System.out.println("Parsed role: " + r),
            () -> System.out.println("Invalid role")
        );
    }
}
