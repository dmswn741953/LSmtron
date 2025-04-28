let bgmenu = document.querySelectorAll(".main .bg-menu li");
let Bgvideo = document.querySelector(".bg video");
let bgControlCon = document.querySelector(".bgControl_con");
let svgCircle = document.querySelector(".bgControl_con svg");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub-menu");
let service = document.querySelectorAll(".service>li");
let navBg = document.querySelector(".navBg");
let BsnCon = document.querySelectorAll("#business>ul>li");
let BsnControl = document.querySelectorAll(".BsnControl");
let pressBtn = document.querySelector(".pressBtn");
let advertBtn = document.querySelector(".advertBtn");
let pressSwiper = document.querySelector(".press-swiper");
let advertSwiper = document.querySelector(".advert-swiper");
let BgStrimig = true;

bgmenu[0].querySelector("span").classList.add("on");
bgmenu[0].querySelector("a").classList.add("on");
pressSwiper.classList.add("on");

function down1() {
  bgmenu.forEach(function (v, k) {
    v.querySelector("span").classList.remove("on");
    v.querySelector("a").classList.remove("on");
  });
}
function down2() {
  BsnCon.forEach(function (v, k) {
    v.classList.remove("on");
  });
}

function PRSwiper() {
  pressBtn.classList.remove("on");
  advertBtn.classList.remove("on");
  pressSwiper.classList.remove("on");
  advertSwiper.classList.remove("on");
}

bgmenu.forEach(function (v, k) {
  v.addEventListener("click", function () {
    down1();
    this.querySelector("span").classList.add("on");
    this.querySelector("a").classList.add("on");
  });
});

bgmenu.forEach(function (v, k) {
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
  navBg.querySelectorAll("a").forEach(function (v, k) {
    v.classList.add("on");
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
  this.querySelectorAll("a").forEach(function (v, k) {
    v.classList.remove("on");
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

document.querySelectorAll(".closed").forEach(function (v, k) {
  v.onclick = function (e) {
    e.stopPropagation();
    down2();
    BsnPoster();
    let Bsntit = document.querySelectorAll(".video_tit");
    Bsntit.forEach(function (v, k) {
      v.querySelector("p").classList.remove("on");
      v.querySelector("p").classList.remove("action");
      v.classList.remove("on");
    });
    BsnControl.forEach(function (v, k) {
      v.classList.remove("on");
    });
  };
});

BsnCon.forEach(function (v, k) {
  v.addEventListener("click", function () {
    down2();
    BsnPoster();
    BsnCon[k].classList.add("on");

    const clickedVideo = v.querySelector("video");
    clickedVideo.play();

    document.querySelectorAll(".video_tit").forEach(function (value, key) {
      let BsntitP = value.querySelector("p");
      if (key != k) {
        BsntitP.classList.add("on");
        BsntitP.classList.remove("action");
        value.classList.remove("on");
        BsnControl[key].classList.remove("on");
        BsnControl[key].querySelector("img").src = "./imges/bg_control1.svg";
        value.querySelector("div").classList.remove("on");
      } else {
        BsntitP.classList.remove("on");
        BsntitP.classList.add("action");
        document.querySelectorAll(".video_tit")[key].classList.add("on");
        BsnControl[key].classList.add("on");
        value.querySelector("div").classList.add("on");
      }
    });
  });
});

function BsnPoster() {
  BsnCon.forEach((item) => {
    const Bsnvideo = item.querySelector("video");
    Bsnvideo.pause();
    Bsnvideo.currentTime = 0;
    Bsnvideo.load(); // 포스터 이미지로 초기화
  });
}

BsnControl.forEach(function (v, k) {
  v.addEventListener("click", function (e) {
    e.stopPropagation();
    const video = BsnCon[k].querySelector("video");
    if (video.paused) {
      video.play();
      v.querySelector("img").src = "./imges/bg_control1.svg";
    } else {
      video.pause();
      v.querySelector("img").src = "./imges/bg_control2.svg";
    }
  });
});

advertBtn.onclick = function (e) {
  e.preventDefault();
  PRSwiper();
  this.classList.add("on");
  advertSwiper.classList.add("on");
  advertSwiperInstance.slideTo(0, 0);
};

pressBtn.onclick = function (e) {
  e.preventDefault();
  PRSwiper();
  this.classList.add("on");
  pressSwiper.classList.add("on");
  pressSwiperInstance.slideTo(0, 0);
};

var pressSwiperInstance = new Swiper(".press-swiper", {
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
var advertSwiperInstance = new Swiper(".advert-swiper", {
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

function BgMenu() {
  bgmenu.forEach(function (v, k) {
    v.querySelector("span").classList.remove("on");
    v.querySelector("a").classList.remove("on");
  });
}

window.addEventListener("scroll", function (event) {
  BgMenu();

  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht >= 0 && ht < 900) {
    bgmenu.forEach(function (v, k) {
      bgmenu[0].querySelector("span").classList.add("on");
      bgmenu[0].querySelector("a").classList.add("on");
    });
  } else if (ht >= 900 && ht < 2300) {
    bgmenu.forEach(function (v, k) {
      bgmenu[1].querySelector("span").classList.add("on");
      bgmenu[1].querySelector("a").classList.add("on");
    });
  } else if (ht >= 2300 && ht < 5700) {
    bgmenu.forEach(function (v, k) {
      bgmenu[2].querySelector("span").classList.add("on");
      bgmenu[2].querySelector("a").classList.add("on");
    });
  } else if (ht >= 5700 && ht < 6900) {
    bgmenu.forEach(function (v, k) {
      bgmenu[3].querySelector("span").classList.add("on");
      bgmenu[3].querySelector("a").classList.add("on");
    });
  } else if (ht > 6900) {
    bgmenu.forEach(function (v, k) {
      bgmenu[4].querySelector("span").classList.add("on");
      bgmenu[4].querySelector("a").classList.add("on");
    });
  }
});

// let ht = document.querySelector("#business");
// console.log(ht);

// window.onscroll = function () {
//   let scrtop = document.documentElement.scrollTop;
//   console.log(scrtop);
// };
