let timer = document.getElementById("timer");
setTimeout(function(){
    window.location.href="AboutUs.html"
},5000)
var i = 5;
timer.textContent= "We will redirect to you on About us page in "+i+" seconds";
setInterval(() => {
    i--;
    timer.textContent= "We will redirect to you on About us page in "+i+" seconds";
},1000);
