class Lobster {
  constructor() {
    const body = document.querySelector('body');
    this.node = document.createElement('img');
    this.node.setAttribute('src', "https://clipart.world/wp-content/uploads/2021/06/Lobster-clipart-transparent-18.png");
    
    this.node.classList.add('lobster');
    
    body.appendChild(this.node);

    this.horizontalDir = '';
    this.verticalDir = '';
    
    if (Math.random() > 0.5){
      this.horizontalDir = 'right';
      this.node.classList.add('clockwise');
    
    } else {
      this.horizontalDir = 'left';
      this.node.classList.add('counter-clockwise');
    }
    if (Math.random() > 0.5){
      this.verticalDir = 'up';
    } else {
      this.verticalDir = 'down';
    }
    this.node.style.top = `${(Math.random() * 400) + 1}px`;
    this.node.style.left = `${(Math.random() * 800) + 1}px`;
    this.speed =  25;
    

    




    setTimeout(this.move.bind(this), this.speed);
  }
  move() {
    const lobster = this.node;
    let topPosition = Number(lobster.style.top.replace('px', ''));
    let leftPosition = Number(lobster.style.left.replace('px', ''));
    const windowHeight = window.screen.availHeight - 250;
    const windowWidth = window.screen.availWidth - 170;
    if (topPosition <= 0 || topPosition >= windowHeight) {
      if (this.verticalDir === 'down') {
        this.verticalDir = 'up';
      } else {
        this.verticalDir = 'down';
      }
    }

    if (leftPosition <= 0 || leftPosition >= windowWidth) {
      if (this.horizontalDir === 'right') {
        this.horizontalDir = 'left';
      } else {
        this.horizontalDir = 'right';
      }
    }

    if (this.verticalDir === 'up') {
      lobster.style.top = `${topPosition - 10}px`;
    } else {
      lobster.style.top = `${topPosition + 10}px`;
    }

    if (this.horizontalDir === 'left') {
      lobster.style.left = `${leftPosition - 10}px`;
    } else {
      lobster.style.left = `${leftPosition + 10}px`;
    }

    setTimeout(this.move.bind(this), this.speed);
  }
}
const body = document.querySelector('body');
body.style.position = 'relative';
body.style.background = '#004E96';

for (let i = 0; i <= 5; i++) {
  new Lobster()
}

