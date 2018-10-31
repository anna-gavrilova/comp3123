export class Customer{

    constructor(fname:String,lname:String,age:number){
        this.firstName=fname;
        this.lastName=lname;
        this.age=age;
    }
    private firstName:String;
    private lastName:String;
    private age:number;

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge(){
        console.log(this.age);
    }
}

// let cust=new Customer("Anna","Gavril9879ova",20);
// cust.greeter();

