import CountUp from "countup.js";
import waypoints from "../../../node_modules/waypoints/lib/noframework.waypoints";
import $ from "jquery";

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
var sticky = header.offsetTop;

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

console.log(largeHeroBottom);

function checkBtn() {
    if (window.pageYOffset >= largeHeroBottom) {
        returnBtn.classList.add("return-btn--revealed");
    } else {
        returnBtn.classList.remove("return-btn--revealed");
    }
}

// function checkBtn () {
//     new Waypoint({
//         element: largeHero,
//         handler: function(direction) {
//             if (direction == "down") {
//                 returnBtn.classList.add("return-btn--revealed");
//                 console.log("Hello!");
//             } else {
//                 returnBtn.classList.remove("return-btn--revealed");
//                 console.log("Hi!");
//             }
//         },
//         offset: "85%"
//     });
// }

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

