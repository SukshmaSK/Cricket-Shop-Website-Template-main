function showNavbar(){
   var x = document.querySelector(".topnav").style
   x.left= "-20px"
   x.backgroundColor="black"
   document.getElementById("icon-1").style.display="none"
   document.getElementById("icon-2").style.display="block"
}
function hideNavbar(){
    var x = document.querySelector(".topnav").style
   x.left= "-355px"
   x.backgroundColor="grey"
   document.getElementById("icon-2").style.display="none"
   document.getElementById("icon-1").style.display="block"
}
function showCart(){
   var x = document.querySelector(".cart-dropdown").style
   var y = document.querySelector(".fav-dropdown").style
   if(x.display=="block" && y.display=="none"){
      x.display = "none"
      y.display = "none"
   }
   else{
      x.display="block"
      y.display = "none"
   }
}
function showFav(){
   var x = document.querySelector(".fav-dropdown").style
   var y = document.querySelector(".cart-dropdown").style
   if(x.display=="block" && y.display=="none"){
      x.display = "none"
      y.display = "none"
   }
   else{
      x.display="block"
      y.display = "none"
   }
   
}