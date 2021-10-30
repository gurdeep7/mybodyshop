
var data = [
    big_img = {
        img:"https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/About-Us-Header_1.png"
    },
]
var block_img = [
    "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/story.png",
    "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/community-trade.png",
    "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/animal-testing.png",
    "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/goog-beauty.png",
    "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/commitment.png",
    "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/wild.png",
    "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/plastics.png"
]

var img = document.createElement("img")
var img1 = document.createElement("img")
var img2 = document.createElement("img")
var img3 = document.createElement("img")
var img4 = document.createElement("img")
var img5 = document.createElement("img")
var img6 = document.createElement("img")
var img7 = document.createElement("img")
img.src = data[0].img

img1.src  = block_img[0]
img2.src  = block_img[1]
img3.src  = block_img[2]
img4.src  = block_img[3]
img5.src  = block_img[4]
img6.src  = block_img[5]
img7.src  = block_img[6]

img.style = "width:100%";
img1.style="width:100%"
img2.style="width:100%"
img3.style="width:100%"
img4.style="width:100%"
img5.style="width:100%"
img6.style="width:100%"
img7.style="width:100%"




var div = document.getElementById("big")

var first = document.getElementById("first")
var second = document.getElementById("second")
var third = document.getElementById("third")
var fourth = document.getElementById("fourth")
var bottom1 = document.getElementById("bottom1")
var bottom2 = document.getElementById("bottom2")
var bottom3 = document.getElementById("bottom3")
var ay_home = document.getElementById("ay-home")

    

head.textContent = "ABOUT US"
div.append(img)
first.append(img1)
second.append(img2)
third.append(img3)
fourth.append(img4)
bottom1.append(img5)
bottom2.append(img6)
bottom3.append(img7)

ay_home.addEventListener("click",home)
function home(){
    window.location.href = "home.html"
}
