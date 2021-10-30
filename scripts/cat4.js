let gs_filter =document.getElementById("gs_filter");
gs_filter.addEventListener("change",filterproduct);

let parent = document.getElementById("ch-cat4Items");

let cat4Data = [
{
  name : "Hot Chocolate Lip Juicer",
  price : 795.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1098216_lip_juicer_hot_chocolate_4g_ltd_ed_a0x_brnz_inecops147.jpg",
},
{
  name : "British Rose Instant Glow Body Butter",
  price : 495.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1094176-britishroseinstantglowbodybutter50ml-4-640x640.jpg",

},
{
  name : "Strawberry Shower Gel 60ML",
  price : 225.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/s/t/strawberry_shower_gel_60ml_1_inrsdps520_1.jpg",

},
{
  name : "Tea Tree Skin Clearing Facial Wash",
  price : 325.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/t/e/tea_tree_skin_clearing_facial_wash_60ml-1.jpg",

},
{
  name : "Tea Tree Skin Clearing Toner",
  price : 325.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/t/e/tea_tree_toner_2_1.jpg",

},
{
  name : "Shower Gel Shea 60ML",
  price : 225.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/s/h/shea_shower_cream_60ml_1_inrslps763_1_.jpg",

},
{
  name : "British Rose Shower Gel 60 ML",
  price : 225.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/r/british_rose_shower_gel_60ml.jpg",

},
{
  name : "Honey Smoothing Shower Cream",
  price : 225.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/a/l/almond_milk_honey_shower_cream_60ml.jpg",

},
{
  name : "Satsuma Shower Gel 60ML",
  price : 225.00,
  img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1015207_1_shower_gel_satsuma_60ml_brnz_inbosps571_2.jpg",

}

];



 let gs_sort= document.getElementById("gs_sort");
  gs_sort.addEventListener("change",sortproduct)
let productcount=document.getElementById("productcount")
function showcat4Items(){
  parent.innerHTML = "";
  cat4Data.forEach(function(cat4){
    
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = cat4.img;

    let name = document.createElement("p");
    name.textContent = cat4.name;

    let price = document.createElement("p");
    price.style.fontWeight="bold"
    price.textContent ="₹"+cat4.price;

    let item_visit_btn = document.createElement("button");
    item_visit_btn.style.width="50%";

      item_visit_btn.setAttribute("class","gs_add_bag_btn")
      item_visit_btn.onclick = function(){
        addtobag(cat4);
      }

      item_visit_btn.innerText = "ADD TO BAG";
      item_visit_btn.style.fontWeight ="bold"; 

      let heart = document.createElement("img");
      heart.setAttribute("class","gs_heart")
      heart.src ="../images/gs-heart.png"
      heart.style.verticalAlign="top"
      heart.style.marginLeft="10px"
      heart.style.width = "30px"
      heart.style.height= "30px"
      heart.style.marginTop = "-2spx"
      heart.onclick = function(){
        addtowishlist(cat4);
      }

    div.append(img, name, price, item_visit_btn,heart);

    parent.append(div)
  })
  productcount.textContent = cat4Data.length+" Products";
}
showcat4Items()
    if(localStorage.getItem("bag")===null){
localStorage.setItem("bag",JSON.stringify([]));
}
let bag = JSON.parse(localStorage.getItem("bag"));
let gsbagvalue = document.getElementById("gsbagvalue");

gsbagvalue.textContent = bag.length;

let gs_wishlist_value = document.getElementById("gs_wishlist_value");
if(localStorage.getItem("wishlist")=== null){
localStorage.setItem("wishlist",JSON.stringify([]));
}
let wishlist = JSON.parse(localStorage.getItem("wishlist"));
if(wishlist.length != 0){
gs_wishlist_value.textContent = wishlist.length;
}

function addtobag(product){
if(gsduplicity(product.name) == true){
  let con = confirm("This product is already in bag, Are you sure to add?")
  if(con == false){
    return;
  }
}
bag.push(product);
localStorage.setItem("bag",JSON.stringify(bag));
gsbagvalue.textContent = bag.length;
}
function addtowishlist(product){
if(gsduplicity2(product.name) == true){
  alert("This product is already in wishlist")
    return;
}
wishlist.push(product);
localStorage.setItem("wishlist",JSON.stringify(wishlist));
gs_wishlist_value.textContent = wishlist.length;
}
function gsduplicity(name){
var flag = 0;
for(var i = 0; i < bag.length; i++){
  if(name == bag[i].name){
    flag++;
  }
}
if(flag == 0){
  return false;
}else {
  return true;
}
}
function gsduplicity2(name){
var flag = 0;
for(var i = 0; i < wishlist.length; i++){
  if(name == wishlist[i].name){
    flag++;
  }
}
if(flag == 0){
  return false;
}else {
  return true;
}
}

function sortproduct(){
console.log("sort")
if(gs_sort.value == "hightolow"){
  cat4Data.sort(function(a,b){return b.price - a.price})
  showcat4Items()
}else if(gs_sort.value == "lowtohigh"){
  cat4Data.sort(function(a,b){return a.price - b.price})
  showcat4Items()
}else if(gs_sort.value == "name"){
cat4Data.sort((a,b) => a.name.localeCompare(b.name))
showcat4Items();
}
  
}
// Filter functionality start

let filter_product = [];
function filterproduct() {
filter_product = [];
if(gs_filter.value == "lessthan500"){
  filter_product = cat4Data.filter(function(product){
    if(product.price < 500){
      return product;
    }
  })
  showcatfilterItems();

}else if(gs_filter.value == "morethan500"){
  filter_product = cat4Data.filter(function(product){
    if(product.price > 500){
      return product;
    }
  })
  showcatfilterItems();
}else{
  showcat4Items();
}
 
}

function showcatfilterItems(){
  parent.innerHTML = "";
  filter_product.forEach(function(cat4){
    
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = cat4.img;

    let name = document.createElement("p");
    name.textContent = cat4.name;

    let price = document.createElement("p");
    price.textContent ="₹"+cat4.price;

    let item_visit_btn = document.createElement("button");
      item_visit_btn.setAttribute("class","gs_add_bag_btn")
      item_visit_btn.onclick = function(){
        addtobag(cat4);
      }
      item_visit_btn.innerText = "ADD TO BAG";
      let heart = document.createElement("img");
      heart.setAttribute("class","gs_heart")
      heart.src ="..images/gs-heart.png"
      heart.style.verticalAlign="top"
      heart.style.marginLeft="10px"
      heart.style.width = "30px"
      heart.style.height= "30px"
      heart.style.marginTop = "-2px"
      heart.onclick = function(){
        addtowishlist(cat4);
      }

    div.append(img, name, price, item_visit_btn,heart);

    parent.append(div)
  })
  productcount.textContent = filter_product.length+" Products";
}


