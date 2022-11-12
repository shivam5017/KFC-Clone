

const form=document.getElementById("s_signup_form")
let err_firstname=document.querySelector(".err_firstname")
let err_email=document.querySelector(".err_email")
let err_pass=document.querySelector(".err_pass")

let success=document.querySelector(".err_pass")
let dataArr=JSON.parse(localStorage.getItem("signup"))||[];

let =s_signup=()=>{
  event.preventDefault();
  let name=document.getElementById('s_firstname').value;
  let email=document.getElementById("s_email").value;
  let pass=document.getElementById("s_pass").value;



   let message=[];
   let message2=[];
   let message3=[];
   
 // if(checkbox==""){

 // }

   if(name==""||name==null){
     message.push("Name is required")
   }

   if(email==""||email==null){
     message2.push("Email is required")
   }

   if(pass==""||pass==null){
     message3.push("Password field is empty")
   }
   


   if(name!=""||name!=null){
     err_firstname.innerHTML=null;
   }
   if(email!=""||email!=null){
     err_email.innerHTML=null;
   }
   if(pass!=""||pass!=null){
     err_pass.innerHTML=null;
   }
   if(pass.length<6){
     err_pass.innerHTML="Password must be greater than 6 characters"
     err_pass.style.color="red"
   }
   
   if(message.length > 0){
          event.preventDefault();
         err_firstname.innerHTML=message.join(',');
          err_firstname.style.color="red";
        
     }
     if(message2.length > 0){
       event.preventDefault();
      err_email.innerHTML=message2.join(',');
       err_email.style.color="red";
     
  }
  if(message3.length > 0&&pass.length<6){
   event.preventDefault();
  err_pass.innerHTML=message3.join(',');
   err_pass.style.color="red";
   
}




let dataObj={
 name,
 email,
 pass,
}

if(name!=""&&email!=""&&pass!=""&&pass.length>=6){
  dataArr.push(dataObj)
  localStorage.setItem("signup",JSON.stringify(dataArr));
  err_pass.innerHTML="Succesfull Signup"
  err_pass.style.color="green"
 

}

if(err_pass.innerHTML=="Succesfull Signup"){
    window.location.href="login.html"
}
}