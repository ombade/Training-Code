import java.util.Objects;

public class Employee {
    int id;
    String Name ;
    double salary;
int age ;
Employee(int id , String name , double salary , int age )
{
    this.id = id;
    this.Name = name;
    this.salary = salary;
    this.age = age;
}
    @Override
    public String toString() {
        return "Employee{id=" + id + ", name='" + Name + "', salary=" + salary + ", age=" + age + "}";
    }
    double getSalary()
    {
        return salary;
    }
    String getName()
    {
        return Name;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Employee employee = (Employee) obj;
        return id == employee.id && Name.equals(employee.Name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, Name);
    }


}

