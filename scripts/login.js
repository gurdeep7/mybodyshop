let password=document.getElementById("password");

let signin_btn=document.getElementById("signin");

signin_btn.onclick=function rediract(){
    let saved_password=JSON.parse(localStorage.getItem("existing_password"));
    if(document.getElementById("password").value==saved_password[saved_password.length-1]){
        location.href="payment.html";
    }else{
       alert("Wrong Password");
    }
    
}
