function onLoadAnimations(){
    var background = document.getElementsByClassName('background');
    var head = document.getElementsByClassName('head');
    var vf = document.getElementsByClassName('vf');
    var mini_nav = document.getElementsByClassName('mini-nav');

    background[0].style.transform = "scale(1)";
    head[0].style.left = "0";
    vf[0].style.opacity = "1";
    mini_nav[0].style.opacity = "1";
    mini_nav[0].style.top = "0";

}