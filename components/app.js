import Component from './Component.js';
import { Header } from './Header.js';
import Paging from './paging.js';
import { DisplayGrid } from './DisplayGrid.js';
import { getPokemon } from '../Api/api.js';
import Sidebar from './Sidebar.js';
import { Footer } from './Footer.js';

class HomeApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options');
        const sidebar = new Sidebar();
        optionsSection.prepend(sidebar.renderDOM());

        const listSection = dom.querySelector('.display');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const displayGrid = new DisplayGrid({ pokemons: [] });
        listSection.appendChild(displayGrid.renderDOM());

        const footer = new Footer();
        dom.prepend(footer.renderDOM());

        const response = await getPokemon();
        const pokemons = response.results;
        displayGrid.update({ pokemons: pokemons });
    }

    renderHTML() {
        return /*html*/`
            <div>

                <main>
                    <div class="display">

                    </div>

                    <div class="options">

                    </div>
                </main>

            </div>
        `;
    }
}

export default HomeApp;