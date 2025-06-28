function playSound(event) {
  const audioReplay = document.querySelector(`audio[data-key=${event.code}]`);
  const key = document.querySelector(`.key[data-key=${event.code}]`);

  if (!audioReplay) return; // Stop the function if no audio is found

  const audio = audioReplay.cloneNode()
  audio.currentTime = 0; // Rewind to the start
  audio.play()

  key.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // Skip if not transform
  this.classList.remove('playing');
  // This refers to the key that triggered the event
  // event.propertyName is the name of the CSS property that triggered the event
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);