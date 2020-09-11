import viewServices from '../views/services.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = viewServices;
  return divElement;
};
