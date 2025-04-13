import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;
class Student{
    public String name;

    Student(String name)
    {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Override   
    public String toString() {
        return "Student [name=" + name + "]";
    }
}

interface MyInterface {
    String method1();
   

    //Predefined functional interface
    // 1) Predicate
    // 2) Consumer
    // 3) Supplier
    // 4) Function
    // 5) BiFunction
    // 6) UnaryOperator
    // 7) BinaryOperator
    // 8) ToIntFunction
    // 9) ToDoubleFunction
    // 10) ToLongFunction
    // 11) IntFunction
    // 12) DoubleFunction
    // 13) LongFunction
    // 14) IntToDoubleFunction
    // 15) IntToLongFunction
    // 16) LongToIntFunction    

    // Predicate
    // Predicate is a functional interface that represents a single argument function that returns a boolean value
    // It is used to evaluate a condition and can be used in filter operations
    // Predicate<String> predicate = (String str) -> str.length() > 5;
    // Predicate<Integer> iseven = x -> x > 100;

    //     List<Integer> list = new ArrayList<>( Arrays.asList(1,2,3,4,500,200));
    //     list.stream().filter(iseven).peek(System.out :: println).collect(Collectors.toList());
  


    //Function 
    // Function is a functional interface that represents a single argument function that returns a value
    // It is used to transform data and can be used in map operations
    // Function<String, Integer> length = (String str) -> { return str.length(); };
    // Function<String, Integer> length1 = (String str) ->   str.length();
    // Function<String, Integer> length2 = (str) ->   str.length();
    // Function<Integer, Integer> square = (Integer x) -> x * x;
    // Function<Integer, Integer> square1 = x -> x * x;

    Function<String ,Integer> fun1 = (x) -> x.length();
    Function<String ,Integer> fun2 = (x) -> x.length();;

    System.out.println(fun1.andThen(fun2).apply("Hello"));

Function<Integer , Integer> fun3 = (x) -> x * x;
Predicate<Integer> isEven = (x) -> x % 2 == 0;
Consumer<Integer> print = (x) -> System.out.println(x);
Supplier<Integer> random = () -> (int) (Math.random() * 100);

int result = fun3.apply(5);
boolean f1 = isEven.test(10);
print.accept(5);
random.get();

if(isEven(Random.get()))
{
    fun3.apply(5);
    print.accept(5);
    System.out.println("The number is even");
}

// bifunction , biconsumer, biPredicate , bisupplier
// BiFunction
// BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
// BiFunction<Integer, Integer, Integer> add1 = (a, b) -> a + b;
// System.out.println(add.apply(5, 10));

// BiConsumer
// BiConsumer<Integer, Integer> add = (a, b) -> System.out.println(a + b);
// BiConsumer<Integer, Integer> add1 = (a, b) -> System.out.println(a + b);
// add.accept(5, 10);

// BiPredicate
// BiPredicate<Integer, Integer> isEven = (a, b) -> a % 2 == 0 && b % 2 == 0;
// BiPredicate<Integer, Integer> isEven1 = (a, b) -> a % 2 == 0 && b % 2 == 0;
// System.out.println(isEven.test(5, 10));

// BiSupplier
// BiSupplier<Integer, Integer> random = () -> (int) (Math.random() * 100);
// BiSupplier<Integer, Integer> random1 = () -> (int) (Math.random() * 100);
// System.out.println(random.get());

// UnaryOperator
// UnaryOperator<Integer> square = (x) -> x * x;
// UnaryOperator<Integer> square1 = (x) -> x * x;
// System.out.println(square.apply(5));
// UnaryOperator<String> toUpperCase = (x) -> x.toUpperCase();
// UnaryOperator<String> toUpperCase1 = (x) -> x.toUpperCase();





 

    
}
class MethodRefrenceLearining{
/*
 * 
 * Method reference is a shorthand notation of a lambda expression to call a method
 * Method references allow to refer to a method without invoking it
 * making our code cleaner and more readable
 * They can ve used in place of a lambda expression when the lambdas rexpression only calls an existing method
 * 
 * There are four types of method references
 * 1) Reference to a static method
 * 2) Reference to an instance method of a particular object
 *  3) Reference to an instance method of an arbitrary object of a particular type
 * 4) Reference to a constructor
 * 
 * it is use to refer to a method by its name
 * it is used inplace of lambda expression
 */

 // Example of method reference

