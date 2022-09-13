// Desktop buttons
const desktop = () => {

  //Desktop style
  document.getElementsByClassName("page-body")[0].style.width = "100%";
  document.getElementsByClassName("navbar")[0].style.width = "100%";
  document.getElementsByClassName("footer").style.width = "100%";
  for (const img in imgs) {
    imgs[img].style.width = "30%"
  };
  document.getElementsByClassName("main-footer")[0].style.removeProperty("flex-direction")
  document.getElementsByClassName("main-footer")[0].style.removeProperty("align-items")

  //Scroll function
  function scrollFunctionDesktop() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.transitionDuration = "0.25s"
      document.getElementById("navbar").style.padding = "10px 0px";
    } else {
      document.getElementById("navbar").style.transitionDuration = "0.25s"
      document.getElementById("navbar").style.padding = "20px 0px";
    }
  }
  window.onscroll = function () { scrollFunctionDesktop() };

}

// Tablet buttons
const tablet = () => {

  //Tablet style
  document.getElementsByClassName("page-body")[0].style.width = "60%";
  document.getElementsByClassName("navbar")[0].style.width = "60%";
  document.getElementsByClassName("footer")[0].style.width = "60% ";
  const imgs = document.getElementsByClassName("portfolio-img");
  for (const img in imgs) {
    imgs[img].style.width = "40%"
    imgs[img].style.marginLeft = "49px"
  };
  document.getElementsByClassName("main-footer")[0].style.flexDirection = "column";
  document.getElementsByClassName("main-footer")[0].style.alignItems = "center";

  //Scroll function
  function scrollFunctionTablet() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.transitionDuration = "0.25s"
      document.getElementById("navbar").style.padding = "20px 0px";
    } else {
      document.getElementById("navbar").style.transitionDuration = "0.25s"
      document.getElementById("navbar").style.padding = "40px 0px";
    }
  }

  window.onscroll = function () { scrollFunctionTablet() };
}

// Phone buttons
const phone = () => {

  // Phone style
  document.getElementsByClassName("page-body")[0].style.width = "40%";
  document.getElementsByClassName("navbar")[0].style.width = "40%";
  document.getElementsByClassName("footer")[0].style.width = "40% ";
  const imgs = document.getElementsByClassName("portfolio-img");
  for (const img in imgs) {
    imgs[img].style.width = "100%"
  };
  document.getElementsByClassName("main-footer")[0].style.flexDirection = "column";
  document.getElementsByClassName("main-footer")[0].style.alignItems = "center";

  //Scroll function
  function scrollFunctionPhone() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.transitionDuration = "0.25s"
      document.getElementById("navbar").style.padding = "20px 0px";
    } else {
      document.getElementById("navbar").style.transitionDuration = "0.25s"
      document.getElementById("navbar").style.padding = "40px 0px";
    }
  }

  window.onscroll = function () { scrollFunctionPhone() };
}

// Change pages
document.getElementsByClassName("desktop")[0].addEventListener("click", desktop)
document.getElementsByClassName("tablet")[0].addEventListener("click", tablet)
document.getElementsByClassName("phone")[0].addEventListener("click", phone)

// Api call function
const sendData = async (name, email, phone, message) => {

  try {
    const url = "";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    });

    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error);
  }
}

// Send data to database
document.getElementById("submit").addEventListener("onClick", () => {

  // Get user input
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  const result = sendData(name, email, phone, message);

  if (result) {
    alert('Message sent!');
  } else {
    alert('Someting went wrong!');
  }
})