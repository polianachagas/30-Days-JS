const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('o');
    this.classList.toggle('open');
    console.log('p');
}

function toggleActive(e) {
    console.log('a');
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
