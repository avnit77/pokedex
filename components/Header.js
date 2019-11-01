import Component from './Component.js';

export class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header>
            <img src="assests/display/Pokedex-ball.png"/>
            <h1>Pokedex</h1>
        </header>
        `;
    }
}