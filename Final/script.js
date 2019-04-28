function flash() {
    var text = document.getElementById('cornertitle');
    text.style.color = (text.style.color=='white') ? 'black':'white';
}
setInterval(flash, 400);


