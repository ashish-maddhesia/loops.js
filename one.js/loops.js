const arr = [1,2,3,4,5]
for (const arrary of arr) {
   
   // console.log(arrary);
    
    
}
const superhero =  new Map()
superhero.set('js' , 'java')
superhero.set('as','ashish')
superhero.set('sh','shaktiman')
//console.log(superhero);
for (let [key, value] of superhero) {
 // console.log(key, value);
}
//console.log(superhero.get('as'));

let object = {
    name : "ashish",
    age :  44,
    occupation : "student"
    

}

//console.log(object.);


for (const key in object) {
    //console.log(object.occupation);
    
   
}


const students = [
  { name: "Ashish",
     age: 20,
      marks: 85 },
  { name: "Rahul",
     age: 21,
      marks: 90 },
  { name: "Sneha",
     age: 19,
      marks: 92 }
];
students.forEach(students => {
    console.log(students.marks);
    
    
});