 List<String> list = Arrays.asList("a", "b", "c", "d");
 list.forEach(System.out::println); // Reference to a static method

    
 //constructor refrence
 List<Student> studentlist = list.stream().map(Student::new).collect(Collectors.toList()); 
 

}
class LambdaExpressionlearning
{
/* 
    //The Expression who does not have any name 
    //no return type 
    //not modifer

    // Steps to Make the any function lambda exprssion 
    // 1)Remove modifer (public, private , proctected)
    2)remove the return type 
    3) Remove the method name 
    4) place arrow

    for example 
    private int getStringLength(String Str)
    {
    return str.length();
    }

    lambda expression 
    (string str) -> { str.length()}

   1) if the body has only single statemnet then remove the cury body

    (String str) -> str.length()

    2)  useType inference , compiler guessthe situation or context

    (str) -> str.length();
    (a,b) -> System.out.printn(a+b);

    3) You can skip the return keyword

    4) if only one param remove small breackets also

    str -> str.length();

    Benefits of Lambda Expression 
    1) To enable Function programming in java
    2)To make code more readable , naintainable and conscise code
    3)To enavle parallel processing
    4)JAR file reduction
    5) Elimination of shadow vaiables


    Interface reference can be used to hold lambda expression 
    Using lambda expression we don't need to use ant separte implementation class

*/
// simple function 
private int getStringLength(String Str)
{
return Str.length();
}
MyInterface m1 = () -> "Hello this is method 1";


Function<String, Integer> length = (String str) -> { return str.length(); };
Function<String, Integer> length1 = (String str) ->   str.length();
Function<String, Integer> length2 = (str) ->   str.length();




List<Integer> list = new ArrayList<>();
public LambdaExpressionlearning() {
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    Collections.sort(list, (a, b) -> a - b);
    System.out.println("The sorted list is " + list);
}



}

class FunctionalInterFaceLarning{

    /*
    Interface having Exaclty Single abstract method but can have any number of defaults and static methods 
    we can invoke lambda expression by using functional interface
    
    
   // What is the advantage of this annotation
    it restrict the interface to be a function interface
    so if people have already use some lambda expression and some new
    team member added another abstract method in the interface
    all lambda expression will have errors


    Inheritance in function Interface 

    Default Method in inside interface
    Until 1.7 only only public abstract method were allowed whether we declare by writing or not 
    similarly public static final variable were allowed
    since java 8  we can have concrete methos as well inside interface

    example 
    interface A
    {
    default void Sayhello()
        {
        System.out.println("Hello");
        }
    }

    Static methods inside inferace
    Static Method in interface are those methods which are defined in the interface with the keyword static 
    Static method contain the complete definition of the function 
    cannot be overridden or changed in the implementation class

     */


  
   

}
class streamlearning{

    public void creatingStream()
    {
        // Creating a stream from a collection
        List<String> list = Arrays.asList("a", "b", "c", "d");
        Stream<String> stream = list.stream();
        stream.forEach(System.out::println);

        // Creating a stream from an array
        String[] array = {"e", "f", "g", "h"};
        Stream<String> arrayStream = Arrays.stream(array);
        arrayStream.forEach(System.out::println);

        // Creating a stream using Stream.of()
        Stream<String> ofStream = Stream.of("i", "j", "k", "l");
        ofStream.forEach(System.out::println);

        stream = Stream.generate(() -> "Hello").limit(5);
        stream.forEach(System.out::println);
        // Creating a stream using Stream.iterate()
        Stream<Integer> iterateStream = Stream.iterate(1, n -> n + 1).limit(5);
        iterateStream.forEach(System.out::println);


    }
    static void operations()
    {
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));

        Stream<Integer> evenList = list.stream().filter(n -> n %2 ==0);
    // ArrayList<Integer> enList = list.stream().filter(n -> n %2 == 0).collect(Collectors.toList());
    List<Integer> enList = list.stream().filter(n -> n % 2 == 0).collect(Collectors.toList());
        evenList.forEach(System.out::println);

        List<Integer> multiwith = list.stream().map(x -> x*10).collect(Collectors.toList());
        System.out.println("The map result ->");
        multiwith.forEach(System.out :: println);

    }
}
    
 
 class Java8 {
   public static void main(String[] args) {
    MyInterface M1 = new MyInterface() {
        @Override
        public String method1() {
            System.out.println("Method 1");
            return "Hello";
        }
    };
    MyInterface M2 = () -> "Method 2";
    

    // M1.method1();
    //    M2.method1();
    streamlearning obj = new streamlearning();
  obj.operations();
  Runnable r1 = ()->{
    for(int i =0; i< 10 ; i++)
    {
        System.out.println("Thread 1 " + i);
    }
  };
    Runnable r2 = ()->{
        for(int i =0; i< 10 ; i++)
        {  System.out.println("Thread 2 " + i) ; }
};

    Thread t1 = new Thread(r1);
    Thread t2 = new Thread(r2);
    t1.start();
    t2.start();
   }

   Predicate<Integer> isEven = n -> n % 2 == 0 ;

   System.out.println(isEven.test(10));
   
}