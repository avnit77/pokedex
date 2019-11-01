import Component from './Component.js';
import { PokemonCard } from './pokemon.js';


export class DisplayGrid extends Component {
    renderHTML() {
        return /*html*/ `
            <ul id="results">
            </ul>
        `;
    }

    onRender(dom) {
        const pokeProps = this.props.pokemons;
        pokeProps.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonCard = new PokemonCard(props);
            dom.appendChild(pokemonCard.renderDOM());
        });
    }
}



