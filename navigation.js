function tooglemenu() {
  var menu = document.querySelector(".menutoggle");
  if (menu.classList.contains("active")) {
    navigation();
  } else {
    var nav = document.querySelector(".navigation");
    var navStyle1 = document.querySelector(".navigation-style-1");
    var navStyle2 = document.querySelector(".navigation-style-2");
    var navStyle3 = document.querySelector(".navigation-style-3");

    menu.classList.toggle("active");
    setTimeout(function () {
      navStyle1.classList.toggle("active");
    }, 500);
    setTimeout(function () {
      navStyle2.classList.toggle("active");
    }, 600);
    setTimeout(function () {
      navStyle3.classList.toggle("active");
    }, 700);
    setTimeout(function () {
      nav.classList.toggle("active");
    }, 800);
  }
}
function navigation() {
  var menu = document.querySelector(".menutoggle");
  var nav = document.querySelector(".navigation");
  var navStyle1 = document.querySelector(".navigation-style-1");
  var navStyle2 = document.querySelector(".navigation-style-2");
  var navStyle3 = document.querySelector(".navigation-style-3");
  //   setTimeout(() => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    setTimeout(function () {
      nav.classList.remove("active");
    }, 500);
    setTimeout(function () {
      navStyle3.classList.remove("active");
    }, 600);
    setTimeout(function () {
      navStyle2.classList.remove("active");
    }, 800);
    setTimeout(function () {
      navStyle1.classList.remove("active");
    }, 1000);
  }
  //   }, 100);
}

// function skill() {
//   navigation();
//   document.getElementById("skills").scrollIntoView();
// }

function program() {
  alert("Will upadate ASAP any event/programs near you!!");
}

function aboutus() {
  navigation();
  document.getElementById("aboutus").scrollIntoView();
}
function programs() {
  navigation();
  document.getElementById("programs").scrollIntoView();
}
function courses() {
  navigation();
  document.getElementById("courses").scrollIntoView();
}
