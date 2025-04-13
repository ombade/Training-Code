import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.BiFunction;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class Person {
    public String name;
    public int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}

public class ConstructorReference {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("om", "raj", "sham");
        List<Integer> ages = Arrays.asList(20, 30, 40);

        Map<String, Integer> nameAgeMap = IntStream.range(0, names.size())
                .boxed()
                .collect(Collectors.toMap(names::get, ages::get));

    
        BiFunction<String, Integer, Person> personCreator = Person::new;

        List<Person> people = nameAgeMap.entrySet()
                .stream()
                .map(entry -> personCreator.apply(entry.getKey(), entry.getValue()))
                .peek(System.out::println) // Print each Person object
                .collect(Collectors.toList());

     
    }
}
