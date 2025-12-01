// console.log("KI hoica");
// console.log("sakib ul hasan");
// let fullName ="Hasnain Ahmed";
// console.log(fullName);

// const students ={
//      StudentName :"Tamim",
//      age: 24, 
//      cgpa: 3.00,
//      passcode: true,
// };
// console.log(students);

// let password = "2345";
// let input = "2345"; // For Node.js, using hardcoded value instead of prompt
// // In browser: let input = prompt("Enter Password:");
// // while(password!= input){
// //      input = prompt("worng Password.try again");
// // }

// console.log("Congurtulations. Now we see data");

// for(let key in students){
//      // console.log("",key,": ",students[key]);
//      let output = `${key}: ${students[key]}`;
//      console.log(output);
// }



// let arra= [ "60","70","80","90","100"];
// let sum =0 ; 
// for(let vale of arra){
//      sum += vale;
// }
// avg = sum/arra.length;
// console.log(`The average is: ${avg}`);


// arrowsum = (a,b) => {
//      console.log(a+b);
// };


// let arr = [10,20,30,40,50];
// arr.forEach(function printVal(value){
//      console.log(value);
// })

// arr.forEach((num) =>{
//      console.log(num*num);
// })

// let marks = [10,20,30,40,50];

// marks.filter((num) => {
//      return num> 33 ;
// })

 

// DOM (Document Object Model) use for dynamic change 

// windows is the global object in the browser
//window.alert("Hello World");
// console.dir(window.document);
// console.dir(window.body);

 document.body.style.background = "lightblue";

// document.getElementById("") // for id 
// document.getElementsByClassName("") // for class
// document.getElementsByTagName("") // for tag

// document.querySelectorAll("p"); // for all element
// document.querySelector("p"); // for first element

// document.body.div.img

// let div = document.querySelector("div");
// console.log(div);

let div = document.querySelector("div");
//div.innerText = div.innerText + " <h2>How are you?</h2>";

//div.innerHTML = div.innerHTML + " <h2>How are you?</h2>";

// let box = document.getElementsByClassName("box")
// consele.log(box);

// let boxs = document.querySelectorAll(".box");
// console.log(boxs);
// let idx =1;
// for(let box of boxs){
//     box.innerText = `new Unique Text ${idx}`;
//     idx++
// }

// div.getAttribute("");
// div.style.background = "yellow";

// let el = document.createElement("p");
// el.innerText = "This is a new paragraph.";
// div.before(el);
// div.after(el);
// div.append(el);
// div.prepend(el);
// div.remove(el);
// let body = document.body;
// body.appendchild(document.createElement("section"));
// body.appendchild(document.createElement("ul"));
// body.appendchild(document.createElement("li"));



// Event handling in JavaScript


// let btn = document.querySelector(".primary-btn");

// if (btn) {
//     btn.addEventListener('click', () => {
//         console.log('Button Clicked');
//         let a = 26;
//         a++;
//         console.log(a);
//     });
// } else {
//     console.warn('Button .primary-btn not found');
// }

// btn.addEventListener("click", () => {
//     console.log('Button Double Clicked');
//     let a = 26;
//     a++;
//     console.log(a);
// });


let btn = document.querySelector(".primary-btn");
let currmode = "light";


btn.addEventListener("click", () => {
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.background = "black";
    }
    else{
        currmode = "light";
        document.querySelector("body").style.background = "white";
    }
    console.log( currmode);
})