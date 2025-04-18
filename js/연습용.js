let bgmenu = document.querySelectorAll(".main .bg-menu li");
let video = document.querySelector("video");
let bgControlCon = document.querySelector(".bgControl_con");
let svgCircle = document.querySelector(".bgControl_con svg");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub-menu");
let service = document.querySelectorAll(".service>li");
let navBg = document.querySelector(".navBg");
let BgStrimig = true;

bgmenu[0].querySelector("span").classList.add("on");

function down() {
  bgmenu.forEach(function (v, k) {
    v.querySelector("span").classList.remove("on");
  });
}

bgmenu.forEach(function (v, k) {
  v.onclick = function () {
    down();
    this.querySelector("span").classList.add("on");
  };
});

document.querySelectorAll(".bg-menu li").forEach(function (v, k) {
  v.onclick = function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector(`.content${k + 1}`).offsetTop,
      behavior: "smooth",
    });
  };
});

bgControlCon.onclick = function () {
  if (BgStrimig) {
    video.pause();
    bgControlCon.querySelector("img").src = "./imges/bg_control2.svg";
    svgCircle.style.animationPlayState = "paused";
  } else {
    video.play();
    bgControlCon.querySelector("img").src = "./imges/bg_control1.svg";
    svgCircle.style.animationPlayState = "running";
  }
  BgStrimig = !BgStrimig;
};

document.querySelector(".menu").onmouseenter = function () {
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.add("on");
    sub[k].classList.add("on");
    service.forEach(function (v) {
      v.classList.add("action");
    });
  });
};

navBg.onmouseleave = function () {
  navBg.classList.remove("on");
  document.querySelector(".nav").classList.remove("on");
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.remove("on");
    sub.forEach(function (v, k) {
      v.classList.remove("on");
      document
        .querySelector(".logo")
        .querySelector("p")
        .querySelector("img").src = "./imges/logo.svg";
      service.forEach(function (v) {
        v.classList.remove("action");
      });
    });
  });
};

gnb.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".wrap").querySelector(".nav").classList.add("on");
    navBg.classList.add("on");
    document
      .querySelector(".logo")
      .querySelector("p")
      .querySelector("img").src = "./imges/logo_over.svg";
  };
});

sub.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".navBg").classList.add("on");
    document.querySelector(".nav").classList.add("on");
  };
});

service.forEach(function (v, k) {
  v.onclick = function () {
    v.classList.toggle("on");
    v.querySelector(".sv-list").classList.toggle("on");

    v.onmouseleave = function () {
      v.classList.remove("on");
      v.querySelector(".sv-list").classList.remove("on");
    };
  };
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
