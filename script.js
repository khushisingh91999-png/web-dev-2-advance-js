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



// function dohomework(){
//   const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       let done=true;
//       if(done){
//         console.log("Homework is Done")
//         resolve("Homework Completed!") 
//       }
//       else{
//         reject("Homework is Not Completed")
//       }
//     },2000)
//   })
//   return p
// }

// function eatDinner(){
//   const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       let done=true;
//       if(done){
//         console.log("Dinner is Done")
//         resolve("Dinner Completed!") 
//       }
//       else{
//         reject("Dinner is Not Completed")
//       }
//     },2000)
//   })
//   return p
// }

// function goToPlayground(){
//   const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       let done=true;
//       if(done){
//         console.log("Went to the playground!")
//         resolve(" Playground time!") 
//       }
//       else{
//         reject("Not allowed to play!")
//       }
//     },2000)
//   })
//   return p
// }
     
// dohomework()
// .then((message)=>{
//   console.log(message)
//   return eatDinner()
// })
// .then((message)=>{
//   console.log(message) 
//   return goToPlayground()
// })
// .then((message)=>{
//   console.log(message)
// })
// .catch((error)=>{
//   console.log(error)
// })
// .finally(()=>{
//   console.log("Go to sleep!")
// })

// function orderFood(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Food ordered!")
//         resolve("Food ordered!")
//     },1000)
//   })
// }
// function prepareFood(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Food prepared!")
//       resolve("Food prepared!")
//     },1000)
//   })
// }
// function deliverFood(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Food delivered!")
//       resolve("Food delivered!")
//     },1000)
//   })
// }
// async function order (){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }
// order()


//  orderFood().then((data)=>{
//   console.log(data)
//   return prepareFood()
//  }).then((data)=>{
//     console.log(data)
//     return deliverFood()
//  }).then((data)=>{
//     console.log(data)
//  }).catch((error)=>{
//      console.log(error)
//  })


// console.log("first line")
// try {
//     //let sample=324
//     //console.log(sample)
//     let age=19
//     if(age<18){
//         //error
//         throw new Error("Access Denied")
//     }
// } catch (error) {
//   console.log(error)
// }finally{
//     console.log("finally block")
// }
// console.log("last line")


//  async function getData(){
//   try {
//     const response=await fetch("https://dummyjson.com/products")
//     console.log(response)
//     console.log(response.ok,response.status)
//     if(response.ok===false)throw new Error("Data not found")
//       const data=await response.json()
//       console.log(data)
//       //data.products.forEach((element) => {
//       // //    console.log(element.price)
//       // //})
//       }catch (error) {
//         console.log("Data not found", error.message)
//       }
//     }


// getData()




// async function sendData(){
//   try {
//     const response=await fetch("https://dummyjson.com/products/add",{
//       method:"POST",
//       headers:{ "Content-Type":"application/json" },
//       body:JSON.stringify({
//         title:"Macbook",
//         description:"Macbook Pro",
//         price:10000,
//         discountPercentage:10,
//         rating:4.5,
//         stock:50,
//         brand:"Apple"
//       })
//     })
//     const data=await response.json()
//     console.log(data)
//   }catch (error) {
//     console.log("Data not found")
//   }
// }
// sendData()


// let object={
//     title:"Macbook",
//     description:"Macbook Pro",
//     price:10000,
//     discountPercentage:10,
//     rating:4.5,
//     stock:50,
//     brand:"Apple"
// }

// localStorage.setItem("object",JSON.stringify(object))
// localStorage.setItem("name","Khushi")
// localStorage.setItem("age",20)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("object")))

// localStorage.removeItem("age")
//localStorage.clear()


// sessionStorage.setItem("object",JSON.stringify(object))
// sessionStorage.setItem("name","Khushi")
// sessionStorage.setItem("age",20)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(JSON.parse(sessionStorage.getItem("object")))
// sessionStorage.removeItem("age")


// document.cookie="name=Khushi; expires=Sat, 21 Feb 2026 12:00:00 UTC"
// document.cookie="age=20; expires=Sat, 21 Feb 2026 12:00:00 UTC"
// console.log(document.cookie)

// async function sample(){
//   await fetch("http://127.0.0.1:5500//index.html")
// }
// sample()



// function* generate(){
//   yield 1
//   yield 2
//   yield 3
// }
// const gen=generate()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// function* generate(){
//   for(let index =1; index<4; index++){
//     yield index
//   }
//   let i=1;
//   while(true){
//     yield i
//     i++
//   }
// }
// const gen=generate()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// function add(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
// }
// }
// // console.log(add(1)(2)(3))
// const first=add(1)
// const second=first(2)
// const third=second(3)
// console.log(third)
