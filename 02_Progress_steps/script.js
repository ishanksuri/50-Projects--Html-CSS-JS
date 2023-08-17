const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//represent which one is active, initially first one is active
let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  //if currentActive can't be greater than 4 in this case
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //   console.log(currentActive);
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  //if currentActive can't be less  than 1 in this case
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

//updating DOM here
function update() {
  circles.forEach((circle, index) => {
    //if index of that particular circle is less than the current active
    if (index < currentActive) {
      //highlighting with blue color
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  console.log(actives.length, circles.length);

  //changing width of progress by 33 percentage
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
