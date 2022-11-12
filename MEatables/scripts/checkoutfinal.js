

let pay_data=JSON.parse(localStorage.getItem("total_payment"))||[];

// console.log(pay_data)
let buyername=JSON.parse(localStorage.getItem("buyername"))||[];
console.log(buyername)

let buyerdata=JSON.parse(localStorage.getItem("buyer"))||[]
let cont=document.getElementById("final_checkout")
cont.innerHTML=null;


let name_div=document.createElement("h1")
name_div.innerText=buyername[0].name;
name_div.setAttribute("id","name_edit")


console.log(name_div)
let city_div=document.createElement("h1")
city_div.innerText=buyername[0].city;
city_div.setAttribute("id","city_edit")






let totalprice=document.createElement("div")
totalprice.innerText="TOTAL PRICE:- "
totalprice.style.fontSize="20px"
let payment=document.createElement("h1")
payment.innerText=pay_data;
payment.setAttribute("id","payment_edit")


cont.append(name_div,city_div,totalprice,pay_data)


document.getElementById("order_placebtn").addEventListener("click",function(){

alert("Your Order is SuccessFully Placed")
document.getElementById("order_placebtn").style.background="green"
buyerdata.push(buyername)
window.location.href="index.html"
localStorage.setItem("buyer",JSON.stringify(buyerdata))
localStorage.setItem("payed",JSON.stringify(pay_data))
})
