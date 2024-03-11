/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import PopupManager from './modules/PopupManager.js';
import { ServicesSlider } from './modules/ServicesSlider.js';

document.addEventListener('DOMContentLoaded', function() {
  // modal init
  new PopupManager();

  // init slider
  const servicesSlider = new ServicesSlider('.js-services-slider-init');
});