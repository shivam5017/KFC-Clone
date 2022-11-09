

let Product_Arr=JSON.parse(localStorage.getItem("products"))||[];


addProduct=()=>{

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






