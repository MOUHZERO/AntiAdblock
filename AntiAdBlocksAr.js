!function () {
  function f() {
    var a = document.createElement("div");
    a.id = "arlinablock";
    a.innerHTML = '<div class="inner"> \
      <div class="header"> \
        <h2>لديك مانع إعلانات</h2> \
      </div> \
      <div class="isi"> \
        <h5>مرحبًا! أردت فقط أن أخبرك بأننا لا نستخدم أي إعلانات مزعجة على موقعنا، هل تمانع في إيقاف تشغيل أداة حظر الإعلانات للمساهمة في دعم موقعنا؟<br> شكرًا جزيلاً!</h5> \
        <div class="tombol"></div> \
        <div class="fixblock"> \
          <button class="cancel" style="display: none;">Cancel</button> \
        </div> \
      </div>';
    document.body.append(a);
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    var b = a.querySelectorAll("button");
    a.querySelector(".cancel").addEventListener("click", function() {
      document.body.removeChild(a);
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    });
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
    a.addEventListener("mousewheel", function(event) {
      event.preventDefault();
    }, { passive: false });
    a.addEventListener("contextmenu", function(event) {
      event.preventDefault();
    });
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
