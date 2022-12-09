let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]
let males = 0
for (let index = 0; index < students.length; index++) {
  
    if(students[index].gender == "male"){males += 1}   
}
console.log(males)
let sum = 0
for (let index = 0; index < students.length; index++) {
        
        sum = sum + students[index].age
    }
    let aa = sum/students.length

console.log(aa)
for (let index = 0; index < students.length; index++) {
  
    for (let k = 0; k < students.length; k) {
  
        if(students[index].age == students[k].age){Object.create("sameAge")}   
    }   
}
console.log("sameAge")