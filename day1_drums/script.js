// ------------ opcao do comentario do video (com keyUp)
// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) return; //stop the function from running all together
//     audio.currentTime = 0; //rewind to the start
//     audio.play();
//     key.classList.add('playing');
// });

// function removeTransition(e) {
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     key.classList.remove('playing');
    
//     // console.log(`aqui`)
//     // if (e.propertyName !== 'transform') return; //skip it if it's not a transform
//     // this.classList.remove('playing');
// }

// window.addEventListener('keyup', removeTransition);

// // const keys = document.querySelectorAll('.key');
// // keys.forEach(key => key.addEventListener('keyup', removeTransition));

// ------------ opcao da menina (com transitionend)
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);