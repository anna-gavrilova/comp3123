var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var cust = new Customer();
cust.firstName = "Anna";
cust.lastName = "Gavrilova";
cust.greeter();
