let Data=JSON.parse(localStorage.getItem("cart"))||[]

document.getElementById("startOrderButton").addEventListener("click",()=>{
    startOrder();
    window.location.href="menu.html"
});

let startOrder = ()=>{
    renderDOM(Data);
    document.getElementById("cartlanding").innerHTML="";

};
let container = document.getElementById("CartProducts");
let renderDOM = (Data) =>{
    let count=1;
  
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
        let Price = document.createElement("p");
        Price.innerText=+price;
        let proprice = +price;
        console.log(proprice);
        let Addcartbtn = document.createElement("h4");
        Addcartbtn.innerText="Add TO Cart";
        Addcartbtn.style.cursor="pointer";
        Addcartbtn.style.textDecoration="underline";
        Addcartbtn.addEventListener("click",function(){
            addToCart(ele);
        });
        let btn = document.createElement("h4");
        btn.innerText="Remove";
        btn.style.cursor="pointer";
        btn.style.textDecoration="underline";
        btn.onclick=()=>{
            RemoveCart(index);
        }

        let counter = document.createElement("h4");
        counter.innerText=count;
        

        let minusbtn = document.createElement("img");
        minusbtn.src="https://static.vecteezy.com/system/resources/previews/000/440/324/original/minus-vector-icon.jpg";
        minusbtn.onclick=()=>{  
            count--;
            counter.innerText=count;
            let res = count+proprice;
            Price.innerText=res;
            console.log(count);
        }
        let addbtn = document.createElement("img");
        addbtn.src="https://library.kissclipart.com/20190320/gq/kissclipart-portable-network-graphics-clip-art-circle-computer-702c4539d6a09799.png";
        addbtn.onclick=()=>{
            count++;
            counter.innerText=count;
            Price.innerText=count+price;
            console.log(count);
        }
        imgdiv.append(Img,Addcartbtn);
        namediv.append(Name,btn);
        pricediv.append(minusbtn,counter,addbtn,price);
        div.append(imgdiv,namediv,pricediv);
        container.append(div);
    });
};


// let cartData = JSON.parse(localStorage.getItem("cart")) || [];
// let RemoveCart = (index)=>{
//     cartData.splice(1,index);
//     localStorage.setItem("cart",JSON.stringify(cartData));
// }

// function addToCart(ele){
//     for(i=0;i<cartData.length;i++){
//       if(cartData[i].id===ele.id){
//         alert ("Prodct already exist in cart");
//         return;
//       }
//     }


//     cartData.push(ele)
//     localStorage.setItem("cart",JSON.stringify(cartData));
//     alert("Product Successfully added in cart");
//   };