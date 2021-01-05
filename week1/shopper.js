var shopper= {
    name: "mike curry",
groceryCart: "silverwithfourwheels",
cartItems: ["Bananas","Apples","Potatoes"],
howManyPotatoes:12,
allFruit: function() {
    return this.name + " " + this.howManyPotatoes;
}
};
console.log(shopper.allFruit())
