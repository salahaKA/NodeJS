const { rejects } = require("assert");
const { resolve } = require("path");

function placeOrder(drink){
    return new Promise((resolve,rejects)=>{
        if(drink=='coffee'){
            resolve('Your coffee will com soon')
        }else{
            rejects('Your order not available')
        }
    });
}

function processOrder(order){
    return new Promise((resolve)=>{
        console.log('Order is being procecced')
        resolve(`${order}is served`)
        
    });
}

// placeOrder('coffee')
// .then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed= processOrder(orderPlaced)
//     return orderIsProcessed
// })
// .then(function(processOrder){
//     console.log(processOrder)
// }) //chaining of promise
// .catch((error) => {
//     console.error('Error:', error);
// })


// Async Await

async function serveOrder(){
    try{
        let orderPlaced= await placeOrder('coffee')
        console.log(orderPlaced)
        let processedOrder= processOrder(orderPlaced)
        console.log(processedOrder)
    }catch(error){
        console.log(error)
    }
    
}
serveOrder()
