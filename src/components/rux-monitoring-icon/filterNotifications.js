import { directive } from 'lit-html';
export const filterNotifications = directive(val => part => {
  try {
    const n = Math.floor(val);
    if (n.isNaN) return;

    // don't show any values less than 0
    if (n <= 0) return null;

    // get the place value
    const thousand = Math.floor((n / 1000) % 1000); // only return a whole number
    const million = (n / 1000000) % 1000000; // return a decimal value for numbers like 1.2m
    const billion = (n / 1000000000) % 1000000000; // return a decimal value for numbers like 1.2b
    const trillion = (n / 1000000000000) % 1000000000000; // trillion is just to offer an overflow instance

    // set the display to its original state
    let _message = n;

    if (trillion >= 1) {
      _message = '∞';
    } else if (billion >= 1) {
      _message = `${billion.toFixed(1).toString()}b`;
    } else if (million >= 1) {
      _message = `${million.toFixed(1).toString()}m`;
    } else if (thousand >= 1) {
      _message = `${thousand}k`;
    }
    part.setValue(_message);
  } catch (error) {
    console.error(error);
  }
});
