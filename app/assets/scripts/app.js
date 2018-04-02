import CountUp from "countup.js";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";
import $ from "jquery";
import slick from "slick-carousel";

window.onscroll = function() {
    stickyHeader();
    checkBtn();
};

window.onresize = function() {
    removeStickyHeader();
};

//Parallax scrolling

jarallax(document.querySelectorAll('.jarallax'), {
    disableParallax: function () {
        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    },
    disableVideo: function () {
        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    }
});

//CountUp

var itemFund = document.getElementById("item-fund"),
    countFund = 1000,
    itemVolunteer = document.getElementById("item-volunteer"),
    countVolunteer = 1000,
    itemDonor = document.getElementById("item-donor"),
    countDonor = 200,
    itemRaised = document.getElementById("item-raised"),
    countRaised = 1000,
    counterArea = document.querySelector(".current-count");

var options = {
    useEasing: true,
    useGrouping: true,
    separator: '',
    decimal: '.',
};

function createCounter(item, count) {
    var countUp = new CountUp(item, 0, count, 0, 1.2, options);
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }
}

new Waypoint({
    element: counterArea,
    handler: function() {
        createCounter(itemFund, countFund);
        createCounter(itemVolunteer, countVolunteer);
        createCounter(itemDonor, countDonor);
        createCounter(itemRaised, countRaised);
    },
    offset: "70%"
});

//Sticky header on scroll

var header = document.querySelector(".header");
// var sticky = header.offsetTop;
var sticky = 168;

function stickyHeader() {
    if (window.innerWidth >= 975) {
        if (window.pageYOffset >= sticky) {
            header.classList.add("header--sticky");
        } else if (window.innerWidth <= 975 && header.classList.contains("header--sticky")) {
            header.classList.remove("header--sticky");
        }
        else {
            header.classList.remove("header--sticky");
        }
    }
}

function removeStickyHeader() {
    if (window.innerWidth < 975) {
        header.classList.remove("header--sticky");
    }
}

//Smooth scrolling

var returnBtn = document.querySelector(".return-btn");
var largeHero = document.querySelector(".large-hero");
var largeHeroBottom = largeHero.offsetTop;

function checkBtn() {
    if (window.pageYOffset >= largeHeroBottom) {
        returnBtn.classList.add("return-btn--revealed");
    } else {
        returnBtn.classList.remove("return-btn--revealed");
    }
}

$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800); // The number here represents the speed of the scroll in milliseconds
          target.focus(); // Setting focus
          if (target.is(":focus")){ // Checking if the target was focused
            return false;
          } else {
            target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            target.focus(); // Setting focus
          };
          return false;
        }
      }
    });
  });

//Search bar

var searchBtn = document.querySelector(".header__other-btn__search");
var searchBar = document.querySelector(".header__other-btn__search__search-bar");

searchBtn.addEventListener("click", function() {
    toggleSearchBar();
});

function toggleSearchBar() {
    if (searchBar.classList.contains("header__other-btn__search__search-bar--revealed")) {
        searchBar.classList.remove("header__other-btn__search__search-bar--revealed");
        searchBar.classList.add("header__other-btn__search__search-bar--hidden");
        searchBtn.src = "assets/images/698956-icon-111-search-128.png";
    } else {
        searchBar.classList.add("header__other-btn__search__search-bar--revealed");
        searchBar.classList.remove("header__other-btn__search__search-bar--hidden");
        searchBtn.src = "assets/images/close.png";
    }
}

//Mobile Menu

var menuBtn = document.querySelector(".top__dropdown__menu");
var menuCloseBtn = document.querySelector(".mobile-menu__close");
var dropdownMenu = document.querySelector(".mobile-menu");
var overlay = document.querySelector(".overlay");
var openSubMenus = document.querySelectorAll(".mobile-menu__plus");

menuBtn.addEventListener("click", function() {
    openNav();
});

menuCloseBtn.addEventListener("click", function() {
    closeNav();
});

openSubMenus.forEach(function(elem) {
    elem.addEventListener("click", function() {
        var nextSib = elem.nextElementSibling;
        if (nextSib.classList.contains("mobile-menu__submenu--revealed")) {
            elem.classList.remove("mobile-menu__plus--revealed");
            nextSib.classList.remove("mobile-menu__submenu--revealed");
        } else {
            elem.classList.add("mobile-menu__plus--revealed");
            nextSib.classList.add("mobile-menu__submenu--revealed");
        }
    });
})

function openNav() {
    dropdownMenu.classList.add("mobile-menu--revealed");
    overlay.classList.add("overlay--revealed");
}

function closeNav() {
    dropdownMenu.classList.remove("mobile-menu--revealed");
    overlay.classList.remove("overlay--revealed");
}

//Carousel

// $(document).ready(function(){
//     $(".slick-hero").slick({
        
//     });
// });

//Title Text Effects

// $(".large-hero__title").blast({delimiter: "character"});

//Preloader

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility = "hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.display = "none";
           document.getElementById('contents').style.visibility = "visible";
        },1000);
    }
  }


