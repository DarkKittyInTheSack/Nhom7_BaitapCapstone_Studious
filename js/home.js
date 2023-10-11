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

function welcomeNightMode(white,dark){
    document.querySelector(".welcome_txt").style.color = white
    document.querySelector(".trending").style.color = white
    document.querySelector(".certified").style.color = white
    document.querySelector(".books").style.color = white
    var description = document.querySelectorAll(".description")
    description[0].style.color = dark
    description[1].style.color = dark
    description[2].style.color = dark

}

function catalogNightMode(color1,color2,color3,color4, color5){
    var catalog_item = document.querySelectorAll('.catalog-night-mode')
    catalog_item[0].style.background = color1
    catalog_item[1].style.background = color1
    catalog_item[2].style.background = color1
    catalog_item[3].style.background = color1

    var catalogImgBg = document.querySelectorAll('.bgr-night-mode')
    catalogImgBg[0].style.background = color2
    catalogImgBg[0].style.color = color3
    catalogImgBg[1].style.background = color2
    catalogImgBg[1].style.color = color3
    catalogImgBg[2].style.background = color2
    catalogImgBg[2].style.color = color3
    catalogImgBg[3].style.background = color2
    catalogImgBg[3].style.color = color3

    var catalogTitle = document.querySelectorAll(".item_content_title")
    catalogTitle[0].style.color = color4
    catalogTitle[1].style.color = color4
    catalogTitle[2].style.color = color4
    catalogTitle[3].style.color = color4

    var catalogDescription = document.querySelectorAll(".item_content_description")
    catalogDescription[0].style.color = color5
    catalogDescription[1].style.color = color5
    catalogDescription[2].style.color = color5
    catalogDescription[3].style.color = color5
}

function milestoneNightMode(white,dark){
    document.querySelector('.milestone_title_txt').style.color = white
    document.querySelector('.subtitle').style.color = dark
    var countUpNumber = document.querySelectorAll(".counter")
    countUpNumber[0].style.color = white
    countUpNumber[1].style.color = white
    countUpNumber[2].style.color = white
    countUpNumber[3].style.color = white

    var subCount = document.querySelectorAll(".sub_counter")
    subCount[0].style.color = white
    subCount[1].style.color = white
    subCount[2].style.color = white
    subCount[3].style.color = white
}

function feedbackNightMode(color1,color2,color3){
  document.querySelector('.feedback_title_txt').style.color = color1

  var feedbackBg = document.querySelectorAll('.feedback-night-mode')
  feedbackBg[0].style.background = color2
  feedbackBg[1].style.background = color2
  feedbackBg[2].style.background = color2

  var comment = document.querySelectorAll(".comment_txt")
  comment[0].style.color = color3
  comment[1].style.color = color3
  comment[2].style.color = color3

  var author = document.querySelectorAll('.author-name')
  author[0].style.color = color1
  author[1].style.color = color1
  author[2].style.color = color1

  var sub = document.querySelectorAll(".author_sub")
  sub[0].style.color = color3
  sub[1].style.color = color3
  sub[2].style.color = color3
}

function instructorNightMode(color1, color2, color3){
  document.querySelector(".instructor_title_txt").style.color = color1
  var instructorCard = document.querySelectorAll('.instructor_card')
  instructorCard[0].style.background = color2
  instructorCard[1].style.background = color2
  instructorCard[2].style.background = color2
  instructorCard[3].style.background = color2

  var instructorName = document.querySelectorAll('.instructor_name')
  instructorName[0].style.color = color1
  instructorName[1].style.color = color1
  instructorName[2].style.color = color1
  instructorName[3].style.color = color1

  var instructorWork = document.querySelectorAll('.instructor_work')
  instructorWork[0].style.color = color3
  instructorWork[1].style.color = color3
  instructorWork[2].style.color = color3
  instructorWork[3].style.color = color3
}

function contactUsNightMode(white,dark){
  document.querySelector('.contact_us_title').style.color = white
  document.querySelector('.contact_us_description').style.color = dark
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




document.querySelector(".change_themes").addEventListener("click", function(){
  
  var checkBox = document.getElementById("switch_theme")

  if(checkBox.checked == true){
    document.body.style.background = "#181F31";
    navbarNightMode();
    welcomeNightMode("#fff","#b7b7b7");
    catalogNightMode("#161c2d", "#102045", "#4867b0","#fff", "#b7b7b7");
    milestoneNightMode("#fff", "#b7b7b7");
    feedbackNightMode("#fff", "#161c2d", "#b7b7b7");
    instructorNightMode("#fff", "#161c2d", "#b7b7b7");
    contactUsNightMode("#fff", "#b7b7b7");
    footerNightMode("#161c2d", "#fff", "#b7b7b7", "transparent","#4867b0" );
  }else{
    document.body.style.background = "#fff";
    navbarLightMode();
    welcomeNightMode("#060606","#707070");
    catalogNightMode("#fff","#e9edf6","#0d369f","#060606", "#707070")
    milestoneNightMode("#060606","#707070")
    feedbackNightMode("#060606","#fff","#707070")
    instructorNightMode("#060606", "#fff", "#707070")
    contactUsNightMode("#060606","#707070")
    footerNightMode("#fff","#060606","#707070","#fff","#0d369f")
  }
    

})

document.querySelector(".responsive_change_theme").addEventListener("click", function(){
  document.body.style.background = "#181F31";
  navbarNightMode();
  welcomeNightMode("#fff","#b7b7b7");
  catalogNightMode("#161c2d", "#102045", "#4867b0","#fff", "#b7b7b7");
  milestoneNightMode("#fff", "#b7b7b7");
  feedbackNightMode("#fff", "#161c2d", "#b7b7b7");
  instructorNightMode("#fff", "#161c2d", "#b7b7b7");
  contactUsNightMode("#fff", "#b7b7b7");
  footerNightMode("#161c2d", "#fff", "#b7b7b7", "transparent","#4867b0" );
})

