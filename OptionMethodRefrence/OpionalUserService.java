
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

class User {
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() { return name; }

    public String getEmail() { return email; }

    @Override
    public String toString() {
        return "User{name='" + name + "', email='" + email + "'}";
    }
}

class UserService{

static List<User> list = Arrays.asList(
      
    new User("om" ,"om@gmail.com"),
    new User("raj" ,"raj@gmail.com")

    );

    public static Optional<User> getUserByEmail(String email)
    {
        return list.stream()
        .filter(user -> user.getEmail().equalsIgnoreCase(email))
        .findFirst(); 
    }
}
public class OpionalUserService {
    public static void main(String[] args) {
        String inputEmail1 = "swara@example.com";
        String inputEmail2 = "neha@example.com";

        // Try to find user with email 1
        Optional<User> user1 = UserService.getUserByEmail(inputEmail1);
        user1.ifPresentOrElse(
            u -> System.out.println("User found: " + u),
            () -> System.out.println("No user found with email: " + inputEmail1)
        );

        // Try to find user with email 2
        Optional<User> user2 = UserService.getUserByEmail(inputEmail2);
        user2.ifPresentOrElse(
            u -> System.out.println("User found: " + u),
            () -> System.out.println("No user found with email: " + inputEmail2)
        );
    }
    }
    

