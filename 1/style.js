document.onclick = function(event) {
    event = event || window.event;
    if(event.target.tagName == 'IMG') {
        event.target.classList.add('bordered');
    }
}
