
if(localStorage.getItem("wishlist") == null ){
    localStorage.setItem("wishlist",JSON.stringify([]));
}
var wishData = JSON.parse(localStorage.getItem("wishlist"))

if(localStorage.getItem("bag") == null){
    localStorage.setItem("bag",JSON.stringify([]))
}
var bag = JSON.parse(localStorage.getItem("bag"))



var cont = document.getElementById("cont")
var cont2 = document.getElementById("cont2")



var nothing = document.createElement("h1")
nothing.textContent ="YOU HAVE NOTHING IN CART PLEASE ADD SOMETHING"
nothing.style.color = "red"

var c = 0;
var b = 0; 
var sum = 0;
gsbagvalue.textContent = bag.length;
gs_wishlist_value.textContent = wishData.length;
if( (wishData.length == 0) && ( bag.length == 0 )){
    cont.append(nothing)      
}else{
/*wishlist items functions start frm here*/
wishData.forEach(function(product){
var div1 = document.createElement("div")
var div2 = document.createElement("div")
var div3 = document.createElement("div")
var div4 = document.createElement("div")
var div5 = document.createElement("div")
div5.style.verticalAlign = "bottom";


var btn = document.createElement("button")
btn.innerText = "remove item"



var div_block = document.createElement("div")

var img = document.createElement("img")
img.src = product.img
img.style.width = "100%";


var name = document.createElement("h3")
name = product.name 



var price = document.createElement("h4") 
price = "₹ "+product.price + " (whishListed)"


//    sum = sum + product.price


var wishtag = document.getElementById("wishtag")
var tag = document.createElement("h4")
c++
if(c<2){
    tag.textContent = "This is Wishlist items:--" 
    tag.style.marginLeft = "9%";
}
wishtag.append(tag)


div1.style.height = "150px"
div1.append(img)



div3.append(name)
div4.append(price)

div5.append(btn)

div2.append(div3,div4,div5)



div2.style.height = "120px"

div_block.append(div1,div2)
cont.append(div_block)
})


/*wish list items function ends at here*/

/*bag items function start frm here*/
bag.forEach(function(pro){
var div1 = document.createElement("div")
var div2 = document.createElement("div")
var div3 = document.createElement("div")
var div4 = document.createElement("div")
var div5 = document.createElement("div")
div5.style.verticalAlign = "bottom";


var btn = document.createElement("button")
btn.innerText = "remove item"



var div_block = document.createElement("div")

var img = document.createElement("img")
img.src = pro.img
img.style.width = "100%";


var name = document.createElement("h3")
name = pro.name 



var price = document.createElement("h4") 
price = "₹ "+pro.price +" (cart items)"

sum = sum + pro.price



div1.style.height = "150px"
div1.append(img)

var bagtag = document.getElementById("bagtag")
var tag = document.createElement("h4")
b++
if(b<2){
    tag.textContent = "This is cart items:---" 
    tag.style.marginLeft = "9%";
}
bagtag.append(tag)



div3.append(name)
div4.append(price)

div5.append(btn)

div2.append(div3,div4,div5)



div2.style.height = "120px"

div_block.append(div1,div2)
cont2.append(div_block)
})
/*bag item function ends here*/
var total = document.getElementById("total")
total.append( "₹ "+sum )
}




function tocart(){
  window.location.href = "cart.html"
}
var checkout = document.getElementById("checkout")
checkout.addEventListener("click",check)
/*here is payment href*/
function check(){
  window.location.href = "account.html"
}

var reset = document.getElementById("clear")
reset.addEventListener("click",clear)

var ay_home = document.getElementById("ay-home")
ay_home.addEventListener("click",redirect2H)

function clear(){
 wishData = []
 bag = []
 localStorage.setItem("wishlist",JSON.stringify(wishData));
 localStorage.setItem("bag",JSON.stringify(bag));
 location.reload()
}
function redirect2H(){
   window.location.href = "home.html"
}
