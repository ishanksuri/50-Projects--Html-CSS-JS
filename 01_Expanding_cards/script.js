//it will select the first panel among 5 panels
// const panel = document.querySelector('.panel')

// to select all panels at once
//it puts all the panels into node list similar to an array
const panels = document.querySelectorAll('.panel');

//forEAch is high order array method, this method takes function as an argument
panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener('click', () => {
    //removing active classes for other panel( previously clicked) before adding to new panel
    removeActiveClasses();

    // console.log(panel.classList);
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
