// console.log("Hello World")

// const para=document.createElementById("myPara")
// para.style.color="blue"
// console.log(para)

// const para=document.getElementsByClassName("myPara")
// para[0].textContent="Hello World"
// para[1].style.color="green"
// console.log(para)

// const para2=document.querySelectorAll(".myPara")
// para2[0].textContent="Hello World"
// para2[1].style.color="pink"
// console.log(para2)
// para2.forEach((ele)=>console.log(ele.textContent))


// const para=document.querySelector(".myPara")
// para.style.color="purple"
// console.log(para)


// const para2=document.querySelectorAll(".myPara")
// para2[0].innerText="Hello World"
// para2[1].style.color="orange"
// para2[1].innerHTML="<b>Welcome to Javascript</b>"
// console.log(para2)


// const button=document.querySelector("button")
// button.classList.add("btn")
// function message(){
//     alert("Button Clicked")
// }
// button.addEventListener("click",message)
// const stopButton=document.querySelector("#stopButton")
// stopButton.addEventListener("click",function(){
//     button.removeEventListener("click",message)
// })


// const button=document.querySelector("button")
// button.addEventListener("keydown",function(event){
//     console.log(event.key)
// })


// function newFunction(){
//   button.addEventListener("keyup",function(event){
//       console.log("Key Released:",event.key)
//   })
// }


// const handleSubmit=(event)=>{
//   event.preventDefault();
//   console.log("Form submitted");
// }
// const form=document.querySelector("form")
// form.addEventListener("submit",handleSubmit)


// console.log("script loaded successfully")


// const btn=document.querySelector("button")
// const divi=document.querySelector("div")

// btn.addEventListener("click",function(){console.log("Button")})
// divi.addEventListener("click",function(){console.log("Div")})




// debugger
// console.log("a")

// var a=78
// let b=90
// console.log("a")
// console.log("b")

// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside function")
// }
// print()


//debugger
//function first(){
  //  Second()
//}
//function Second(){
 //   third()   
//}
//function third(){
  //  console.trace()
//}
//first()
//function infinite(){
  //  infinite()
//}
//infinite()

//console.log(a)
//console.log(b)
//let a=345
//var b=789


// let total=100

// function calculate(){
//     console.log(total)
//     let total=100
// }
// calculate()

// console.log("First line")
// setTimeout(()=>{
//   console.log("After 2 sec")
// },2000)
// console.log("Second line")


// setTimeout(()=>{
//   alert("This alert is shown after 3 sec")
// },3*1000)


// const timerId=setInterval(()=>{
//   console.log("Hello Students")
// },1000)
// //console.log(timerId)
// setTimeout(()=>{
//   clearInterval(timerId)
// },10*1000)



// let num=1;
// const interval=setInterval(()=>{
//   console.log(num);
//   if(num===10)
//     {clearInterval(interval)}
//   num++;
// },1000)


// Call Stack Example with setTimeout

// console.log("First Line")
// setTimeout(() => {
//     console.log("After 2 seconds")
// }, 0)
// console.log("Second Line")


// console.log("First Line")
// const id=setTimeout(() => {
//     console.log("After 2 seconds")
// }, 2000)
// clearTimeout(id)
// console.log("Second Line")


// Callback Function Example

// function print (name){              //callback function
//     console.log("Hello Studentss!!",  name)
// }

// function greet(num){      //higher order function
//     console.log("Welcome to my class!!")
//     setTimeout(()=>{       //simulating a delay
//       console.log("Inside SetTimeout")
//       let NAme="John Doe"
//       num(NAme)
//     },2000);
// }
// greet(print)    //passing function as an argument



// console.log("Start Homework...");

// setTimeout(() => {
//   console.log("Homework Completed!");
//   console.log("Starting Dinner...");

//   setTimeout(() => {
//     console.log("Dinner Completed!");
//     console.log("Getting ready to go out...");

//     setTimeout(() => {
//       console.log("Going to the playground!");
//     }, 1000);    //after dinner
//   }, 1500);     //dinner time
// }, 2000);      //homework time



// function finishHomework( callback){
//   console.log("Starting Homework...");
//   setTimeout(() => {
//     console.log("Homework Completed!");
//     callback();
//   }, 2000);
// }

// function eatDinner(callback){
//   console.log("Starting Dinner...");
//   setTimeout(() => {
//     console.log("Dinner Completed!");
//     callback();
//   }, 1500);
// }

// function goToPlayground(){
//   console.log("Going to the playground!");
// }

// finishHomework(() => {
//   eatDinner(() => {
//     goToPlayground()
//     });
//   });




// const input=document.querySelector("#task")
// const button=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// button.addEventListener("click",(e)=>{
//   e.preventDefault();
//   if(input.value===""){
//     alert("Enter Task")
//     return
//   }
//  const li=document.createElement("li")
//  const deleteBtn=document.createElement("button")
//  deleteBtn.innerText="Delete"

//  li.innerText=input.value
//   li.appendChild(deleteBtn)
//  lists.appendChild(li)

//   deleteBtn.addEventListener("click",()=>{
//     lists.removeChild(li)
//   })
//   input.value=""
// })




// const p=new Promise(function(resolve,reject){
//   // resolve()
//   // reject()
//     setTimeout(()=>{
//          //console.log("Inside Timeout")
//         let done=true;
//         if(done){
//           resolve({name:"Khushi", age:20})
//         }
//         else{
//           reject("network issue")
//         }
//      },5000)
// })
// p.then((data)=>{
//   console.log("Promise Resolved", data)
// }).catch((error)=>{
//   console.log("Promise Rejected", error)
// }).finally(()=>{
//   console.log("Finally block!")
// })



function dohomework(){
  const p=new Promise(function(resolve,reject){
    setTimeout(()=>{
      let done=true;
      if(done){
        console.log("Homework is Done")
        resolve("Homework Completed!") 
      }
      else{
        reject("Homework is Not Completed")
      }
    },2000)
  })
  return p
}


function eatDinner(){
  const p=new Promise(function(resolve,reject){
    setTimeout(()=>{
      let done=true;
      if(done){
        console.log("Dinner is Done")
        resolve("Dinner Completed!") 
      }
      else{
        reject("Dinner is Not Completed")
      }
    },2000)
  })
  return p
}



function goToPlayground(){
  const p=new Promise(function(resolve,reject){
    setTimeout(()=>{
      let done=false;
      if(done){
        console.log("Went to the playground!")
        resolve(" Playground time!") 
      }
      else{
        reject("Not allowed to play!")
      }
    },2000)
  })
  return p
}
     


dohomework()
.then((message)=>{
  console.log(message)
  return eatDinner()
})
.then((message)=>{
  console.log(message) 
  return goToPlayground()
})
.then((message)=>{
  console.log(message)
})
.catch((error)=>{
  console.log(error)
})
.finally(()=>{
  console.log("Go to sleep!")
})