

let form=document.querySelector(".btn").addEventListener("click",function(){

// dataArr.forEach((el)=>{

    event.preventDefault()

    let name=document.getElementById("fname").value;
    let city=document.getElementById("city").value;
    let nameobj={
        name,
            city,
    }

   var dataArr=[]
   dataArr.push(nameobj)

    localStorage.setItem("buyername",JSON.stringify(dataArr))
//})
   
 window.location.href="checkoutfinal.html"

})