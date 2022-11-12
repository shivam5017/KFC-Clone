
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("startOrderButton").addEventListener("click",()=>{
    startOrder();
});

let startOrder = ()=>{
    // document.getElementById("cartlanding").innerHTML="";
    // document.getElementById("cartlanding").style.display="block";
   window.location.href="menu.html"
};
let container = document.getElementById("CartProducts");
let renderDOM = (Data) =>{
    let count=1;
    let Price;
    container.innerHTML="";
    Data.forEach(({id,Image,name,price},ele,index,)=>{
        let div = document.createElement("div");
        let imgdiv = document.createElement("div");
        let namediv = document.createElement("div");
        let pricediv = document.createElement("div");
        pricediv.classList.add("PriceDiv");
        div.classList.add("ProDiv");
        let Img = document.createElement("img");
        Img.src=Image;
        let Name = document.createElement("p");
        Name.innerText=name;
        Price = document.createElement("p");
        Price.innerText=price;
     
        let Addcartbtn = document.createElement("h4");
        // Addcartbtn.innerText="Add TO Cart";
        Addcartbtn.style.cursor="pointer";
        Addcartbtn.style.textDecoration="underline";
        Addcartbtn.addEventListener("click",function(){
           window.onload( addToCart(ele))
           
        });
        let btn = document.createElement("h4");
        btn.innerText="Remove";
        btn.style.cursor="pointer";
        btn.style.textDecoration="underline";
        btn.onclick=()=>{
            
            event.target.parentNode.remove();
            cartData.splice(index,1);
            div.innerHTML=""
            div.style.display="block"
            container.style.height="fit-content"
            renderDOM(Data)
    localStorage.setItem("cart",JSON.stringify(cartData));
        }

        let counter = document.createElement("h4");
        counter.innerText=count;
        

        let minusbtn = document.createElement("img");
        
        minusbtn.src="https://static.vecteezy.com/system/resources/previews/000/440/324/original/minus-vector-icon.jpg";
        minusbtn.onclick=()=>{  
            count--;
            counter.innerText=count;
           
            Price.innerText=count*price;
         
        }
        let addbtn = document.createElement("img");
        addbtn.src="https://library.kissclipart.com/20190320/gq/kissclipart-portable-network-graphics-clip-art-circle-computer-702c4539d6a09799.png";
        addbtn.onclick=()=>{
            count++;
            counter.innerText=count;
          Price.innerText=count*price;
          console.log(Price)
      
        }
        imgdiv.append(Img,Addcartbtn);
        namediv.append(Name,btn);
        pricediv.append(minusbtn,counter,addbtn,Price);
        div.append(imgdiv,namediv,pricediv);
        container.append(div);
    });
};

renderDOM(cartData);

if(container.innerHTML!=""){
    document.getElementById("cartlanding").innerHTML=""
    document.getElementById("cartlanding").style.display="block"
    
}else{
    document.getElementById("cartlanding").style.display="relative"
 
}






function addToCart(ele){
    for(i=0;i<cartData.length;i++){
      if(cartData[i].id===ele.id){
        alert ("Prodct already exist in cart");
        return;
      }
    }


    cartData.push(ele)
    localStorage.setItem("cart",JSON.stringify(cartData));
   
    alert("Product Successfully added in cart");
  };

  

let total= cartData.reduce(function (acc,el,i){
    return acc + Number(el.price);
},0);


document.getElementById("totalspan").innerText=`₹ ${total} including taxes`;


localStorage.setItem("total_payment",JSON.stringify(total));

let name=cartData.filter(function (el){
  return el.name;
})
  
localStorage.setItem("pro_name",JSON.stringify(name))
   
  document.getElementById("Addtotal").addEventListener("click",function (){

     window.location.href="checkout.html"

 
    //  localStorage.setItem("orders",JSON.stringify(cartData))

  })

  if(container.innerHTML==""){
    document.getElementById('Addtotal').style.display="none"
}else{
    document.getElementById('Addtotal').style.display="relative"
}



