"use strict";

function checkMail() {
  var searchElement = document.getElementById("search");
  var value = document.getElementById("search").value;
  var warningMsg = document.getElementById("warning-msg");

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
    console.log("ovo radi!");
    warningMsg.textContent = " ";
    searchElement.setAttribute("placeholder", "Updates in your inbox...");
    searchElement.classList.remove("placeholder-red");
  } else {
    warningMsg.textContent = "Please insert a valid email";
    searchElement.setAttribute("placeholder", "johnmadden/mail");
    searchElement.classList.add("placeholder-red");
    return false;
  }
}

var myNav = document.getElementById("navigation-bar");

window.onscroll = function () {
  "use strict";

  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

function openMenu() {
  var menu = document.getElementById("nav-links-container");
  var darkBg = document.getElementById("dark-bg");

  if (menu.style.display == "none") {
    menu.style.display = "flex";
    darkBg.style.display = "block";
    setTimeout(function () {
      menu.style.opacity = "100%";
      darkBg.style.opacity = "60%";
    }, 20);
  } else {
    menu.style.opacity = "0%";
    darkBg.style.opacity = "0%";
    setTimeout(function () {
      menu.style.display = "none";
      darkBg.style.display = "none";
    }, 100);
  }
}