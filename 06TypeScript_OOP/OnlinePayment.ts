abstract class Payment {
    constructor(protected amount: number, protected date: string) {}

    abstract processPayment(): string;
}

class CreditCardPayment extends Payment {
    #cardNumber: string;

    constructor(amount: number, date: string, cardNumber: string) {
        super(amount, date);
        this.#cardNumber = cardNumber;
    }

    processPayment(): string {
        return `Processing credit card payment of $${this.amount} on ${this.date}`;
    }
}

class PayPalPayment extends Payment {
    constructor(amount: number, date: string, private email: string) {
        super(amount, date);
    }

    processPayment(): string {
        return `Processing PayPal payment of $${this.amount} on ${this.date} for ${this.email}`;
    }
}

class CryptoPayment extends Payment {
    constructor(amount: number, date: string, private walletAddress: string) {
        super(amount, date);
    }

    processPayment(): string {
        return `Processing crypto payment of $${this.amount} on ${this.date} to wallet ${this.walletAddress}`;
    }
}

const creditCardPayment = new CreditCardPayment(100, "2025-02-04", "1234-5678-9876-5432");
const paypalPayment = new PayPalPayment(50, "2025-02-04", "ombade364@gmail.com");
const cryptoPayment = new CryptoPayment(200, "2025-02-04", "0xABC123XYZ");

console.log(creditCardPayment.processPayment());
console.log(paypalPayment.processPayment());
console.log(cryptoPayment.processPayment());