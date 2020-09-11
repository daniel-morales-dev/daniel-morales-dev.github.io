import '../styles/styles.css';
import '../scripts/menu.js';
import 'animate.css';

import { router } from '../router/index.routes';

router(window.location.hash);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
