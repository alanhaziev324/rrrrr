$(document).ready(function(){
	$("#menu").on("click","a",function(event){
		event.preventDefoult();

		var id = $(this).attr('href');

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});
});