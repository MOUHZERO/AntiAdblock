!function (){function f() {var a=document.createElement("div");a.id="arlinablock";a.innerHTML='<div class="inner"> <div class="header"> <h2>Ad Blocker Detected</h2> </div> <div class="isi"> <p>Please consider supporting us by disabling your ad blocker</p> <div class="tombol"></div> <div class="fixblock"> </div> </div>';
document.body.append(a);document.body.style.overflow="hidden";var b=a.querySelectorAll("button");a.querySelector(".close");var d=a.querySelectorAll(".fixblock > div");for(a=0;a<b.length;a++)b[a].addEventListener("click",function(a){a.preventDefault();a=this.getAttribute("class").split(" ")[0];for(var c=0;c<d.length;c++)d[c].classList.remove("active"),b[c].classList.remove("active");b[a-1].classList.add("active");d[a-1].classList.add("active")})}var b=document.createElement("script");b.type="text/javascript";
.disable-scroll{
  overflow-y: hidden;
}
