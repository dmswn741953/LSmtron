let bgmenu = document.querySelectorAll(".main .bg-menu li");
let Bgvideo = document.querySelectorAll(".bg video");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub-menu");
let service = document.querySelectorAll(".service>li");
let navWrap = document.querySelector(".nav_wrap");
let navBg = document.querySelector(".navBg");
let BsnCon = document.querySelectorAll("#business>ul>li");
let BsnControl = document.querySelectorAll(".BsnControl");
let pressBtn = document.querySelector(".pressBtn");
let advertBtn = document.querySelector(".advertBtn");
let pressSwiper = document.querySelector(".press-swiper");
let advertSwiper = document.querySelector(".advert-swiper");

bgmenu[0].querySelector("span").classList.add("on");
bgmenu[0].querySelector("a").classList.add("on");
pressSwiper.classList.add("on");

function down1() {
  bgmenu.forEach(function (v) {
    v.querySelector("span").classList.remove("on");
    v.querySelector("a").classList.remove("on");
  });
}
function down2() {
  BsnCon.forEach(function (v) {
    v.classList.remove("on");
  });
}

function PRSwiper() {
  pressBtn.classList.remove("on");
  advertBtn.classList.remove("on");
  pressSwiper.classList.remove("on");
  advertSwiper.classList.remove("on");
}

function resetVideo(index) {
  let video = Bgvideo[index];
  if (video) {
    video.currentTime = 0;
    video.play();
  }
}

document
  .querySelector(".Bgbtn1")
  .addEventListener("click", () => resetVideo(0));
document
  .querySelector(".Bgbtn2")
  .addEventListener("click", () => resetVideo(1));
document
  .querySelector(".Bgbtn3")
  .addEventListener("click", () => resetVideo(2));

bgmenu.forEach(function (v, k) {
  v.addEventListener("click", function () {
    down1();
    this.querySelector("span").classList.add("on");
    this.querySelector("a").classList.add("on");
  });

  v.onclick = function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector(`.content${k + 1}`).offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelector(".menu").onmouseenter = function () {
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.add("on");
    sub[k].classList.add("on");
    service.forEach(function (v) {
      v.classList.add("action");
    });
  });
  navBg.querySelectorAll("a").forEach(function (v) {
    v.classList.add("on");
  });
};

navWrap.onmouseleave = function () {
  navBg.classList.remove("on");
  document.querySelector(".nav").classList.remove("on");
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.remove("on");
    sub[k].classList.remove("on");
    service.forEach(function (v) {
      v.classList.remove("action");
    });
  });
  navBg.querySelectorAll("a").forEach(function (v) {
    v.classList.remove("on");
  });
};

gnb.forEach(function (v) {
  v.onmouseenter = function () {
    document.querySelector(".wrap .nav").classList.add("on");
    navBg.classList.add("on");
    document.querySelector(".logo img").src = "./imges/logo_over.svg";
  };
});

sub.forEach(function (v) {
  v.onmouseenter = function () {
    navBg.classList.add("on");
    document.querySelector(".nav").classList.add("on");
  };
});

service.forEach(function (v) {
  v.onclick = function () {
    v.classList.toggle("on");
    v.querySelector(".sv-list").classList.toggle("on");
    v.onmouseleave = function () {
      v.classList.remove("on");
      v.querySelector(".sv-list").classList.remove("on");
    };
  };
});

document.querySelectorAll(".closed").forEach(function (v) {
  v.onclick = function (e) {
    e.stopPropagation();
    down2();
    BsnPoster();
    document.querySelectorAll(".video_tit").forEach(function (value) {
      value.querySelector("p").classList.remove("on", "action");
      value.classList.remove("on");
    });
    BsnControl.forEach(function (v) {
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
      if (key !== k) {
        BsntitP.classList.add("on");
        BsntitP.classList.remove("action");
        value.classList.remove("on");
        BsnControl[key].classList.remove("on");
        value.querySelector("div").classList.remove("on");
      } else {
        BsntitP.classList.remove("on");
        BsntitP.classList.add("action");
        value.classList.add("on");
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
    Bsnvideo.load();
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

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".myVideoSwiper", {
  effect: "fade",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

var pressSwiperInstance = new Swiper(".press-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1280: { slidesPerView: 3, spaceBetween: 30 },
    720: { slidesPerView: 2, spaceBetween: 20 },
  },
  keyboard: { enabled: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var advertSwiperInstance = new Swiper(".advert-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    720: { slidesPerView: 2, spaceBetween: 20 },
    1280: { slidesPerView: 3, spaceBetween: 30 },
  },
  keyboard: { enabled: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", function () {
  let ht = document.documentElement.scrollTop;
  down1();
  if (ht < 900)
    bgmenu[0].querySelector("span").classList.add("on"),
      bgmenu[0].querySelector("a").classList.add("on");
  else if (ht < 2300)
    bgmenu[1].querySelector("span").classList.add("on"),
      bgmenu[1].querySelector("a").classList.add("on");
  else if (ht < 5700)
    bgmenu[2].querySelector("span").classList.add("on"),
      bgmenu[2].querySelector("a").classList.add("on");
  else if (ht < 6900)
    bgmenu[3].querySelector("span").classList.add("on"),
      bgmenu[3].querySelector("a").classList.add("on");
  else
    bgmenu[4].querySelector("span").classList.add("on"),
      bgmenu[4].querySelector("a").classList.add("on");
});
