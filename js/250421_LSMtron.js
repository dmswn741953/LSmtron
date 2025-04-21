let bgmenu = document.querySelectorAll(".main .bg-menu li");
let Bgvideo = document.querySelector(".bg video");
let bgControlCon = document.querySelector(".bgControl_con");
let svgCircle = document.querySelector(".bgControl_con svg");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub-menu");
let service = document.querySelectorAll(".service>li");
let navBg = document.querySelector(".navBg");
let BsnCon = document.querySelectorAll("#business>ul>li");
let BsnVideo = document.querySelectorAll("#business video");
let BsnControl = document.querySelectorAll(".video_tit >span");
let BgStrimig = true;
let BsnStriming = true;
console.log(BsnVideo);
bgmenu[0].querySelector("span").classList.add("on");

function down1() {
  bgmenu.forEach(function (v, k) {
    v.querySelector("span").classList.remove("on");
  });
}
function down2() {
  BsnCon.forEach(function (v, k) {
    v.classList.remove("on");
  });
}

bgmenu.forEach(function (v, k) {
  v.onclick = function () {
    down1();
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
    Bgvideo.pause();
    bgControlCon.querySelector("img").src = "./imges/bg_control2.svg";
    svgCircle.style.animationPlayState = "paused";
  } else {
    Bgvideo.play();
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

BsnCon.forEach(function (v, k) {
  v.addEventListener("click", function () {
    down2();
    BsnCon[k].classList.add("on");

    BsnCon.forEach((item) => {
      const Bsnvideo = item.querySelector("video");
      Bsnvideo.pause();
      Bsnvideo.currentTime = 0;
      Bsnvideo.load(); // 포스터 이미지로 초기화
    });

    const clickedVideo = v.querySelector("video");
    clickedVideo.play();

    document.querySelectorAll(".video_tit").forEach(function (value, key) {
      let Bsntit = value.querySelectorAll("p")[0];
      if (key != k) {
        Bsntit.classList.add("on");
        Bsntit.classList.remove("action");
        value.classList.remove("on");
      } else {
        Bsntit.classList.remove("on");
        Bsntit.classList.add("action");
        document.querySelectorAll(".video_tit")[key].classList.add("on");
      }
    });
  });
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
