import Component from './Component.js';
import { Header } from './Header.js';
import { Paging } from './paging.js';
import { DisplayGrid } from './DisplayGrid.js';
import Sidebar from './Sidebar.js';
import { Footer } from './Footer.js';
import { Search } from './search.js';
import { getPokemon } from '../Api/api.js';

class HomeApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.appendChild(header.renderDOM());

        const paging = new Paging();
        dom.appendChild(paging.renderDOM());

        const optionsSection = dom.querySelector('.options');
        const sidebar = new Sidebar();
        optionsSection.prepend(sidebar.renderDOM());

        const search = new Search();
        optionsSection.prepend(search.renderDOM());

        const listSection = dom.querySelector('.display');
        const displayGrid = new DisplayGrid({ pokemons: [] });
        listSection.prepend(displayGrid.renderDOM());

        const footer = new Footer();
        dom.prepend(footer.renderDOM());

        async function loadHeroPokemon() {
            const response = await getPokemon();
            const pokemons = response.Search;
            const totalResults = response.totalResults;
            displayGrid.update({ pokemons: pokemons });
            paging.update({ totalResults: totalResults });
        }

        loadHeroPokemon();

        window.addEventListener('hashchange', () => {
            loadHeroPokemon();
        });
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