//Selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
sidenav.style.right="-50%"
})

//Product Search Functionality
var Productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = Productcontainer.querySelectorAll("div")



 search.addEventListener("keyup",function()
 {
  var enteredValue = event.target.value.toUpperCase()

 for(count =0;count<productList.length; count=count+1)
 {
    var productname = productList[count].querySelector("h1").textContent

  if(productname.toUpperCase().indexOf(enteredValue)<0)
  
  {
   productList[count].style.display="none"
  }
  else{
   productList[count].style.display="block"
   }
 }
})