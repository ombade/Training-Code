interface CalculatorF {
    int calculate(int a, int b);
}

class Calcultor {
    public static void main(String[] args) {
        CalculatorF add = (a, b) -> a + b;
        CalculatorF subtract = (a, b) -> a - b;
        CalculatorF multiply = (a, b) -> a * b;
        CalculatorF divide = (a, b) -> b != 0 ? a / b : 0;

        System.out.println("Add: " + add.calculate(10, 5));
        System.out.println("Subtract: " + subtract.calculate(10, 5));
        System.out.println("Multiply: " + multiply.calculate(10, 5));
        System.out.println("Divide: " + divide.calculate(10, 5));
    }
}
