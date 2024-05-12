// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) { // Step 1
    for (const dishes of dishData) { // Step 2
        let finalPrice; // Step 3
        if (taxBoolean === true) { // Step 4
            finalPrice = dishes.price * tax;
        }
        else if (taxBoolean === false){ // Step 5
            finalPrice = dishes.price;
        }
        else { // Step 6
            console.log("You need to pass a boolean to the getPrices call!")
            return; // jumps out the function
        }
        console.log(`Dish: ${dishes.name} Price: $${finalPrice.toFixed(2)}`); // Step 7
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) { // Step 9
    getPrices(taxBoolean);
    
    if (typeof guests == "number" && guests > 0 && guests < 30) { // Step 10
        let discount = 0; // Step 11
        if (guests < 5) {
            discount = 5;
        }
        else if (guests >= 5) {
            discount = 10;
        }
        console.log(`Discount is: $${discount}`); // Step 13
    }
    else { // Step 12
        console.log("The second argument must be a number between 0 and 30");
    }
}

// Call getDiscount()
getDiscount(true, 2) // Test Case 1
getDiscount(false, 10) // Test Case 2
