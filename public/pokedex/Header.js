import Component from '../Component.js';

export class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header>
            <div class="name">
                <img class="logo" src="assests/display/Pokedex-ball.png"/>
                <h1>Pokedex</h1>
            </div>
        </header>
        `;
    }
}