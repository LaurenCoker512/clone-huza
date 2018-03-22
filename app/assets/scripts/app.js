import CountUp from "countup.js";

jarallax(document.querySelectorAll('.jarallax'), {
    disableParallax: function () {
        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    },
    disableVideo: function () {
        return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    }
});

var itemFund = document.getElementById("item-fund");
var countFund = 1000;
var itemVolunteer = document.getElementById("item-volunteer");
var countVolunteer = 1000;
var itemDonor = document.getElementById("item-donor");
var countDonor = 1000;
var itemRaised = document.getElementById("item-raised");
var countRaised = 1000;

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

createCounter(itemFund, countFund);
createCounter(itemVolunteer, countVolunteer);
createCounter(itemDonor, countDonor);
createCounter(itemRaised, countRaised);
