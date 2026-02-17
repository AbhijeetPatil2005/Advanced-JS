// Prototypal Inheritance
class Pizza {
  constructor(size, toppings, preference, crust) {
    this.size = size;
    this.toppings = toppings;
    this.preference = preference;
    this.crust = crust;
  }

  serve() {
    console.log(`This is a ${this.size} Pizza`);
  }
}

class stuffedCrustPizza extends Pizza {
  constructor(size, toppings, preference, crust, stuffing) {
    super(size, toppings, preference, crust);
    this.stuffing = stuffing;
  }
}

let order1 = new Pizza("Medium", ["Tomato", "Cheese"], "Veg", "Thin");

let order2 = new stuffedCrustPizza("small",["Chesse","Mushrooms"],"Veg","Thick","Mozarella")
console.log(order1);

console.log(order2)

order1.serve();

//Classical Inheritace in JS
