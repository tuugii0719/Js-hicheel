function f1(x,y){
    console.log(Math.pow(x,2)+Math.pow(y, 2))
}
f1(10, 20)

function f2(x){
    console.log(Math.pow(x, e))
}
const e= Math.E
f2(20)

function f3(a,b){
    console.log(Math.pow(a, 2)-Math.pow(b,2))
}
f3(10,20)

function f4(a,b){
    console.log(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)))
}
f4(10,20)

function f5(y){
    console.log(Math.pow(y, 2)-2*y+4)
}
f5(10)

function f6(a,b){
    console.log(a-b*(Math.pow(a, 2)-Math.pow(b, 2))-a)
}
f6(10,20)

function f7(a,b){
    console.log(2*(a+b))
}
f7(10,20)

function f8(a,b){
    console.log(Math.pow(a+b,2))
}
f8(10,20)

function f9(a,b){
    console.log(Math.pow(a, 2)-Math.pow(b,2))
}
f9(10,20)

function f10(a,b){
    console.log(a*b)
}
f10(10,20)

function f11(a,b){
    console.log(3 * Math.pow((a+b),2))
}
f11(10,20)

function f12(x,y){
    console.log(Math.pow(x, 3)-Math.pow(y,3))
}
f12(10,20)

function f13(a,b){
    console.log(a/b)
}
f13(10,20)

function f14(y){
    console.log(Math.pow(y,3)-3*Math.pow(y,2)+8)
}
f14(10,20)

function f15(x,y){
    console.log(Math.pow(1/x, 2)-Math.pow(1/y,2))
}
f15(10,20)

function f16(x,y){
    console.log(Math.sqrt(Math.pow(x,2)-Math.pow(y,2)))
}
f16(10,20)

function f17(x){
    let mult=1
    for (let i = 1; i <= x; i++) {
        mult *= i
    }
    console.log(mult)
}
f17(10)

function f18(m){
    const c=300_000_000
    console.log(m*Math.pow(c,2))
}
f18(2)

function myFunction(p1,p2){
    return p1+p2
}
console.log(myFunction(2,3))

function isEven(number){
    let message 
    if(number%2 == 0){message="even numba"   
    } else { message="Odd numba"}
    return message
}
console.log(isEven(301))

// function findMax(a,b){
//     let message
//     if(a==b){
//         message= a + " and " + b + " are equal"
//     } 
//     else if(a > b){message= a+ " is greater"}
//     else{message=b+ "is greater"}
//     return message
// }
// let too = function findMax(a,b){
//         let message
//         if(a==b){
//             message= a + " and " + b + " are equal"
//         } 
//         else if(a > b){message= a+ " is greater"}
//         else{message=b+ " is greater"}
//         return message
//     }
let too = (a,b) => {
        let message
        if(a==b){
            message= a + " and " + b + " are equal"
        } 
        else if(a > b){message= a+ " is greater"}
        else{message=b+ " is greater"}
        return message``
    }
console.log(too(Number(prompt("First number")),Number(prompt("secondnumber"))))