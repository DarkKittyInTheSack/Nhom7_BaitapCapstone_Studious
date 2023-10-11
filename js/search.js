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

function navbarLightMode() {
  document.querySelector(".nav_area").style.background = "#fff";
  document.querySelector(".header_top_contents").style.backgroundColor =
    "#0d369f";

  document
    .querySelector(".navbar-brand")
    .classList.remove("navbar-brand-night-mode");

    document
    .querySelector(".navbar-brand").style.color = "#0d369f";

  document.querySelector(".about-us").style.color = "#060606"
  document.querySelector(".pages").style.color = "#060606"
  document.querySelector(".pages").style.backgroundColor = "#fff"
  document.querySelector(".itemss").style.color = "#060606"

  document.querySelector(".active").style.color = "#ff6e65";
  document.querySelector(".search_form").style.background = "#fff"
  document.querySelector(".search_form").style.color = "#060606"
}

function footerNightMode(color1,color2,color3,color4,color5){
  document.querySelector('.custom_form').style.background = color1
  document.querySelector('.left_txt').style.color = color2
  document.querySelector('.left_sub').style.color = color3
  document.querySelector('.input_night_mode').style.background = color4  
  document.querySelector('.send').style.background = color5 
  document.querySelector('.input_night_mode').style.borderColor = color3  
  document.querySelector('.input_night_mode').style.color = color2  

}


function itemNightMode(color1,color2,color3){
  var title =  document.querySelector('.search_content_txt')
  title.style.color = color1

  var titleItems = document.querySelectorAll(".card_title_txt")
  titleItems[0].style.color = color1
  titleItems[1].style.color = color1

  var dates = document.querySelectorAll(".dates")
  dates[0].style.color = color2
  dates[1].style.color = color2

  var cards = document.querySelectorAll(".card")
  cards[0].style.backgroundColor = color3
  cards[1].style.backgroundColor = color3
}

function inputNightMode(color1,color2,color3){
  document.querySelector(".search_area2").style.background = color1
  document.querySelector(".search_area2").style.color = color2
  document.querySelector(".search_button").style.background = color3
}

function sideMenuNightMode(color1,color2){
  var sideMenuTitleList = document.querySelectorAll('.side_menu_title')
  for(i =0;i < sideMenuTitleList.length; i++){
    sideMenuTitleList[i].style.color = color1
  }

  var sideMenuItemList = document.querySelectorAll('.side_menu_item')
  for(i =0;i < sideMenuItemList.length; i++){
    sideMenuItemList[i].style.color = color2
  }
}

document.querySelector(".change_themes").addEventListener("click", function(){
  
  var checkBox = document.getElementById("switch_theme")

  if(checkBox.checked == true){
    document.body.style.background = "#181F31";
    navbarNightMode();
    footerNightMode("#161c2d", "#fff", "#b7b7b7", "transparent","#4867b0" );
    itemNightMode("#fff","#b7b7b7","#161c2d")
    inputNightMode("transparent", "#fff","#4867b0" )
    sideMenuNightMode("#fff","#b7b7b7")

  }else{
    document.body.style.background = "#fff";
    navbarLightMode();
    footerNightMode("#fff","#060606","#707070","#fff","#0d369f")
    itemNightMode("#060606","#707070","#fff")
    inputNightMode("#fff","#060606", "#0d369f")
    sideMenuNightMode("#060606","#707070")
  }
    

})

document.querySelector(".responsive_change_theme").addEventListener("click", function(){
  document.body.style.background = "#181F31";
  navbarNightMode();
})
