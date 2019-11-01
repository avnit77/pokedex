import HomeApp from './components/app.js';

const app = new HomeApp();
const dom = app.renderDOM();
document.body.prepend(dom);