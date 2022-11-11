import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";

let foot = document.getElementById("RPfooter");
foot.innerHTML = footer();
let nav = document.getElementById("RPnavbar");
nav.innerHTML = navbar();

let images = [
    "https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/500GRYvL6xfLzNRY68rr4u/c66030e22aa477594939c55281fc00fd/variety_bucket_banner_1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4wzmNLWjqVZZl95Fcf48r2/90bd1294b970f903545d8f0f5278b28a/Allu_Arjun_Combo_Meal__1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/4qo6xWTWQmjg8ycSRETMU5/649a454a732e77c4cc534524e48bd800/Box_Meals_App_Banner__1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/20THmLjxn2MNAFjwki7OWP/8a435a10d0c2689f8091cd6fcbf3113d/wednesday_offer_1440x396px.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/7Epy9aFbpyR8YoHuGQF3sZ/01f22a322d491c24121cd4a05a15b45f/KFC_Maggi__Banner__1440x396px_149.jpg?w=1536&fit=fill&fm=webp",
    "https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1536&fit=fill&fm=webp",
];

let index =0;
let slideShow = () =>{
    let cont1 = document.getElementById("RPslider1");
    setInterval(() =>{
        if(index === images.length){
            index =0;
        }
        cont1.innerHTML = null;
        let image = document.createElement("img");
        image.src = images[index];
        cont1.append(image);
        index++;
    },3000); 
};

slideShow();


let openpopupBtn = document.querySelector("#RP_open_popup_btn");
let closepopupBtn = document.querySelector(".RP_popup_close_btn");

openpopupBtn.addEventListener("click",function(){
    document.body.classList.add("RP_popup-active");
});

closepopupBtn.addEventListener("click", function(){
   document.body.classList.remove("RP_popup-active")
});

document.getElementById("RPsubmitbtn").addEventListener("click",function (){
    RPsubmit_change();
})
let RPsubmit_change =() =>{

    console.log("working")
  let data = document.getElementById("RPlocation").value;

  let newlocation = document.getElementById("RPnewlocation");
   newlocation.innerText = null;
  newlocation.innerText = data;
}