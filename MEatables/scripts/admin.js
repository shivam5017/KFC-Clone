

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


// document.getElementById("order_btn").addEventListener("click",ordermanage)
// document.getElementById("payment_btn").addEventListener("click",paymentmanage)


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



let payed=JSON.parse(localStorage.getItem("payed"))||[]
let buyer=JSON.parse(localStorage.getItem("buyer"))||[]
let total=JSON.parse(localStorage.getItem("total_payment"))||[]
let names=JSON.parse(localStorage.getItem("buyername"))||[];


names.forEach((el)=>{

    let row=document.createElement("tr")
    
    
    let td1=document.createElement("td")
      for(let i=0;i< buyer.length;i++){
        
        
    
        td1.innerHTML= buyer[0][0].name;
        
      }

      console.log(td1);
     let td2=document.createElement("td");
     td2.innerText=total;
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


})

   let count=0;
   

 count++

 let cont=document.getElementById("append_data");
  console.log(count)

 let total_sales_span=document.getElementById("total_sales_span")

 total_sales_span.innerHTML=total;

 let total_orders_span=document.getElementById("total_orders_span")

 total_orders_span.innerHTML= count;