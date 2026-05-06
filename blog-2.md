# OOP Pillars in TypeScript

When projects get big, code can be hard to manage. The four pillars of OOP **Inheritance, Polymorphism, Abstraction, and Encapsulation** help keep things simple.

---
## Inheritance
---
Reuse code instead of writing it again.

```ts
class User {
  constructor(public name: string) {}
  greet() {
    return `Hi, ${this.name}`;
  }
}

class Admin extends User {
  remove(user: User) {
    console.log(`${user.name} removed by ${this.name}`);
  }
}
```
---
## Polymorphism
---
Same interface, different behavior.

```ts
interface Payment {
  pay(amount: number): void;
}

class BKash implements Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} by bKash`);
  }
}

class Nagad  implements Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} by Nagad`);
  }
}

function checkout(p: Payment, amt: number) {
  p.pay(amt);
}```
---
##Abstraction
---

Hide details, show only what’s needed.

```ts
abstract class DB {
  abstract connect(): void;
}

class MongoDB extends DB {
  connect() {
    console.log("Connected to MongoDB");
  }
}
```

---
##Encapsulation
---
Protect data inside the class.

```ts
class Account {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```
---
##Why Useful
---
- Inheritance -> less repetition
- Polymorphism -> easy to extend
- Abstraction -> less confusion
- Encapsulation -> safe data

--
So, together, they make big TypeScript projects cleaner and easier to handle.