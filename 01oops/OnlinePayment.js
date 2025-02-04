// ## Online Payment System

// Create Payment class with amount, date.
// Subclasses: CreditCardPayment, PayPalPayment, CryptoPayment.
// Abstraction: Hide sensitive details like #cardNumber.
// Base Payment class
class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }

    processPayment() {
        return `Processing payment of $${this.amount} on ${this.date}`;
    }
}

// CreditCardPayment subclass
class CreditCardPayment extends Payment {
    #cardNumber;

    constructor(amount, date, cardNumber) {
        super(amount, date);
        this.#cardNumber = cardNumber;
    }

    processPayment() {
        return `Processing credit card payment of $${this.amount} on ${this.date}`;
    }
}

// PayPalPayment subclass
class PayPalPayment extends Payment {
    constructor(amount, date, email) {
        super(amount, date);
        this.email = email;
    }

    processPayment() {
        return `Processing PayPal payment of $${this.amount} on ${this.date} for ${this.email}`;
    }
}

// CryptoPayment subclass
class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }

    processPayment() {
        return `Processing crypto payment of $${this.amount} on ${this.date} to wallet ${this.walletAddress}`;
    }
}

// Example usage
const creditCardPayment = new CreditCardPayment(100, "2025-02-04", "1234-5678-9876-5432");
const paypalPayment = new PayPalPayment(50, "2025-02-04", "ombade364@gmail.com");
const cryptoPayment = new CryptoPayment(200, "2025-02-04", "0xABC123XYZ");

console.log(creditCardPayment.processPayment()); 
console.log(paypalPayment.processPayment()); 
console.log(cryptoPayment.processPayment()); 