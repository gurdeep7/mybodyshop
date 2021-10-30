
let gs_filter =document.getElementById("gs_filter");
  gs_filter.addEventListener("change",filterproduct);

let parent = document.getElementById("ch-cat3Items");

let cat3Data = [
   {
     name : "Seaweed Balance Sheet Mask",
     price :375.00,
     img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1089011_1_sheet_mask_seaweed_18ml_a0x_brnz_v2_incrhps082.jpg",
   },
   {
     name : "Vitamin E Quench Sheet Mask",
     price :375.00,
     img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1089009_1_sheet_mask_vitamin_e_18ml_a0x_brnz_v2_incrhps078.jpg",

   },
   {
     name : "Aloe Calm Hydration Sheet Mask",
     price :375.00,
     img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1089008_1_sheet_mask_aloe_18ml_a0x_brnz_v1_incrhps074.jpg",

   },
   {
    name : "Camomile Fresh Micellar Cleansing Water",
    price :2095.00,
    img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1097260_1_camomile_micellar_water_brnz_inneqps623.jpg",

   },
   {
    name : "Mint Mattifying Face Mist",
    price :795.00,
    img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1081273_1_mint_mattifying_face_mist_brnz_inneops105.jpg",

  },
  {
    name : "Own Your Naturals Eyeshadow Palette",
    price :345.00,
    img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1088972_1_eye-palette-own-your-naturals-13g-a0x_brnz_incrhps093.png",

  },
  {
    name : "Lip Juicer Acai Blueberry",
    price :695.00,
    img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1077664_1_lip_juicer_purple_11g_brnz_innpdps374_1_1.jpg",

  },
  {
    name : "Shine Lip Liquid Berry Glaze",
    price :695.00,
    img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1088405_brnz_shine_lip_liquid_berry_glaze_8ml_a0_1.eps_1.jpg",

  },
  {
    name : "Rose & Cedarwood Essence Oil",
    price :2445.00,
    img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1088911_1_rose_amp_cedarwood_20ml_brnz_incrhps335.jpeg",

  }


];

   let gs_sort= document.getElementById("gs_sort");
    gs_sort.addEventListener("change",sortproduct)
  let productcount=document.getElementById("productcount")
  function showcat3Items(){
    parent.innerHTML = "";
    cat3Data.forEach(function(cat3){
      
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.src = cat3.img;

      let name = document.createElement("p");
      name.textContent = cat3.name;

      let price = document.createElement("p");
      price.style.fontWeight="bold";
      price.textContent ="₹"+cat3.price;

      let item_visit_btn = document.createElement("button");
      item_visit_btn.style.fontWeight="bold";
      item_visit_btn.style.width="40%";
        item_visit_btn.setAttribute("class","gs_add_bag_btn")
        item_visit_btn.onclick = function(){
          addtobag(cat3);
        }
        item_visit_btn.innerText = "ADD TO BAG";
        let heart = document.createElement("img");
        heart.setAttribute("class","gs_heart")
        heart.src ="../images/gs-heart.png"
        heart.style.verticalAlign="top"
        heart.style.marginLeft="10px"
        heart.style.width = "30px"
        heart.style.height= "30px"
        heart.style.marginTop = "-2spx"
        heart.onclick = function(){
          addtowishlist(cat3);
        }

      div.append(img, name, price, item_visit_btn,heart);

      parent.append(div)
    })
    productcount.textContent = cat3Data.length+" Products";
  }
  showcat3Items()
      if(localStorage.getItem("bag")===null){
  localStorage.setItem("bag",JSON.stringify([]));
}
let bag = JSON.parse(localStorage.getItem("bag"));
let gsbagvalue = document.getElementById("gsbagvalue");
if(bag.length != 0){
gsbagvalue.textContent = bag.length;
}
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
    cat3Data.sort(function(a,b){return b.price - a.price})
    showcat3Items()
  }else if(gs_sort.value == "lowtohigh"){
    cat3Data.sort(function(a,b){return a.price - b.price})
    showcat3Items()
  }else if(gs_sort.value == "name"){
 cat3Data.sort((a,b) => a.name.localeCompare(b.name))
 showcat3Items();
}
    
}
// Filter functionality start

let filter_product = [];
function filterproduct() {
  filter_product = [];
  if(gs_filter.value == "lessthan500"){
    filter_product = cat3Data.filter(function(product){
      if(product.price < 1000){
        return product;
      }
    })
    showcatfilterItems();

  }else if(gs_filter.value == "morethan500"){
    filter_product = cat3Data.filter(function(product){
      if(product.price > 1000){
        return product;
      }
    })
    showcatfilterItems();
  }else{
    showcat3Items();
  }
   
  }
  
  function showcatfilterItems(){
    parent.innerHTML = "";
    filter_product.forEach(function(cat1){
      
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.src = cat1.img;

      let name = document.createElement("p");
      name.textContent = cat1.name;

      let price = document.createElement("p");
      price.textContent ="₹"+cat1.price;

      let item_visit_btn = document.createElement("button");
        item_visit_btn.setAttribute("class","gs_add_bag_btn")
        item_visit_btn.onclick = function(){
          addtobag(cat1);
        }
        item_visit_btn.innerText = "ADD TO BAG";
        let heart = document.createElement("img");
        heart.setAttribute("class","gs_heart")
        heart.src ="../images/gs-heart.png"
        heart.style.verticalAlign="top"
        heart.style.marginLeft="10px"
        heart.style.width = "30px"
        heart.style.height= "30px"
        heart.style.marginTop = "-2px"
        heart.onclick = function(){
          addtowishlist(cat1);
        }

      div.append(img, name, price, item_visit_btn,heart);

      parent.append(div)
    })
    productcount.textContent = filter_product.length+" Products";
  }



//Filter functionality stop
