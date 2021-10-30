let email=document.getElementById("email");
let next_btn=document.getElementById("btn");

if(localStorage.getItem("emails")===null){
    localStorage.setItem("emails",JSON.stringify([]));
}

if(localStorage.getItem("existing_password")===null){
    localStorage.setItem("existing_password",JSON.stringify([]));
}

next_btn.onclick=function (){
    let emails_id=JSON.parse(localStorage.getItem("emails"));
     let flag = false;
    emails_id.forEach(function(el){
      if(el==email.value){
          flag=true;
          let users=JSON.parse(localStorage.getItem("user_data"));
          let old_password=JSON.parse(localStorage.getItem("existing_password"));
          users.forEach(function(f){
              if(f.email==email.value){
                old_password.push(f.password);
              }
          })
          
          
          localStorage.setItem("existing_password",JSON.stringify(old_password));
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