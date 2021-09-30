let email=document.getElementById("email");
let next_btn=document.getElementById("btn");

if(localStorage.getItem("emails")===null){
    localStorage.setItem("emails",JSON.stringify([]));
}

next_btn.onclick=function (){
    let emails_id=JSON.parse(localStorage.getItem("emails"));
     let flag = false;
    emails_id.forEach(function(el){
      if(el==email.value){
          flag=true;

      }
    } );

    if(flag){
        location.href="login.html";

    }else{
        emails_id.push(email.value);
        localStorage.setItem("emails",JSON.stringify(emails_id));
        location.href="registration_page.html";

    }

    
     

    

            
}