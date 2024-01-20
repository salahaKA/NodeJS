// const { rejects } = require("assert");
// const { resolve } = require("path");

// how to produce promise in JS
 const myPromise= new Promise((resolve,reject)=>{
    const a=5
    const b=5
    setTimeout(()=>{
        if(a==b){
            resolve('operation successed')
        }else{
            reject('operation failed')
        }
    }, 2000);
 });


 //pending satate

//  console.log(myPromise)

//fullfilled

myPromise.then((result)=>{
    console.log(result)
})// fullfilled
.catch((error) => {
    console.error('Error:', error);
  });// rejected

  //promise successed

  
