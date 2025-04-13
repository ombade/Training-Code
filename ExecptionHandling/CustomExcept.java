class LowBalanceException extends Exception {
    public LowBalanceException(String message) {
        super(message);
    }
}
class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void withdraw(double amount) throws LowBalanceException {
        if (amount > balance) {
            throw new LowBalanceException("Insufficient balance. Current balance: " + balance);
        }
        balance -= amount;
        System.out.println("Withdrawal successful. Remaining balance: " + balance);
    }
}

public class CustomExcept {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount(5000);
        try {
            acc.withdraw(7000);
        } catch (LowBalanceException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
