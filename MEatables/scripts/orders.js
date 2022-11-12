
let payed=JSON.parse(localStorage.getItem("payed"))||[]
let buyer=JSON.parse(localStorage.getItem("buyer"))||[]
let total=JSON.parse(localStorage.getItem("total_payment"))||[]

   
    let row=document.createElement("tr")
 
 let td1=document.createElement("td")
 td1.innerText= buyer.name;
 let td2=document.createElement("td");
 td2.innerText=total;
//  if(prior=="High"){
//      td2.style.background="red"
//  }else{
//      td2.style.background="green"
//  }
 let td3=document.createElement("td");
 td3.innerText="Delete"
 td3.style.cursor="pointer"
 td3.addEventListener("click",deletetodo)
//  count++
//  document.querySelector("#total").innerText=count;
 
 
 function deletetodo(event){
     event.target.parentNode.remove()
  
     
 }
 
 row.append(td1,td2,td3);
 
 document.getElementById("append_data").append(row)
 
