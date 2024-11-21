
Question: 1

class Book {
    title;
    author;
    isbn;

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    
    }
    checkout(title) {
        console.log(this.title, "is now checked out");
    }
    returnbook(title) {
        console.log(this.title, "has already returned");
    }
    updatetitle(newtitle) {
        this.title = newtitle;
        console.log("ISBN no", this.isbn, "book title was updated to", this.title);
    }
}
var Book1 = new Book("The Real Book", "various", "9008");
Book1.checkout();
Book1.returnbook();
Book1.updatetitle("Harry potter");
console.log(Book1);

// ---------------------------------------------------------------------------
Question: 2

class product{
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applydiscount(discountamount) {
        console.log(this.price -= discountamount);
    }
    getpriceafterdiscount() {
        console.log(this.price);
    }

}
var product1 = new product("Fan", "1200", "Electronic");
product1.applydiscount("100");
product1.getpriceafterdiscount();
console.log(product1);


// --------------------------------------------------------

Question: 3

class Account{
    name;
    number;
    balance;
    constructor(name, number, balance) {
        this.name = name;
        this.number = number;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(this.balance,"deposited to bank");
       
    }
    withdraw(amount) {
        this.balance -= amount;
        console.log(amount , "withdrawn from the bank");
    }
    getbalance() {
        console.log("final balance is", this.balance);
    }
}
var Account1 = new Account("Rajesh", "255");
Account1.deposit("300");
Account1.withdraw("200");
Account1.getbalance();
console.log(Account1);

// ---------------------------------------------------------------
Question: 4

class Vechile {
    model;
    licenseplate;
    mileage;

    constructor(model, licenseplate, mileage) {
        this.model = model;
        this.licenseplate = licenseplate;
        this.mileage = mileage;
    }
    drive(miles) {
        this.mileage = this.mileage + miles;
        console.log("vechile", this.licenseplate, "driven for", miles, "miles", "New mileage =", this.mileage);
    }
    getmileage() {
        console.log(this.mileage);
    }
}
var Vechile1 = new Vechile("CBR", "TS 2002", "20");
Vechile1.drive("5");
Vechile1.getmileage();
console.log(Vechile1);

// -------------------------------------------------------------
Question: 5

class Student{
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    setgrade(newgrade) {
        this.grade = newgrade;
        console.log("upgared grade is ", newgrade);
    }
    getgrade() {
        console.log("Student current grade is", this.grade);
    }
}
var Student1 = new Student("raju", "B");
Student1.setgrade("A");
Student1.getgrade();
console.log(Student1);