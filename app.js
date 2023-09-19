// Asynchronous and Synchronous function
/*
console.log("hello");

setInterval( ()=>{
    console.log("hello1");
},3000);



console.log("hello2");
console.log("hello3");
*/

// Callback Function


const addedCart = (callfunc)=>{
    console.log("added to cart");
    callfunc();
}
const selectAdd = (callback_a) =>{
    console.log("address selected");
    // callback_a();
}
const payment = (callfunc)=>{
    console.log("Payment Done!");
    callfunc();
}

addedCart(selectAdd);