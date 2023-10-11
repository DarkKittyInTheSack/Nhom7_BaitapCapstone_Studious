function navbarNightMode() {
    document.querySelector(".nav_area").style.background = "#161c2d";
    document.querySelector(".header_top_contents").style.backgroundColor =
      "#4867b0";
  
    document
      .querySelector(".navbar-brand")
      .classList.add("navbar-brand-night-mode");
    document.querySelector(".navbar-brand-night-mode").style.color = "#fff";
  
    document.querySelector(".about-us").style.color = "#fff"
    document.querySelector(".pages").style.color = "#fff"
    document.querySelector(".pages").style.backgroundColor = "#161c2d"
    document.querySelector(".itemss").style.color = "#fff"
  
    document.querySelector(".active").style.color = "#ff6e65";
    document.querySelector(".search_form").style.background = "transparent"
    document.querySelector(".search_form").style.color = "#fff"
  }

var change_theme_btn = document.querySelector(".change_theme").onclick =
  function () {

    document.body.style.background = "#181F31";
    navbarNightMode();
}