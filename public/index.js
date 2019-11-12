import HomeApp from './pokedex/app.js/index.js';

const app = new HomeApp();
const dom = app.renderDOM();
document.body.prepend(dom);