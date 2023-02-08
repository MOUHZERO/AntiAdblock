!function () {
  function f() {
    var a = document.createElement("div");
    a.id = "arlinablock";
    a.innerHTML = '<div class="inner"> \
      <div class="header"> \
        <h2>Ad Blocker Detected</h2> \
      </div> \
      <div class="isi"> \
        <p>Please consider supporting us by disabling your ad blocker</p> \
        <div class="tombol"></div> \
        <div class="fixblock"> </div> \
      </div>';
    document.body.append(a);
    document.body.style.overflow = "hidden";
    var b = a.querySelectorAll("button");
    a.querySelector(".close");
    var d = a.querySelectorAll(".fixblock > div");
    for (a = 0; a < b.length; a++) {
      b[a].addEventListener("click", function(a) {
        a.preventDefault();
        var c = this.getAttribute("class").split(" ")[0];
        for (var i = 0; i < d.length; i++) {
          d[i].classList.remove("active");
          b[i].classList.remove("active");
        }
        b[c - 1].classList.add("active");
        d[c - 1].classList.add("active");
      });
    }
  }

  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  b.onerror = function() {
    f();
    window.adblock = true;
  };

  var e = document.getElementsByTagName("script")[0];
  e.parentNode.insertBefore(b, e);
}();
