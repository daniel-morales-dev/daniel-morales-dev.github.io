import viewSkills from '../views/skills.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = viewSkills;
  return divElement;
};
