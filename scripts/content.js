// document.addEventListener('DOMContentLoaded', () => {
//   //create a new instance of lobster
//   console.log('dom content loaded');
//   let newLobster = new Lobster();
// });

class Lobster {
  constructor() {
    const body = document.querySelector('body');
    //TODO: move this somewhere better
    body.style.position = 'relative';
    // create an element called lobster (div)
    this.node = document.createElement('div');
    // assign it the class 'lobster'
    // div.classList.add('new')
    this.node.classList.add('lobster');
    // append it to the body .appendChild()
    body.appendChild(this.node);

    //create a current direction
    this.horizontalDir = 'right';
    this.verticalDir = 'down';
    this.node.style.top = '10px';
    this.node.style.left = '10px';
    //create a speed variable of 250ms
    this.speed = 250;
    //invoke settimeout function with move method and speed variable
    setTimeout(this.move.bind(this), this.speed);
  }
  //create move method
  move() {
    //initialize head
    const lobster = this.node;
    //change the style.top and style.left to numbers
    let topPosition = Number(lobster.style.top.replace('px', ''));
    let leftPosition = Number(lobster.style.left.replace('px', ''));
    const windowHeight = window.screen.availHeight;
    const windowWidth = window.screen.availWidth;
    //use conditional to check if the style.top is 0 or window.screen.availHeight;
    //if true, change the direction
    if (topPosition <= 0 || topPosition >= windowHeight) {
      if (this.verticalDir === 'down') {
        this.verticalDir = 'up';
      } else {
        this.verticalDir = 'down';
      }
    }
    //use conditional to check if the style.left is 0 or the window.screen.availWidth;
    //change the direction
    if (leftPosition <= 0 || leftPosition >= windowWidth) {
      if (this.horizontalDir === 'right') {
        this.horizontalDir = 'left';
      } else {
        this.horizontalDir = 'right';
      }
    }

    if (this.verticalDir === 'up') {
      lobster.style.top = `${topPosition - 20}px`;
    } else {
      lobster.style.top = `${topPosition + 20}px`;
    }

    if (this.horizontalDir === 'left') {
      lobster.style.left = `${leftPosition - 20}px`;
    } else {
      lobster.style.left = `${leftPosition + 20}px`;
    }

    console.log({ topPosition });
    console.log({ leftPosition });

    setTimeout(this.move.bind(this), this.speed);
  }
}

let newLobster = new Lobster();
