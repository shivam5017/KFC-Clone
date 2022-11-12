function navbar (){
    return `<div id="RPleftnav">
    <a href="index.html" id="icon">  <img src="./images/LOGO.jpeg" alt="error" ></a>
    <a href="menu.html" class="RPsp"> <p>Menu</p> </a>
    <a href="#"> <p>Deals</p> </a>
   </div>
   <div id="RPmiddlenav"></div>
   
   <div id="RPrightnav">
       <i class="fa fa-user-circle-o" id="RPfa1"></i>
       <a href="login.html"> <p class="RPpad" id="RPaus">Sign In</p>  </a>
       <p class="RPpad" id="RPline"> | </p>
       <p id="RPcartvalue"></p>
       <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="error">
       <p id="RPcartvalue">0</p>
       </div>`
}

export {navbar}