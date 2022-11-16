$(".menu").click(function () {
  $(this).toggleClass("open");
});

function buttonClicked() {
  var x = document.getElementById("nav__dropdown");
  var main = document.getElementById("main");

  if (x.style.display === "block") {
    x.style.display = "none";
    main.style.display = "block";
  } else {
    x.style.display = "block";
    main.style.display = "none";
  }
}

const accordion = document.getElementsByClassName("footer__card__content");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
