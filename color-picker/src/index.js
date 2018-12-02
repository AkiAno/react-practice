import ColorPicker from './color-picker/color-picker';

import './index.css';
document.addEventListener('DOMContentLoaded', () => {
  let container = document.querySelector('.container');
  let colorPicker = new ColorPicker();
  colorPicker.mount(container);
});