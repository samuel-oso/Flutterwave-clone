$(".menu").click(function () {
  $(this).toggleClass("open");
});

function buttonClicked() {
  var x = document.getElementById("nav__dropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
