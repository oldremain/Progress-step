const $prev = document.querySelector('#prev');
const $next = document.querySelector('#next');

const circles = document.querySelectorAll('.progress-circle');
const line = document.querySelector('.progress-line');

let lineMaxWidth =
  +Array.from(circles).at(-1).getBoundingClientRect().right.toFixed(0) -
  +circles[0].getBoundingClientRect().x.toFixed(0);

let stepLine =
  +circles[1].getBoundingClientRect().right.toFixed(0) -
  +circles[0].getBoundingClientRect().right.toFixed(0);

let currentLineWidth = 0;

let counter = 1;
if (counter == 1) {
  $prev.style.opacity = 0.5;
}

$prev.addEventListener('click', removeStep);

$next.addEventListener('click', addStep);

function removeStep() {
  if (counter == 1) {
    return;
  }

  circles.forEach((el, ind) => {
    if (ind + 1 == counter) {
      el.classList.remove('active');
    }
  });

  counter--;
  decreaseLineWidth(stepLine);
  makeOpacityPrev(counter);
  //   console.log(counter);
}

function addStep() {
  if (counter == circles.length) {
    return;
  }

  circles.forEach((el, ind) => {
    if (ind == counter) {
      el.classList.add('active');
    }
  });

  counter++;
  increaseLineWidth(stepLine);
  makeOpacityNext(counter);
  //   console.log(counter);
}

function increaseLineWidth(step) {
  currentLineWidth += step;
  line.style.width = currentLineWidth + 'px';
}

function decreaseLineWidth(step) {
  currentLineWidth -= step;
  line.style.width = currentLineWidth + 'px';
}

function makeOpacityPrev(counter) {
  if (counter == 1) {
    $prev.style.opacity = 0.5;
  } else {
    $next.style.opacity = 1;
  }
}

function makeOpacityNext(counter) {
  if (counter == circles.length) {
    $next.style.opacity = 0.5;
  } else {
    $prev.style.opacity = 1;
  }
}
