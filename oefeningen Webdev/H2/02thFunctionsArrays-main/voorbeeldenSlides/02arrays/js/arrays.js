"use strict";

// Array built-in methods
let pizzas = ["Chicken & Bacon", "Mushroom", "Pepperoni"];
console.log(pizzas);
pizzas = pizzas.concat(["Spicy Beef", "Chicken & Mushroom"]);
console.log(pizzas);
console.log(pizzas.join());
console.log(pizzas.slice(2, 4));
console.log(pizzas.splice(2, 1, "Chicken & Pepper", "Veggie Deluxe"));
console.log(pizzas);
console.log(pizzas.reverse());
console.log(pizzas.sort());
