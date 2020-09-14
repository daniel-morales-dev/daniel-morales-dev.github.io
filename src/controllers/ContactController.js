import viewContact from '../views/contact.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = viewContact;
  return divElement;
};
