const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp:0.1
});
new ResizeObserver(() => scroll.update()).observe(
    document.querySelector("#main")
  );

  var btn = document.querySelector("#footer-top .btn").addEventListener("click",function(){
    scroll.scrollTo(0);
  });

var tl = gsap.timeline();
tl.to("#yellowdiv", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out"
})
tl.from("#yellowdiv2", {
    top: "100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out"
}, "a")
tl.to("#loader h1", {
    color: "black",
    delay: 0.5,
    duration: 0.2,
    ease: "expo.out"
}, "a")
tl.to("#loader", {
    opacity: 0,
    display: "none"
})


var elems = document.querySelectorAll(".elem");
var page = document.getElementById("page2");
elems.forEach(function (e) {
    var image = e.getAttribute("data-img");
    e.addEventListener("mouseover", function () {
        page.style.backgroundImage = `url(${image})`
    })
    e.addEventListener("mouseleave", function () {
        page.style.backgroundColor = "black";
        page.style.backgroundImage = `url()`;
    })
});

var images1 = [
    {
        link: "https://works.studio/assets/imager/images/converse-nextstudio/35375/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "CONVERSE NEXTSTUDIO"
    },
    {
        link: "https://works.studio/assets/imager/images/boldly/25589/boldly-thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "BOLDLY IDENTITY & WEBSITE"
    },
    {
        link: "https://works.studio/assets/imager/images/Fear-of-God-Nike/9769/Nike-x-Fear-of-God-16_rectangle_1600_201124_014130_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "NIKE X FEAR OF GOD IDENTITY"
    },
    {
        link: "https://works.studio/assets/imager/images/public/17314/Public-Campaign-Photography-Portrait-Millana-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "PUBLIC.COM CAMPAIGN"
    },
    {
        link: "https://works.studio/assets/imager/images/reshape-identity/2769/Reshape-Identity-Logo-Blue_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "RESHAPE IDENTITY"
    },
    {
        link: "https://works.studio/assets/imager/images/nike-air-max-day-21-nyc-identity/10909/Nike-Air-Max-21-Film-Title-Card-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "NIKE AIR MAX 21 FILM IDENTITY"
    }
]
var images2 = [
    {
        link: "https://works.studio/assets/imager/images/john-elliott-nepal/26169/21_john-elliott-nepal_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "JOHN ELLIOT SCENES FROM NEPAL"
    },
    {
        link: "https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "L.E.D. STUDIO WEBSITE"
    },
    {
        link: "https://works.studio/assets/imager/images/CDL-2021-champs/10987/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "CDL CHAMPIONSHIP KIT 2021"
    },
    {
        link: "https://works.studio/assets/imager/images/guns-n-roses-pop-up/2544/Guns-N-Roses-Pop-Up-Police-Car-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "GUNS N' ROSES POP UP"
    },
    {
        link: "https://works.studio/assets/imager/images/converse-basketball-explorations/10270/Converse-Basketball-Explorations-Typography-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "CONVERSE BASKETBALL EXPLORATIONS"
    },
    {
        link: "https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "U.S. SOCCER CAMPAIGN IDENTITY"
    },
]
var images3 = [
    {
        link: "https://works.studio/assets/imager/images/skky-partners/22540/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "SKKY PARTNERS IDENTITY AND WEBSITE"
    },
    {
        link: "https://works.studio/assets/imager/images/converse/824/Converse-Basketball-Photography-02_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "CONVERSE BASKETBALL IDENTITY"
    },
    {
        link: "https://works.studio/assets/imager/images/dreamhaus/6658/DreamHaus-Identity-Wordmark-Lines_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "DREAMHAUS IDENTITY"
    },
    {
        link: "https://works.studio/assets/imager/images/the-xi/972/XI-Identity-Architecture-Photography-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "THE XI BRAND DESIGN"
    },
    {
        link: "https://works.studio/assets/imager/images/nike-studio-45/1098/Nike-Studio-45-Gym-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "NIKE STUDIO 45"
    },
    {
        link: "https://works.studio/assets/imager/images/jeen-yuhs/13608/jeen-yuhs-Film-Identity-Thumbnail_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
        title: "'JEEN-YUHS' FILM IDENTITY"
    }
]

images1.forEach(function (elem) {
    var line1 = document.getElementById("line1");
    var newdiv = document.createElement("div");
    newdiv.classList.add("img");

    var image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", `${elem.link}`);

    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    var heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerHTML = elem.title;

    overlay.appendChild(heading);
    newdiv.appendChild(overlay);
    newdiv.appendChild(image);
    line1.appendChild(newdiv);
})
images2.forEach(function (elem) {
    var line2 = document.getElementById("line2");
    var newdiv = document.createElement("div");
    newdiv.classList.add("img");

    var image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", `${elem.link}`);

    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    var heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerHTML = elem.title;

    overlay.appendChild(heading);
    newdiv.appendChild(overlay);
    newdiv.appendChild(image);
    line2.appendChild(newdiv);
})
images3.forEach(function (elem) {
    var line3 = document.getElementById("line3");
    var newdiv = document.createElement("div");
    newdiv.classList.add("img");

    var image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", `${elem.link}`);

    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    var heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerHTML = elem.title;

    overlay.appendChild(heading);
    newdiv.appendChild(overlay);
    newdiv.appendChild(image);
    line3.appendChild(newdiv);
})

var close = document.querySelector(".close");
var flag = 0;
close.addEventListener("click",function(){
    if(flag == 0){
        close.style.transform = "rotate(135deg)";
        flag = 1;
        collapse.forEach(function(elem){
            elem.style.marginLeft = "-100px";
            elem.style.opacity = 0;
        })
    }
    else{
        close.style.transform = "rotate(0deg)";
        flag = 0;
        collapse.forEach(function(elem){
            elem.style.marginLeft = "0px";
            elem.style.opacity = 1;
        })
    }
})

var collapse = document.querySelectorAll(".collapse");
