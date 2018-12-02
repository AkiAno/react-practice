import './slider.css';

export default class Slider {
  constructor(value, color) {
    this.value = value;
    this.color = color;
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'slider';

    this.element.innerHTML = (
      `<div class="scale">
        <div class="bar"></div>
        <div class="knob"></div>
      </div>
      <div class="value">X</div>`
    );

    this.element.querySelector('.scale')
      .addEventListener('click', event => {
        const width = event.target.offsetWidth;
        this.value = Math.round(event.offsetX / width * 255);        
        this.update();
      });

    this.element.querySelector('.bar').style.backgroundColor = this.color;
    this.element.querySelector('.knob').style.backgroundColor = this.color;
  }

  mouunt(parent) {
    this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update() {
    let scaleElm = this.element.querySelector('.scale');
    let scaleWidth = scaleElm.offsetWidth;
    let knobElm = this.element.querySelector('.knob');

    let offsetX = Math.round(
      this.value / 255 * scaleWidth - knobElm.offsetWidth / 2
    );
    knobElm.style.left = `${offsetX}px`;
    
    let valueElm = this.element.querySelector('.value');
    valueElm.innerHTML = this.value;

    if(this.onChange) {
      this.onChange(this.value);
    }
  }
}