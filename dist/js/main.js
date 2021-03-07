//Button Search Show

var
  btnSearchClick = document.getElementById('search-show'),
  inputSearch1 = document.getElementById('search-text');

btnSearchClick.onclick = function () {
  inputSearch1.style.display = "block";
}

inputSearch1.onmouseleave = function () {
  inputSearch1.style.display = "none";
}

//
// carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";
}

//
// statistic
var
  count1 = document.getElementById("timer1"),
  count2 = document.getElementById("timer2"),
  count2 = document.getElementById("timer3"),
  count2 = document.getElementById("timer4");

function animatedCounter(element, start, end, duration) {
  var
    range = end - start,
    current = 0,
    increment = 0;

  if (end > start)
  {
    increment = 1;
  } else
  {
    increment = -1;
  }

  var timer = setInterval(function () {
    current += increment;
    element.textContent = current
    if (current == end)
    {
      clearInterval(timer);
    }
  }, duration);
}

animatedCounter(timer1, 1, 1500, 4);
animatedCounter(timer2, 1, 900, 6);
animatedCounter(timer3, 1, 1200, 5);
animatedCounter(timer4, 1, 126, 55);


//Use Jquery
// Executives Officers

$(function () {

  $('.c1-1').click(function () {
    $('.c-1').toggle('show');
    console.log("h")
  });

  $('.c2-2').click(function () {
    $('.c-2').toggle('show');
    console.log("h")
  });

  $('.c3-3').click(function () {
    $('.c-3').toggle('show');
    console.log("h")
  });

  $('.c4-4').click(function () {
    $('.c-4').toggle('show');
    console.log("h")
  });
});