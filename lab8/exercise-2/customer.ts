class Customer{
    firstName:String;
    lastName:String;

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let cust=new Customer();
cust.firstName="Anna";
cust.lastName="Gavrilova";
cust.greeter();

