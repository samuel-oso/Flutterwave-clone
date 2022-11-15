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
