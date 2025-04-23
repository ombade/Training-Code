# Spring Framework Assignment Answers

## 1. Dependency Injection in Spring vs Regular Object Creation

**Answer:**
Dependency Injection (DI) in Spring is a design pattern where objects receive their dependencies from an external source (the Spring container) rather than creating them directly. This is different from regular object creation using `new` in several ways:

- **Loose Coupling**: With DI, classes don't create their dependencies directly
- **Centralized Management**: Spring container manages all object creation and wiring
- **Easy Testing**: Dependencies can be easily mocked for testing
- **Lifecycle Management**: Spring handles the complete lifecycle of beans

**Real-world Example:**
Imagine a coffee shop:
- Without DI: Each barista would need to know how to grow coffee beans, roast them, and maintain espresso machines (tight coupling)
- With DI: The barista simply receives a ready-to-use espresso machine (dependency injection). The coffee shop manager (Spring container) handles all the setup and maintenance.

## 2. Autowiring Ambiguity with Same Type Beans

**Answer:**
If you have two beans of the same type and use `@Autowired` without `@Qualifier` or `@Primary`, Spring will throw a `NoUniqueBeanDefinitionException` because it cannot determine which bean to inject.

**Problem Code Snippet:**
```java
@Configuration
public class AppConfig {
    @Bean
    public DataSource mysqlDataSource() {
        return new MysqlDataSource();
    }
    
    @Bean
    public DataSource postgresDataSource() {
        return new PostgresDataSource();
    }
}

@Service
public class ReportService {
    @Autowired  // This will cause an error - two DataSource beans available
    private DataSource dataSource;
}
```

## 3. Spring IoC Container Workflow

**Answer:**
When a Spring application starts, the IoC container goes through these key steps:

1. **Component Scanning**: 
   - Scans all classes in specified packages for Spring annotations
   - Identifies candidate components (`@Component`, `@Service`, etc.)

2. **Bean Definition Creation**:
   - Creates bean definitions for each identified component
   - Processes configuration classes (`@Configuration`) and `@Bean` methods

3. **Bean Instantiation**:
   - Creates bean instances based on their definitions
   - Follows the specified scope (singleton by default)

4. **Dependency Injection**:
   - Resolves and injects all dependencies
   - Handles both explicit (`@Autowired`) and implicit injections

5. **Initialization**:
   - Calls `@PostConstruct` methods
   - Processes `InitializingBean` callbacks

6. **Ready for Use**:
   - Application context is fully initialized
   - Beans are available for use in the application

## 4. Preferred Dependency Injection Method

**Answer:**
For a service class with multiple dependencies, I would prefer **constructor injection** because:

1. **Immutability**: Dependencies can be made final, ensuring they're set once at construction
2. **Clear Requirements**: Constructor makes dependencies explicit
3. **Testability**: Easier to write tests as dependencies are clearly visible
4. **Null Safety**: Guarantees the class is never in an invalid state
5. **Spring Recommendation**: Spring team recommends constructor injection since version 4.x

**Example:**
```java
@Service
public class OrderService {
    private final PaymentService paymentService;
    private final InventoryService inventoryService;
    private final NotificationService notificationService;

    @Autowired  // Optional in Spring 4.3+
    public OrderService(PaymentService paymentService, 
                       InventoryService inventoryService,
                       NotificationService notificationService) {
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
        this.notificationService = notificationService;
    }
}
```

## 5. Stereotype Annotations: @Component, @Service, @Repository, @Controller

**Answer:**
While all these annotations serve to mark classes as Spring-managed components, they have different semantic purposes:

1. **@Component**: Generic stereotype for any Spring-managed component
2. **@Service**: Indicates a business service facade (service layer)
3. **@Repository**: Marks DAOs or repositories (persistence layer, adds exception translation)
4. **@Controller**: Marks web controllers (presentation layer, often used with @RequestMapping)

**Key Differences:**
- **Semantics**: They communicate the role of the class to developers
- **Special Features**: 
  - `@Repository` enables automatic exception translation
  - `@Controller` works with Spring MVC
- **Usage**: While technically interchangeable, using the right annotation improves code readability and may enable framework features

## 6. Custom RestTemplate Bean Configuration

**Answer:**
```java
@Configuration
public class AppConfig {
    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        // Add any custom configuration here
        restTemplate.setErrorHandler(new CustomErrorHandler());
        return restTemplate;
    }
}
```

## 7. Missing Stereotype Annotation Consequences

**Answer:**
If you forget to annotate your service class with `@Component` or any stereotype annotation, Spring won't recognize it as a bean and won't manage its lifecycle or perform dependency injection.

**Example:**
```java
// Missing @Service annotation
public class UserService {
    @Autowired  // This won't work
    private UserRepository userRepository;
    
    public void saveUser(User user) {
        userRepository.save(user);
    }
}
```

**Result:**
- `UserService` won't be created as a Spring bean
- Any attempt to autowire `UserService` will fail
- `userRepository` won't be injected (will be null)
- The class essentially becomes a plain POJO without Spring features

## 8. Conditional Bean Loading with @Profile

**Answer:**
To conditionally load a bean only in dev environment based on `app.env=dev`:

```java
@Configuration
public class DevConfig {
    @Bean
    @Profile("dev")  // Only created when 'dev' profile is active
    public DevOnlyService devOnlyService() {
        return new DevOnlyService();
    }
}
```

To activate the profile, set in `application.properties`:
```
spring.profiles.active=dev
```

## 9. @ComponentScan vs @EnableAutoConfiguration

**Answer:**
**@ComponentScan**:
- Scans specified packages for Spring components (`@Component`, `@Service`, etc.)
- Explicitly declares which packages to scan for your application beans
- Example use: When you want to limit scanning to specific packages for performance

**@EnableAutoConfiguration**:
- Enables Spring Boot's auto-configuration mechanism
- Attempts to configure beans you might need based on classpath
- Example: Automatically configuring DataSource when it finds JDBC drivers

**Practical Use Case**:
In a Spring Boot application:
```java
@SpringBootApplication  // Combines both
public class MyApp {
    public static void main(String[] args) {
        SpringApplication.run(MyApp.class, args);
    }
}
```

- `@ComponentScan` is useful when you have custom components in specific packages
- `@EnableAutoConfiguration` is useful for automatically setting up common infrastructure (like DataSource, JPA, etc.)

Both work together in typical Spring Boot apps - auto-configuration sets up common needs while component scanning finds your application-specific beans.

