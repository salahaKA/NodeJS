function myMiddleware(req,res,next){
    console.log("I am custome middle ware")
    next()
}

module.exports= myMiddleware


// function myMiddleware2(req,res,next){
//     console.log("Iam second middle ware")
//     next()

// }

// module.exports= myMiddleware2