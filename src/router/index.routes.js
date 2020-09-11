import { pages } from '../controllers/index';
let content = document.querySelector('.container-root');

const router = (nameRoute) => {
  content.innerHTML = '';
  switch (nameRoute) {
    case '': {
      return content.appendChild(pages.Home());
    }
    case '#/curriculum':
      return content.appendChild(pages.Curriculum());
    case '#/services':
      return content.appendChild(pages.Services());
    case '#/skills':
      return console.log('skills');
    case '#/portfolio':
      return console.log('portfolio');
    case '#/contact':
      return console.log('contact');
    default:
      return console.log('404');
  }
};

export { router };
