"use strict";

const colors = {
  white: '#ffffff',
  primary: '#00A0E3',
  warning: '#ffc400'
}

const getEl = (id) => {
  const element = document.querySelector('.js-' + id);
  if (!element) {
    throw new Error('Element not found: ' + id);
  }
  return element;
};

const tracking = (event, data) => {
  if (window.gtag) {
    {
      window.gtag('event', event, {
        ...data,
        version: configs.version,
      });
    }
  }
};

const handler = () => {
  console.log('AppJS Loaded!!');
}
document.addEventListener('DOMContentLoaded', handler);
