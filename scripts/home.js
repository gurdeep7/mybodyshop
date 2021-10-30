// slideshow functionality start
var gs_slideIndex = 1;
gs_showDivs(gs_slideIndex);

function gs_plusDivs(n) {
gs_showDivs(gs_slideIndex += n);
}

function gs_currentDiv(n) {
gs_showDivs(gs_slideIndex = n);
}

function gs_showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gs_mySlides");
  var dots = document.getElementsByClassName("gs_demo");
  if (n > x.length) {gs_slideIndex = 1}
  if (n < 1) {gs_slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("gs-white", "");
  }
  x[gs_slideIndex-1].style.display = "block";  
  dots[gs_slideIndex-1].className += " gs-white";
}
// slideshow functionality end
if(localStorage.getItem("bag")===null){
  localStorage.setItem("bag",JSON.stringify([]));
}
let bag = JSON.parse(localStorage.getItem("bag"));

let ch_itemsData = [
    {
        name : "Lemon Purifying Face Wash",
        price :945.00,
        img:"https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012282_FACE-WASH-LEMON-125ML-LH_BRNZ_INAAUPS676_-_Copy.jpg",
    },
    {
        name : "Lemon Purifying Hair & Body Wash",
        price :1195.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012250_HAIR_BODY_WASH_LEMON_400ML_LH_BRNZ_INECMPS417.jpg",
    },
    {
        name :"Lemon Protecting Hand & Body Lotion",
        price :1195.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012280_HAND_BODY_LOTION_LEMON_200ML_A0X_BRNZ_INECMPS424_-_Copy.jpg",
    },
    {
        name : "Himalayan Charcoal Skin CLarifying Night Peel",
        price :2095.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010158_Himalayan_Charcoal_Sleeping_Serum_30ml_AOX_BRNZ_INECOPS038.jpg",
    },
    {
        name : "Cool Daisy Body Yogurt",
        price :995.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098645_BODY_YOGURT_COOL_DAISY_200ML_A0X_BRNZ_INECOPS228.jpg",
    },
    {
        name : "Lip & Cheek Stain Sunshine Orange",
        price :995.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010039_Lip_and_Cheek_Stain_Sunshine_orange_BRNZ_INECMPS388.jpg",
    },
    {
        name : "Fresh Raspberry Hydrating Body Mist",
        price :1345.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098462_BODY_MIST_FRESH_RASPBERRY_100ML_A0X_BRNZ_INECOPS231.jpg",
    },
    {
        name : "Cool Daisy Hydrating Body Mist",
        price :1345.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098646_BODY_MIST_COOL_DAISY_100ML_A0X_BRNZ_INECOPS227.jpg",
    }
    
];
let gsbagvalue = document.getElementById("gsbagvalue");

gsbagvalue.textContent = bag.length;

let gs_new_product = document.getElementById("gs_new_product");
shownewproduct()

function shownewproduct(){
  ch_itemsData.forEach(function(product){
  let div= document.createElement("div")
  let img = document.createElement("img");
        img.src = product.img;

        let name = document.createElement("p");
        name.style.fontWeight = "bold";
        name.textContent = product.name;

        let price = document.createElement("p");
        price.textContent ="₹"+product.price;

        let item_visit_btn = document.createElement("button");
        item_visit_btn.setAttribute("class","gs_add_bag_btn")
        // item_visit_btn.onclick = function(){
        //   addtobag(product);
        // }
        item_visit_btn.innerText = "VIEW";


        div.append(img, name, price, item_visit_btn);

       gs_new_product.append(div);

    })
}
let best_parent = document.getElementById("bestItems");

let bestData = [
    {
        name : "Vitamin E Quench Sheet Mask",
        price :375.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1089009_1_sheet_mask_vitamin_e_18ml_a0x_brnz_v2_incrhps078.jpg",
    },
    {
        name : "Vitamin E Intense Moisture Cream",
        price:1245.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1060712_1_moisturiser_intense_vit_e_50ml_brnz_innpdps576.jpg",
    },
    {
        name : "Vitamin E Lip Care SPF 15",
        price :395.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/v/i/vitamin_e_moisture-protect_lip_care_spf_15_42g_1_inrslps688_1_.jpg",
    },
    {
        name : "Tea Tree Oil",
        price :695.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/t/e/tea_tree_oil_10ml.jpg",
    },
    {
        name : "Carrot Wash Energing Face Cleanser",
        price: 945.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1019126_1_face_wash_carrot_100ml_a0x_brnz_incrhps302.jpg",
    },
    {
        name : "Seaweed Cleansing Facial Wash",
        price :945.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/s/bs-20014001-1.jpg",
    },
    {
        name : "Tea Tree Skin Mattifying Toner",
        price :795.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/s/bs-52110001-1.jpg",
    },
    {
        name : "Tea Tree Skin Clearing Foaming Cleanser",
        price :945.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/s/bs-52109001-1.jpg",
    },
];
let gs_wishlist_value = document.getElementById("gs_wishlist_value");
if(localStorage.getItem("wishlist")=== null){
  localStorage.setItem("wishlist",JSON.stringify([]));
}
let wishlist = JSON.parse(localStorage.getItem("wishlist"));
if(wishlist.length != 0){
gs_wishlist_value.textContent = wishlist.length;
}
function favourites(){
    bestData.forEach(function(best_items){

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = best_items.img;

        let name = document.createElement("p");
        name.style.fontWeight = "bold";
        name.textContent = best_items.name;

        let price = document.createElement("p");
        price.textContent ="₹"+best_items.price;
        let heart = document.createElement("img");
        heart.setAttribute("class","gs_heart")
        heart.src ="../images/gs-heart.png"
        heart.onclick = function(){
          addtowishlist(best_items);
        }
        div.append(img, name,heart, price);

        best_parent.append(div)

    })
}

favourites();
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


// page changing functions
function category2(){
  window.location.href="cat2.html"
}
var img = document.getElementById("ay-wish")
var img2 = document.getElementById("ay-wish2")

var abt = document.getElementById("ay-about")


abt.addEventListener("click",about_section)
img.addEventListener("click",ay_wishlist)
img2.addEventListener("click",ay_wishlist)

var anchor = document.createElement("a")

function ay_wishlist(){
  window.location.href = "wishlist&cart.html"
  }

function about_section(){
  window.location.href = "AboutUs.html"
}