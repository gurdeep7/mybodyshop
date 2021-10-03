let emails_id=JSON.parse(localStorage.getItem("emails"));
let pre_email=document.getElementById("email-id");
pre_email.value=emails_id[emails_id.length-1];

let create_password=document.getElementById("password");

create_password.oninput=function check(){ 

    if(create_password.value.length<8 ){
        document.getElementById("check-password").textContent="Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.";
        document.getElementById("password-change").textContent="Password Strength : Weak";
        document.getElementById("password-change").style.backgroundColor="red";
    
    }else{
        let count1=0;
        let count2=0;
        let count3=0;
        for(var i=0;i<create_password.value.length;i++){
            if(create_password.value[i]==1 || create_password.value[i]==2 || create_password.value[i]==3 || create_password.value[i]==4 || create_password.value[i]==5 || create_password.value[i]==6 || create_password.value[i]==7 || create_password.value[i]==8 || create_password.value[i]==9 || create_password.value[i]==0){
                count1++;
            }    
            
            if(create_password.value[i]=="!" || create_password.value[i]=="@" || create_password.value[i]=="#" || create_password.value[i]=="$"
            || create_password.value[i]=="%" || create_password.value[i]=="*" || create_password.value[i]=="&"){
                count2++;

            }
            if(create_password.value[i]=="A" || create_password.value[i]=="B" || create_password.value[i]=="C" || create_password.value[i]=="D" ||
            create_password.value[i]=="E" || create_password.value[i]=="F" || create_password.value[i]=="G" || create_password.value[i]=="H" || 
            create_password.value[i]=="I" || create_password.value[i]=="J" || create_password.value[i]=="K" || create_password.value[i]=="L" || 
            create_password.value[i]=="M" || create_password.value[i]=="N" ||create_password.value[i]=="O" || create_password.value[i]=="P" || 
            create_password.value[i]=="Q" || create_password.value[i]=="R" || create_password.value[i]=="S" || create_password.value[i]=="T" ||
            create_password.value[i]=="U" || create_password.value[i]=="V" || create_password.value[i]=="W" || create_password.value[i]=="X" ||
            create_password.value[i]=="Y" || create_password.value[i]=="Z" ){
                count3++;

            }
        }

        if(count1==0){
            document.getElementById("check-password").textContent="Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.";
            document.getElementById("password-change").textContent="Password Strength : Weak";
        }else if(count2==0){
            document.getElementById("check-password").textContent="Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.";
            document.getElementById("password-change").textContent="Password Strength : Weak";
        }else if(count3==0){
            document.getElementById("check-password").textContent="Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.";
            document.getElementById("password-change").textContent="Password Strength : Weak";
        }else{
            document.getElementById("check-password").textContent="";
            document.getElementById("password-change").textContent="Password Strength : Strong";
            document.getElementById("password-change").style.backgroundColor="chartreuse";
        }
    }

}

let phn=document.getElementById("phone");

phn.oninput=function phnCheck(){
    

    if((phn.value[0]!="7") && (phn.value[0]!="8") && (phn.value[0]!="9") ){
        document.getElementById("phn-validation").textContent="Minimum length of this field should be 10 digits. Only numbers allowed and mobile number should start with 7 or 8 or 9.";

         document.getElementById("phn-validation").style.color="red";
         document.getElementById("number-varification").style.display="none";
    }else if(phn.value.length==10){
       document.getElementById("phn-validation").textContent="Phone number is valid";
       document.getElementById("phn-validation").style.color="green";
       document.getElementById("phn-validation").style.margin="0";
        document.getElementById("number-varification").style.marginTop="0";
    }else if(phn.value.length>10){
        document.getElementById("phn-validation").textContent="Minimum length of this field should be 10 digits. Only numbers allowed and mobile number should start with 7 or 8 or 9.";

         document.getElementById("phn-validation").style.color="red";
         document.getElementById("number-varification").style.display="none";
    }
    else{
        document.getElementById("phn-validation").textContent="";
        document.getElementById("number-varification").style.display="block";

    }

}

let form=document.getElementById("my-form");

if(localStorage.getItem("user_data")===null){
    localStorage.setItem("user_data",JSON.stringify([]));
}

let email=document.getElementById("email-id");

let first_name =document.getElementById("first-name");

let last_name =document.getElementById("last-name");
let date_of_birth =document.getElementById("date-of-birth");
let gender =document.getElementById("gender");
let pincode =document.getElementById("pincode");
let phone =document.getElementById("phone");
let confirm_password =document.getElementById("password");
let enter_otp=document.getElementById("enter-otp");
let otp=document.getElementById("otp");
let validate=document.getElementById("validate");
let click_verify=document.getElementById("number-varification");
let wrong_otp=document.getElementById("wrong-otp");
let num=0;
click_verify.onclick=function signup(){
    

    
    num=Math.floor(Math.random()*2222);
    console.log(num);

    

    click_verify.style.display="none";
    enter_otp.style.display="block";
    otp.style.display="inline-block";
    validate.style.display="inline-block";
}

validate.onclick=function check(){
    if(num==otp.value){
        let user_info=JSON.parse(localStorage.getItem("user_data"));

     let user={
        email: email.value,
        password:create_password.value,
        first_name:first_name.value,
        last_name:last_name.value,
        date_of_birth:date_of_birth.value,
        gender:gender.value,
        pincode:pincode.value,
        phone:phone.value
     }
     user_info.push(user);
     localStorage.setItem("user_data",JSON.stringify(user_info));

        let old_password=JSON.parse(localStorage.getItem("existing_password"));
        old_password.push(create_password.value);
        localStorage.setItem("existing_password",JSON.stringify(old_password));
        location.href="login.html";
    }else{
       wrong_otp.style.display="block";
    }
    
}