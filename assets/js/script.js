var twitter = document.getElementById('twitter');


var Red = document.getElementById('red');
var Blue = document.getElementById('blue');
var Green = document.getElementById('green');

var RedValue = document.getElementById('rv');
var GreenValue = document.getElementById('gv');
var BlueValue = document.getElementById('bv');

RedValue.textContent = 0;
GreenValue.textContent = 0;
BlueValue.textContent = 0;

Red.addEventListener("input", function(){

	var r = Red.value;
	var g = Green.value;
	var b = Blue.value;
	twitter.style.color = "rgb("+ r +","+ g +","+ b +")";
	RedValue.textContent = r;


});
Green.addEventListener("input", function(){
	var r = Red.value;
	var g = Green.value;
	var b = Blue.value;
	twitter.style.color = "rgb("+ r +","+ g +","+ b +")";
	GreenValue.textContent = g;

});
Blue.addEventListener("input", function(){

	var r = Red.value;
	var g = Green.value;
	var b = Blue.value;
	twitter.style.color = "rgb("+ r +","+ g +","+ b +")";
	BlueValue.textContent = b;

})




