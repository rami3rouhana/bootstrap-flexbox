// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

const desktop = () =>{
    document.getElementsByClassName("page-body")[0].style.width ="100%";
    document.getElementsByClassName("navbar")[0].style.width ="100%";
    function scrollFunctionDesktop() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").style.transitionDuration = "0.25s"
          document.getElementById("navbar").style.padding = "10px 0px";
        } else {
          document.getElementById("navbar").style.transitionDuration = "0.25s"
          document.getElementById("navbar").style.padding = "20px 0px";
        }
      }
    window.onscroll = function() {scrollFunctionDesktop()};

}

const tablet = () =>{
    document.getElementsByClassName("page-body")[0].style.width ="60%";
    document.getElementsByClassName("navbar")[0].style.width ="60%";
    function scrollFunctionTablet() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").style.transitionDuration = "0.25s"
          document.getElementById("navbar").style.padding = "20px 0px";
        } else {
          document.getElementById("navbar").style.transitionDuration = "0.25s"
          document.getElementById("navbar").style.padding = "40px 0px";
        }
      }
    
    window.onscroll = function() {scrollFunctionTablet()};
}

document.getElementsByClassName("desktop")[0].addEventListener("click", desktop )

document.getElementsByClassName("tablet")[0].addEventListener("click", tablet )