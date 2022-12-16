$(".menu").click(function () {
  $(this).toggleClass("open");
});

function buttonClicked() {
  var x = document.getElementById("nav__dropdown");
  var main = document.getElementById("main");
  var footer = document.querySelector("footer");

  if (x.style.display === "block") {
    x.style.display = "none";
    main.style.display = "block";
    footer.style.display = "block";
  } else {
    x.style.display = "block";
    main.style.display = "none";
    footer.style.display = "none";
  }
}

const accordion = document.getElementsByClassName("footer__card__content");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

var $card = $(".card");
var lastCard = $(".stacked-cards .card").length - 1;

$(".next").click(function () {
  var prependList = function () {
    if ($(".card").hasClass("activeNow")) {
      var $slicedCard = $(".card")
        .slice(lastCard)
        .removeClass("transformThis activeNow");
      $("ul").prepend($slicedCard);
    }
  };
  $("li")
    .last()
    .removeClass("transformPrev")
    .addClass("transformThis")
    .prev()
    .addClass("activeNow");
  setTimeout(function () {
    prependList();
  }, 150);
});

$(".prev").click(function () {
  var appendToList = function () {
    if ($(".card").hasClass("activeNow")) {
      var $slicedCard = $(".card").slice(0, 1).addClass("transformPrev");
      $(".card-list").append($slicedCard);
    }
  };

  $("li")
    .removeClass("transformPrev")
    .last()
    .addClass("activeNow")
    .prevAll()
    .removeClass("activeNow");
  setTimeout(function () {
    appendToList();
  }, 150);
});
