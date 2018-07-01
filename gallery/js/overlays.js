/* functionettes */
function freeze_body(){
	document.documentElement.style.height = "100vh";
	document.documentElement.style.overflow = "hidden";
}
function unfreeze_body(){
	document.documentElement.style.height = "auto";
	document.documentElement.style.overflow = "visible";
}
function show_element(m){
    m.style.opacity = "1";
    m.style.visibility = "visible";
}
function hide_element(m){
    m.style.opacity = "0";
    m.style.visibility = "hidden";
}

/* functions */
var img, img_src;

function open_image(e){
    img = e;
	img_src = img.getAttribute('src');

	var overlay = document.querySelector('.overlay-primary');
	var overlay_img = document.querySelector('.overlay-primary div.image');

	overlay_img.style.backgroundImage = 'url("originals/' + img_src + '")';
	show_element(overlay);
	
	freeze_body();
}

function close_image(){
    var overlay_primary = document.querySelector('.overlay-primary');

    hide_element(overlay_primary);

    unfreeze_body();
}
console.log("We")