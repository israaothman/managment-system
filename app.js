
// const cardsDiv = document.getElementById("cards");
// const form = document.getElementById("form");
// let allEmployees = [] ;

// function Employee (employeeID,fullName,department,level,imageURL ){
// this.employeeID = employeeID
// this.fullName =  fullName
// this.department =  department
// this.level = level 
// this.imageURL = imageURL
// this.salary = this.calcSalary(level);
// }

// Employee.prototype.calcSalary = function (level){
//     switch (level) {
//         case "Junior":
//           return Math.round(Math.random() * (2000 - 1500) + 1500);
//           break;
//         case "Mid-Senior":
//           return Math.round(Math.random() * (1500 - 1000) + 1000);
//           break;
//         case "Senior":
//           return Math.round(Math.random() * (1000 - 500) + 500);
//           break;
//       }
// }
// const emp1 = new Employee(0,'israa othman', 'test', 'Junior','test');
// // emp1.salary = emp1.calcSalary(emp1.level);

// console.log(emp1);




// function render (event) {
//   event.preventDefault();

//   let id = event.target.id.value; 
//   let name = event.target.name.value; 
//   let dept = event.target.idDepartment.value; 
//   let level = event.target.idLevel.value; 
//   let img = event.target.img.value; 

//   let newEmp = new Employee(id,name,dept,level,img);
//   console.log(newEmp,'********************');
//   allEmployees.push(newEmp);

//   saveToLocal();
//   print(newEmp);

//   document.forms[0].reset();
// }


// function print(employee){

//    let card = document.createElement('div');
//    cardsDiv.appendChild(card);

//    let img = document.createElement('img');
//    card.appendChild(img);
//    img.setAttribute('src',employee.imageURL);

//    let p = document.createElement('p');
//    card.appendChild(p);
//    p.textContent = "Name " + employee.fullName + "- ID " + employee.employeeID ;


//    let p2 = document.createElement('p');
//    card.appendChild(p2);
//    p2.textContent = `Department: ${employee.department} - Level: ${employee.level}`;

//    let p3 = document.createElement('p');
//    card.appendChild(p3);
//    p3.textContent = employee.salary;

// }

// function saveToLocal(){
//    let strArr = JSON.stringify(allEmployees);
//    localStorage.setItem('employees', strArr); 
// }

// function getFromLocal(){
//    let jsonArr = localStorage.getItem('employees');
//    let arr = JSON.parse(jsonArr);

//    if(arr != null){
//     allEmployees = arr;
//     arr.forEach((ele)=>{
//       print(ele);
//      })
//    }

//    console.log(arr);
// }

// getFromLocal();

// form.addEventListener('submit',render);





// let arr = [1,2,3,4,5,6];
// for(let i=0; i<arr.length; i++) /////// arr[i]
// ()=>{}
// function () {}
// let arr2 = [];
// arr.forEach((value, idx )=>{
//   arr2.push(value*2);
// })


// let arr3 = arr.map((value, idx )=>{
//   return value*2
// });

// let arr3 = arr.map(value => value*2);


// let arr4 = arr.filter(value =>{
//   if(value % 2 != 0) {
//     // return value;
//     // return 'israa';
//     return true;
//   }
// });

let sum = arr.reduce((acc,value,idx)=>{
      acc = acc + value; 
      return acc;
},0);


console.log(sum);
