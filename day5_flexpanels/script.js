const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('panel-open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//se um painel ja estiver aberto, quando abrir outro fechar aquele

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
