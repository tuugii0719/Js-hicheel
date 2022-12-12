
const elements = document.querySelectorAll('ul li');

console.log(elements[0])

let length=elements.length

console.log(elements[length-1])

console.log(document.getElementById('aimag-315'))

for (let i = 0; i < length; i++) {
    elements[i].style.padding = "5px 0px 10px 0px"
    elements[i].style.color = "blue"
    elements[i].style.borderStyle= "Solid"
    elements[i].style.borderColor = "black"
    elements[i].style.borderRadius = "50%"
    elements[i].style.width = "250px"
    elements[i].style.textAlign = "center"
    elements[i].style.listStyle = "none"
    elements[i].style.marginTop = "10px"

}
for (let i = 0; i < length; i++) {
    
   if(elements[i].id.split('-')[1].charAt(0) === '1' ){
    elements[i].style.backgroundColor = "green"
   }else if (elements[i].id.split('-')[1].charAt(0) === '2' ) {
    elements[i].style.backgroundColor = "brown"
   } else if(elements[i].id.split('-')[1].charAt(0) === '3' ) {
    elements[i].style.backgroundColor = "orange"
   }else if(elements[i].id.split('-')[1].charAt(0) === '4' ) {
    elements[i].style.backgroundColor = "grey"
   }else{
    elements[i].style.backgroundColor = "red"
   }
    
}


    
