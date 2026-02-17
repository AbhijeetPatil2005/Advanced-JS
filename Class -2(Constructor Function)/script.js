// Pizza Shop
// Properties - Size,Toppings,Crust,veg - non veg

// const pizza1 = {
//     size : 'medium',
//     toppings : ['mushroom','onion','capsicum'],
//     crust : 'thin crust',
//     veg : true
// }

// const pizza2 = {
//     size : 'small',
//     toppings : ['mushroom','onion','capsicum'],
//     crust : 'thin crust',
//     veg : false
// }



// Constructor Function

function Pizza(size,toppings,preference,crust){
    // this keyword points to empty object 
    //  this --> {}
    this.size = size
    this.toppings = toppings
    this.preference = preference
    this.crust = crust

    this.serve = function(){
        console.log(`A ${this.size} pizza with ${this.toppings} is Served`)
    } 
}

let order1 = new Pizza('Medium',['Tomato','Cheese'] , "Veg","Thin")
console.log(order1)
order1.serve()

function create(size,toppings){

}