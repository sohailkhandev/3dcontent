var menuIcon = document.querySelectorAll('.menuIcon');
var popupBtn = document.querySelectorAll('.popup .navLink');
// CREATING LISTNERS
for ( i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener('click', handleMenuOpening);
}
for ( i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener('mouseenter', handlePopupOpening);
}
for ( i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener('mouseleave', handlePopupClosing);
}

function handleMenuOpening(event) {
  event.preventDefault()
  document.querySelector(".menuContainer").classList.toggle("active");
}
function handlePopupOpening(event) {
  event.preventDefault()
  var popupData = event.target.getAttribute('data-popup')
  if (popupData == ".pricing") {
    document.querySelector(".customPopup.pricing").style.display = "block";
    document.querySelector(".triangle").style.display = "block";
    document.querySelector(".customTriangle").style.display = "none";
    document.querySelector(".customPopup.howTo").style.display = "none";
  } else if (popupData == ".howTo") {
    document.querySelector(".triangle").style.display = "none";
    document.querySelector(".customTriangle").style.display = "block";
    document.querySelector(".customPopup.pricing").style.display = "none";
    document.querySelector(".customPopup.howTo").style.display = "block";
  }
}
function handlePopupClosing() {
  document.querySelector(".triangle").style.display = "none";
  document.querySelector(".customTriangle").style.display = "none";
  document.querySelector('.customPopup.howTo').style.display = "none"
  document.querySelector('.customPopup.pricing').style.display = "none"
}

var myCarousel = document.getElementById('carouselExampleControls')

myCarousel.addEventListener('slide.bs.carousel', function (data) {
  var currrentSlide = data.to + 1;
  var pageContent = document.querySelector(".contentBody")
  var slideNumber = document.querySelectorAll('.slideNumber')
  console.log(slideNumber)
  if (currrentSlide == 2) {
    pageContent.classList.add("black")
    pageContent.classList.remove("pink")
    for (var i = 0; i < slideNumber.length; i++) {
      slideNumber[i].textContent = 2;
    }
  } else if (currrentSlide == 3) {
    pageContent.classList.add("pink")
    pageContent.classList.remove("black")
    for (var i = 0; i < slideNumber.length; i++) {
      slideNumber[i].textContent = 3;
    }
  } else if (currrentSlide == 1) {
    pageContent.classList.remove("pink")
    pageContent.classList.remove("black")
    for (var i = 0; i < slideNumber.length; i++) {
      slideNumber[i].textContent = 1;
    }
  }
})