
let loginarr=[
]
const form=document.getElementById("s_login_form")

let error_email=document.querySelector(".err_email")
let error_pass=document.querySelector(".err_pass")

let success=document.querySelector(".err_pass")

let dataArr=JSON.parse(localStorage.getItem("signup"))||[];


let flag=false;
let flag1=false;

let = s_login=()=>{
     event.preventDefault();
 
   let selected=  document.querySelector("#s_email").value;
    let selected1= document.querySelector("#s_pass").value;
      //  console.log(selected)
   let datalist=dataArr.map(function (ele){
     
         if(ele.email==selected && ele.pass==selected1 && ele.email!="admin@gmail.com" && ele.pass!="admin123"){
          success.innerHTML=ele.name;
          
     flag=true;
     
     }
     if(selected=="" && selected1==""){
      success.innerHTML="Input feilds is empty"
      success.style.color="red"
     }

     if(selected=="admin@gmail.com" && selected1=="admin123"){
      flag1=true;
     }
     
     
   });

   if(flag==true ){
    success.innerHTML="Successfull Login"
      success.style.color="green"
     
   }
   if(flag1==true){
    // window.location.href="admin.html"
    success.innerHTML="Successfull Login"
    success.style.color="green"
   }
   setTimeout(() => {
    
    if(flag==true){
      success.innerHTML="Successfull Login"
      success.style.color="green"
     window.location.href="main.html"
      
    }else if(flag1==true){
      window.location.href="admin.html"
      success.innerHTML="Successfull Login"
      success.style.color="green"
    }
    else{
      success.innerHTML="Wrong Input";
      success.style.color="red"
    }
   }, 1500);

  
 }