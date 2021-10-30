
    let gs_filter =document.getElementById("gs_filter");
      gs_filter.addEventListener("change",filterproduct);

    let parent = document.getElementById("ch-cat1Items");
    
    let cat1Data = [
      {
        name : "Banana Conditioner 60ML",
        price : 275.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/b/a/banana_truly_nourishing_conditioner_60ml_1.jpg",
      },
      {
        name : "Moringa Shine & Protection Conditioner",
        price : 745.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1097747_conditioner_moringa_250mlbrnz_inaaups038_1.jpg",
    
      },
      {
        name : "Tea Tree Purifying Conditioner",
        price : 745.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1097736_conditioner_tea_tree_250mlbrnz_inaaups032.jpg",
    
      },
      {
        name : "Banana Truly Nourishing Conditioner",
        price : 695.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1055320_1_conditioner_banana_250ml_brnz_innpdps461.jpg",
    
      },
      {
        name : "Ginger Scalp Care Conditioner",
        price : 745.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1097896_conditioner_ginger_250ml_brnz_inaaups014.jpg",
    
      },
      {
        name : "Shea Butter Replenishing Conditioner",
        price : 695.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1055317_1_shea_conditioner_brnz_innepps192.jpg",
    
      },
      {
        name : "Strawberry Glossing Conditioner",
        price : 695.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1081951_1_conditioner_strawberry_250ml_a0x_brnz_innedps245.jpg",
    
      },
      {
        name : "Banana Truly Nourishing Conditioner",
        price : 695.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/e/p/eps_jpg_1055320_1_conditioner_banana_250ml_brnz_innpdps461.jpg",
    
      },
      {
        name : "Ginger Scalp Care Conditioner",
        price : 745.00,
        img : "https://staticbodyshop.gumlet.io/pub/media/catalog/product/cache/1cd1953e8cb5724f5234dc821d9f1d62/1/0/1097896_conditioner_ginger_250ml_brnz_inaaups014.jpg",
    
      },
    
    ];
    
       let gs_sort= document.getElementById("gs_sort");
        gs_sort.addEventListener("change",sortproduct)
      let productcount=document.getElementById("productcount")
      function showcat1Items(){
        parent.innerHTML = "";
        cat1Data.forEach(function(cat1){
          
          let div = document.createElement("div");

          let img = document.createElement("img");
          img.src = cat1.img;

          let name = document.createElement("p");
          name.textContent = cat1.name;

          let price = document.createElement("p");
          price.style.fontWeight="bold";
          price.textContent ="₹"+cat1.price;

          let item_visit_btn = document.createElement("button");
          item_visit_btn.style.width="40%";
          item_visit_btn.style.fontWeight="bold";
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
            heart.style.marginTop = "-2spx"
            heart.onclick = function(){
              addtowishlist(cat1);
            }

          div.append(img, name, price, item_visit_btn,heart);

          parent.append(div)
        })
        productcount.textContent = cat1Data.length+" Products";
      }
      showcat1Items()
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
        cat1Data.sort(function(a,b){return b.price - a.price})
        showcat1Items()
      }else if(gs_sort.value == "lowtohigh"){
        cat1Data.sort(function(a,b){return a.price - b.price})
        showcat1Items()
      }else if(gs_sort.value == "name"){
     cat1Data.sort((a,b) => a.name.localeCompare(b.name))
     showcat1Items();
    }
        
    }
  // Filter functionality start
  
    let filter_product = [];
    function filterproduct() {
      filter_product = [];
      if(gs_filter.value == "lessthan500"){
        filter_product = cat1Data.filter(function(product){
          if(product.price < 500){
            return product;
          }
        })
        showcatfilterItems();

      }else if(gs_filter.value == "morethan500"){
        filter_product = cat1Data.filter(function(product){
          if(product.price > 500){
            return product;
          }
        })
        showcatfilterItems();
      }else{
        showcat1Items();
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
