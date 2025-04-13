import java.util.*;



public class Collection {

    static void printEmployees(ArrayList<Employee> ep) {
        for (Employee emp : ep) {
            System.out.println(emp);
        }
    }

    static void ArrayList_LL() {
        ArrayList<Employee> ep = new ArrayList<>();
        ep.add(new Employee(1, "om", 100, 21));
        ep.add(new Employee(2, "ram", 200, 21));
        ep.add(new Employee(3, "sham", 300, 21));
        ep.add(new Employee(4, "sham1", 4000, 21));
        ep.add(new Employee(4, "sham2", 5000, 21));

        System.out.println("\nOriginal ArrayList:");
        printEmployees(ep);

        ep.remove(2); // Remove by index
        System.out.println("\nAfter removing index 2:");
        printEmployees(ep);

        ep.sort(Comparator.comparingDouble(Employee::getSalary));
        System.out.println("\nSorted by salary:");
        printEmployees(ep);

        System.out.println("\nEmployee with highest salary: " + Collections.max(ep, Comparator.comparingDouble(Employee::getSalary)));

        LinkedList<Employee> LL = new LinkedList<>(ep);
        LL.add(new Employee(6, "jon", 6000, 60));
        LL.add(new Employee(7, "son", 6000, 60));
        LL.add(new Employee(8, "mon", 6000, 60));
        LL.add(new Employee(9, "don", 6000, 60));
        LL.add(new Employee(10, "con", 6000, 60));

        System.out.println("\n3rd Employee in LinkedList: " + LL.get(2));

        LL.set(2, new Employee(11, "Michael", 7000, 30));
        System.out.println("\nAfter replacing 3rd Employee:");
        for (Employee emp : LL) System.out.println(emp);

        LL.removeIf(emp -> emp.getName().equals("om"));
        System.out.println("\nAfter removing 'om':");
        for (Employee emp : LL) System.out.println(emp);
    }

    public static void SetOperations() {
        HashSet<Employee> employeeSet = new HashSet<>();

        employeeSet.add(new Employee(1, "Alice", 50000, 25));
        employeeSet.add(new Employee(2, "Bob", 60000, 27));
        employeeSet.add(new Employee(3, "Charlie", 55000, 26));
        employeeSet.add(new Employee(4, "David", 70000, 29));
        employeeSet.add(new Employee(5, "Emma", 75000, 30));

        boolean added = employeeSet.add(new Employee(1, "Alice", 50000, 25));
        System.out.println("\nDuplicate added? " + added);

        System.out.println("\nEmployees in HashSet:");
        for (Employee emp : employeeSet) {
            System.out.println(emp);
        }

        boolean exists = employeeSet.contains(new Employee(3, "Charlie", 55000, 26));
        System.out.println("Does Charlie exist? " + exists);
    }

    public static void MapOperations() {
        HashMap<Integer, Employee> employeeMap = new HashMap<>();

        employeeMap.put(1, new Employee(1, "Alice", 50000, 25));
        employeeMap.put(2, new Employee(2, "Bob", 60000, 27));
        employeeMap.put(3, new Employee(3, "Charlie", 55000, 26));
        employeeMap.put(4, new Employee(4, "David", 70000, 29));
        employeeMap.put(5, new Employee(5, "Emma", 75000, 30));

        System.out.println("\nEmployee with ID 3: " + employeeMap.get(3));

        employeeMap.remove(2);
        System.out.println("\nAfter removing ID 2:");
        for (Map.Entry<Integer, Employee> entry : employeeMap.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }
    }

    public static void StackOperations() {
        Stack<Employee> employeeStack = new Stack<>();

        employeeStack.push(new Employee(1, "Alice", 50000, 25));
        employeeStack.push(new Employee(2, "Bob", 60000, 27));
        employeeStack.push(new Employee(3, "Charlie", 55000, 26));
        employeeStack.push(new Employee(4, "David", 70000, 29));
        employeeStack.push(new Employee(5, "Emma", 75000, 30));

        System.out.println("\nPopped Employee: " + employeeStack.pop());
        System.out.println("Top Employee (Peek): " + employeeStack.peek());

        int position = employeeStack.search(new Employee(3, "Charlie", 55000, 26));
        System.out.println("Charlie found at position: " + position);

        System.out.println("Is stack empty? " + employeeStack.isEmpty());
    }

    public static void main(String[] args) {
        ArrayList_LL();
        SetOperations();
        MapOperations();
        StackOperations();
    }
}
