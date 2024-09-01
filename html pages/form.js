
// const showLogin = document.querySelector
//     ("#showLogin").addEventListener("click",function(){
//         document.querySelector(".popup").classList.add("active")

//     })

    // const close = document.querySelector
    // (".popup .close-btn").addEventListener("click",function(){
    //     document.querySelector(".popup").classList.remove("active")
        
    // })




let names = document.getElementById('name')
let destination = document.getElementById('destination')
let arrival = document.getElementById('arrival')
let returns = document.getElementById('return')
let number = document.getElementById('number')

let flag = 1
const validateForm  = ()=>{
  if(names.value==""){
 document.getElementById('error1').innerHTML="Username is empty"
 flag = 0
  }
  else if (names.value.length<3){
     document.getElementById('error1').innerHTML="Username required min 3 char "
     flag = 0
  }
  else {
    document.getElementById('error1').innerHTML = ""
    names.innerHTML=""
    flag = 1
  }
  if(destination.value==""){
    document.getElementById('error2').innerHTML="Destination is Empty"
    flag = 0
     }

     else {
       document.getElementById('error2').innerHTML = ""
       
       flag = 1
     }
     if(arrival.value==""){
        document.getElementById('error3').innerHTML="required"
        flag = 0
         }
    
         else {
           document.getElementById('error3').innerHTML = ""
           
           flag = 1
         }
         if(returns.value==""){
            document.getElementById('error4').innerHTML="required"
            flag = 0
             }
        
             else {
               document.getElementById('error4').innerHTML = ""
               
               flag = 1
             }

     if(number.value==""){
        document.getElementById('error5').innerHTML="required"
        flag = 0
         }
         else if (names.value.length>11){
            document.getElementById('error5').innerHTML="Error"
            flag = 0
         }
         else {
           document.getElementById('error5').innerHTML = ""
           flag = 1
         }

 if(flag){
    return true;
 }
 else {
    return false
 }
   
}