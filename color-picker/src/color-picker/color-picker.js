import Slider from '../slider/slider.js';
import './color-picker.css';

export default class ColorPicker {
  constructor() {
    this.red = 0;
    this.green = 0;
    this.blue = 0;
  }
  
  render() {
    let colorPicker = document.createElement('div');
    colorPicker.className = 'color-picker';
    colorPicker.innerHTML = (
      `<div class="color-box"></div>
      <div class="color-controls"></div>`
    );

    let controls = colorPicker.querySelector('.color-controls');
    let slider = new Slider(20, 'red');
    slider.mouunt(controls);
    slider.onChange = (value) => {
      this.red = value;
      this.update();
    };

    let slider2 = new Slider(220, 'green');
    slider2.mouunt(controls);
    slider2.onChange = (value) => {
      this.green = value;
      this.update();
    };

    let slider3 = new Slider(120, 'blue');
    slider3.mouunt(controls);
    slider3.onChange = (value) => {
      this.blue = value;
      this.update();
    };

    return colorPicker;
  }

  mount(parent) {
    let colorPicker = this.render();
    parent.appendChild(colorPicker);
    this.update();
  }

  update() {
    let colorBox = document.querySelector('.color-box');
    colorBox.style.backgroundColor = `rgb(${this.red},${this.green},${this.blue})`;
  }
}