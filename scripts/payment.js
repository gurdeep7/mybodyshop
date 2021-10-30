
let proceed_btn = document.getElementById("proceed_btn");
var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  var text2 = document.getElementById("text2");
  var otprow = document.getElementById("otprow");
  var proceed_btn_card = document.getElementById("proceed_btn_card");
    var confirm_otp = document.getElementById("confirm_otp");
var cardData = document.querySelectorAll(".cardData");
  text.style.display ="none";
  text2.style.display = "none";
  text3.style.display = "none";
  otprow.style.display= "none";
  confirm_otp.style.display="none";
  proceed_btn_card.addEventListener("click",validation)
function myFunction() {
  console.log("hello");
  if (checkBox.checked == true){
    if(checkaddress()== false){
          alert("Please eneter address more than 10 Characters");
          checkBox.checked = false;
          return;
      }
    if(checkpincode()== false){
          alert("Please enter 6 digit pincode");
          checkBox.checked = false;
          return;
      }
    text.style.display = "block";
    text2.style.display = "none";
     text3.style.display = "none";
  } 
}
let bag = JSON.parse(localStorage.getItem("bag"));
function functionAgain() {
  var checkBox2 = document.getElementById("myCheck2");
  if (checkBox2.checked == true){
    checkBox2.checked = false;
    alert("We currently not accepting Paytm/Internet Banking");

  }
}

function dualFunction() {
  var checkBox3 = document.getElementById("myCheck3");
  var text3 = document.getElementById("text3");
  if (checkBox3.checked == true){
    if(checkaddress()== false){
          alert("Please eneter address more than 10 Characters");
          checkBox3.checked = false;
          return;
      }
      if(checkpincode()== false){
          alert("Please enter 6 digit pincode");
          checkBox3.checked = false;
          return;
      }
     
    text3.style.display = "block";
    text.style.display = "none";
     text2.style.display = "none";
     
  } 
}



function validation(){
    if( checkcardNumber() == false){
        alert("Enter 16 digit card Number")
        return;
    }
    let random = Math.floor(Math.random()*9999.99);
    proceed_btn_card.style.display = "none";
    otprow.style.display= "block";
    confirm_otp.style.display ="block";
    for(let i = 0; i < cardData.length; i++){
        cardData[i].style.display = "none";
        
    }
    setTimeout(() => {
        alert("Your otp is: " + random );
        confirm_otp.addEventListener("click", validate);
    }, 3000);
    function validate(){
        var cardotp = document.getElementById("cardotp").value;
        console.log(cardotp,random)
    if(cardotp == random){
        localStorage.setItem("bag",JSON.stringify([]));
        window.location.href = "thankyou.html"
    }else{
        alert("Wrong OTP, OTP is "+ random)
    }
}
}
// adding values to right division
var sum = 0;
 let discount = 0;
 for(var i = 0; i < bag.length; i++){
     sum += bag[i].price
 }

 let subtotal = document.getElementById("subtotal");
 subtotal.textContent ="₹"+ sum;
 let totaldiscount = document.getElementById("totaldiscount");
 totaldiscount.textContent ="₹"+ discount;
 let cart_total = document.getElementById("cart_total")
cart_total.textContent = "₹"+ (sum - discount);
let itemcount = document.getElementById("itemcount")
itemcount.textContent = bag.length;

let applypromocode = document.getElementById("applypromocode");
applypromocode.addEventListener("click", promoapply)
var flag = 0;
 function promoapply(){
let promocodevalue = document.getElementById("promocodevalue").value;
if(promocodevalue == "masai30" && flag == 0){
    discount = Math.floor(sum*.30);
    totaldiscount.textContent ="₹"+ discount;
    cart_total.textContent = "₹"+ (sum - discount);
    flag++
    alert("Gift card code Applied");
}else{
    alert("Invalid Gift Card Code/ Already used Gift card code")
}
 }
 function  checkpincode(){
    var pincode = document.getElementById("pincode").value

    if(pincode.length == 6){
        return true;
    }else{
        return false;
    }
 }
 function checkaddress(){
     var useraddress = document.getElementById("useraddress").value
     if(useraddress.length < 11){
         return false;
     }else {
         return true;
     }
 }
 
 function checkcardNumber(){
     var cardNumber = document.getElementById("cardNumber").value
     if(cardNumber.length == 16){
         return true;
     }else{
         return false;
     }
 }
