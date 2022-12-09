let now =new Date();
console.log(now.getDate())
let newyear= new Date("2022-12-31");
console.log(newyear.getDate())
console.log( `${newyear.getDate()-now.getDate()} days, ${24-now.getHours()-1} hours, ${60-now.getMinutes()-1} minutes, ${60-now.getSeconds()}  until new year.`)