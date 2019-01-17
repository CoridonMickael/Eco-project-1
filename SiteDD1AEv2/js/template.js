var menu = document.querySelector('.menu')
var btn = document.querySelector('.icon')
var comble = document.querySelector('.comble')

comble.style.display = "none"
var add = function(){
	comble.style.display = "block"
	menu.classList.toggle('active')
}

var remove = function(){
	menu.classList.toggle('active')
	comble.style.display = "none"
}
btn.addEventListener('click',add)
comble.addEventListener('click', remove)


window.onload=function(){
  $('.slider').slick({
  autoplay:true,
  autoplaySpeed:1500,
  arrows:true,
  prevArrow:'<button type="button" class="slick-prev"></button>',
  nextArrow:'<button type="button" class="slick-next"></button>',
  centerMode:true,
  slidesToShow:3,
  slidesToScroll:1
  });
};



