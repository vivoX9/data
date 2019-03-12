function setRem() {
    var html = document.getElementsByTagName('html')[0];
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 10 + 'px';
}
window.addEventListener("resize", setRem);
window.addEventListener('orientationchange', setRem);
setRem();
