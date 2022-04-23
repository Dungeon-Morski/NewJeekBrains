


document.querySelector('.burger__btn').addEventListener('click',()=>{
  document.querySelector('.header__navigation').classList.toggle('active');
});

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});