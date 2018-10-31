class Customer{

    constructor(fname:String,lname:String){
        this.firstName=fname;
        this.lastName=lname;
    }
    private firstName:String;
    private lastName:String;

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let cust=new Customer("Anna","Gavril9879ova");

cust.greeter();

