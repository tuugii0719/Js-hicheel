console.log("Day 15 -Array")
let f1="LLo"
let f2="Kou"
let f3="Var"
let f4="Upa"
let f5="Her"
let f6="Tch"
let f7="Rab"
let f8="Dem"
let f9="Gri"
let f10="Mba"
let f11="Gir"

let p1="Szc"
let p2="Ber"
let p3="Kiw"
let p4="Gli"
let p5="Cas"
let p6="Kry"
let p7="Fra"
let p8="Szy"
let p9="Zie"
let p10="Kam"
let p11="Lew"
let PlayersFrance=['Llo','Kou', 'Var', 'Upa', 'Her', 'Tch', 'Rab', 'Dem', 'Gri', 'Mba', 'Gir']
let PLayersPoland=['Szc', 'Ber', 'Kiw', 'Gli', 'Cas', 'Kry', 'Fra', 'Szy', 'Zie', 'Kam', 'Lew']
console.log(PlayersFrance)
PlayersFrance[2]="Par"
console.log(PlayersFrance[2])
console.log(PLayersPoland)
for(i=0; i<PlayersFrance.length; i+=1){
    console.log(PlayersFrance[i])
}
console.log("Poland players")
for(i=0; i<PLayersPoland.length; i+=1){
    console.log(PLayersPoland[i])
}

let numbers=[1, 2, 3, 4, 5, 10, 11, 3, 5, 8]
// for(i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 == 0 ){
//         console.log(numbers[i]+3)
//     }
// }
// for(i=0; i<numbers.length; i++){
//     numbers[i] += 4
// }
// console.log(numbers)
let sums=[1, 2, 3, 5, 10, 11, 3, 5, 8]
let sum = 0
for(i=0; i<sums.length; i++){
    sum += sums[i]
}
console.log(sum)
let order=[1, 2, 4, 5, 6]
let orderr =[]
for(i=0; i<order.length; i++){
   orderr[i]=order[4-i]
}
console.log(orderr)

let prime=[1, 4, 3, 5]
let factor=0
for(i=0; i<prime.length; i++ ) {
    for(let k = prime[i] ; k>0; k -= 1){
       if(prime[i] % k == 0){factor += 1} 
    }
    if(factor > 2 && factor != 1){console.log(prime[i], "is not prime")}else{console.log(prime[i],'is prime')}
    factor=0
}


let tictoc=[['*','*','*'],['*','*','*'],['*','*','*']]
let input=Number(prompt("toogoo hii")) 
let output = ''
for (let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        if(input[1]==i && input[2]==j){tictoc[i][j]="O"}
        output =output + "|" + tictoc[i][j] + "|"  
       
        if(j==2){output = output + '\n'} 
    }
    
}
console.log(output)