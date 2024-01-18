function Add(a,b){
    console.log(a+b)
}

function Sub(a,b){
    console.log(a-b)
}

function Mul(a,b){
    console.log(a*b)
}

function Div(a,b){
    console.log(a/b)
}

module.exports={
    addition: Add,
    subtraction: Sub,
    multiplication: Mul,
    division: Div
}