$(document).ready(function(){

	$("#menu").accordion({collapsible: true, active: false});

	




	$("#nav").addClass("js").before('<div id="threeLines">&#9776;</div>');
	$("#threeLines").click(function(){
		$("#nav").toggle();
	});
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$("#nav").removeAttr("style");
		}
	});
});