
let forappend=JSON.parse(localStorage.getItem("products"))||[];
console.log(forappend)

let cont=document.getElementById("container")
let burgerdiv=document.getElementById("burger")
let newlaunchdiv=document.getElementById("newlaunch")

function append(){
//  cont.innerHTML=null;
 forappend.forEach(function(ele){
  
    let b_div=document.createElement("div")
    let new_div=document.createElement("div")


    let p_img=document.createElement("img")
    p_img.src=ele.product_image;

    let p_name=document.createElement("h3")
    p_name.innerHTML=ele.product_name;

    let p_define=document.createElement("p")
    p_define.innerHTML=ele.product_define


    let burger=document.getElementById("div")
    
    if(ele.product_category=="Burgers"){
       
        b_div.append(p_img,p_name)
    }

    if(ele.product_category=="New Launch"){
       
        new_div.append(p_img,p_name)
    }

    // div.append(p_img,p_name,p_define)

 
    burgerdiv.append(b_div);
    newlaunchdiv.append(new_div)  
 })
 
 cont.append(burgerdiv,newlaunchdiv);
}

append();
