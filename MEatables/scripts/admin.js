

let Product_Arr=JSON.parse(localStorage.getItem("products"))||[];
let logindata=JSON.parse(localStorage.getItem("login_details"))||[];

addProduct=()=>{
console.log("click")
    event.preventDefault();
    
    let Image=document.querySelector("#s_image").value
    let name=document.getElementById("s_name").value
    let logo=document.getElementById("s_logo").value;
    let price=document.getElementById("s_price").value
    let offerprice=document.getElementById("s_offerprice").value;
     let serves=document.getElementById("s_define").value
    let discripation=document.getElementById("s_description").value
    let category=document.getElementById("category").value;

    let productobj={
    Image,
        name,
       logo,
        price,
       offerprice,
       serves,
        discripation,
        category,
    }

    Product_Arr.push(productobj);
    
    localStorage.setItem("products",JSON.stringify(Product_Arr))
   
}


document.getElementById("order_btn").addEventListener("click",ordermanage)
document.getElementById("payment_btn").addEventListener("click",paymentmanage)


let display=document.getElementById("display_name");
display.innerHTML=logindata[0];

let logout_btn=document.getElementById("logout")
logout_btn.style.cursor="pointer"
logout_btn.addEventListener("click",function (){

   display.innerHTML=""
   logindata[0]="";
   localStorage.setItem("login_details",JSON.stringify(logindata))
   window.location.href="login.html"
  
})


// console.log(display.innerHTML)
function ordermanage(){ 

   console.log("click")
  if(display.innerHTML=="" || display.innerHTML==undefined){
     
    alert("Please Login First")
    // display.innerHTML="SIGN IN"
  }else{
    window.location.href="orders.html"
  }

}

function paymentmanage(){

    if(display.innerHTML=="" || display.innerHTML==undefined){
        alert("Please Login First")
      }else{
        window.location.href="payments.html"
      }
   
}

