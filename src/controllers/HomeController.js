import viewHome from '../views/home.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};
