var darkModeToggle = document.getElementById("toggle_checkbox");

function displayDarkMode() {
	if (localStorage.darkModeToggleValue === "true") {
		darkModeToggle.checked = localStorage.darkModeToggleValue;
		darkMode();
	} else {
		darkModeToggle.checked = false;
	}
}

darkModeToggle.addEventListener("change", function () {
	if (darkModeToggle.checked) {
		darkMode();
	} else if (darkModeToggle.checked === false) {
		lightMode();
	}
	localStorage.darkModeToggleValue = darkModeToggle.checked;
});

function darkMode() {
	$("body").css("background-color", "#202020");
	// $(".bg-light").toggleClass("dark");
    $(".box .rectangle").css("background-color", "#290362");
    $(".box .pngwing").css("background-image", " url(./img/kik2.gif)");
    $(".box1 .rectangle2").css("background-color", "#211434"); 
    $(".image .vid").attr("src", "./img/ezgif-3-a6ab426501.mp4");
    $(".dropdown-item").css("color", "#fff");
    $(".dropdown button, .link").css("color", "#FD84BA");
    $(".dropdown button, .link").hover(function(e) { 
        $(this).css("color",e.type === "mouseenter"?"#BC8EEB":"#FD84BA") ;
    });
    $(".button").css({"color": "#e364e7","border":"4px solid #b44ab8" });
    $(".button").hover(function(e) { 
        $(this).css({"color":e.type === "mouseenter"?"#e364e7":"#e364e7",
        "background-color": e.type === "mouseenter" ? "#D9B4DA" : "transparent"}) ;
    });
    $(".button").addClass("changed");
    //$(".dropdown button, .link:hover").css("color", "#BC8EEB");
    $(".label .track-analyze-and").css("color", "#FFFFFF");
    $(".label .unleash-the-power-of").css("background", "linear-gradient(75deg, rgba(255, 255, 255, 0.65) 0%, #ED25FF 75.52%)");
    
    
    $(".box4 .rectangle-wrapper").css("background", "#EBC8C8");
    $(".box4 #rectangle1").css("background-color", "#1C0057");
    $(".box4 #rectangle2").css("background-color", "#662D7A");
    $(".box4 #rectangle3").css("background-color", "#00404D");
    $("#rectangle1 .optimize-sleep").css("color", "#D79997");
    $("#rectangle2 .optimize-sleep").css("color", "#D989C3");
    $("#rectangle3 .optimize-sleep").css("color", "#C4E3EC");
    $(".blog_section").css({"background" : "#202020"});
    $(".blog_section .title").css({"background" : "#6e0085"});
    $(".blog_item").css("background", "#4D374E");
    $(".blog_section .blog_content .blog_item .blog_details .blog_title h5 a").css("color", "#fff");
    $(".blog_section .blog_content .blog_item .blog_details p").css({"border-top": "1px solid #D79997" , "color" : "#ffdbd9"});
    $(".site-footer").css({"background-color": "#26272b" , "color" : "#737373"});
    $(".site-footer h6").css("color", "#fff");
}

function lightMode() {
	$("body").css("background-color", "#FFEDED");
	// $(".bg-light").toggleClass("dark");
    $(".box .rectangle").css("background-color", " #ef5e5e");
    $(".box .pngwing").css("background-image", " url(./img/icons8-maneki.gif)");
    $(".box1 .rectangle2").css("background-color", "#BDF2F5");
    $(".image .vid").attr("src", "./img/ezgif-1-5645d2c373.mp4");
    $(".dropdown-item").css("color", "#001a33");
    $(".dropdown button, .link").css("color", "#275480");

    $(".label .track-analyze-and").css("color", "#ef5e5e");
    $(".label .unleash-the-power-of").css("background", "rgb(73, 14, 14)");
    $(".dropdown button, .link").hover(function(e) { 
        $(this).css("color",e.type === "mouseenter"?"rgb(150, 0, 196)":"#275480") ;
    });
    $(".button").css({"color": "#8dc6fc","border":"4px solid #2A5A86" });
    $(".button").hover(function(e) { 
        $(this).css({"color":e.type === "mouseenter"?"#8dc6fc":"#8dc6fc"}) ;
    });
    $(".button").removeClass("changed");
    $(".box4 #rectangle1").css("background-color", "#ffc422a1");
    $(".box4 #rectangle2").css("background-color", "#EAA9DE");
    $(".box4 #rectangle3").css("background-color", "#BBE0E7");
    $("#rectangle1 .optimize-sleep").css("color", "#c03c4e");
    $("#rectangle2 .optimize-sleep").css("color", "#991D76");
    $("#rectangle3 .optimize-sleep").css("color", "#0A696C");
    $(".blog_section").css({"background" : "#ff3c4369"});
    $(".blog_section .title").css({"background" : "#FF964A"});
    $(".blog_item").css("background", "#ffdbd9");
    $(".blog_section .blog_content .blog_item .blog_details .blog_title h5 a").css("color", "#0c0c0c");
    $(".blog_section .blog_content .blog_item .blog_details p").css({"border-top": "1px solid #ff7e7e" , "color" : "#0c0c0c"});
    $(".site-footer").css({"background-color": "#FFEDED" , "color" : "#926d6d"});
    $(".site-footer h6").css("color", "#680808");
    //$(".blog_item").css("background", "#99005A");
}




//Blog section--------------------------------------
const btns= document.querySelectorAll(".nav-btn");
const cont= document.querySelectorAll(".content");

var sliderNav= function(manual){

    cont.forEach((btn) => {
        btn.classList.remove("active");
    });

    btns.forEach((con) => {
        con.classList.remove("active");
    });

    btns[manual].classList.add("active");
    cont[manual].classList.add("active");
}

btns.forEach((btn,i) => {
    btn.addEventListener("click" , () => {
        sliderNav(i);
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,   
    smartSpeed: 3000, 
    autoplayTimeout:7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})