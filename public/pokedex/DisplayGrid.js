import Component from '../Component.js';
import { PokemonCard } from '../pokedex/pokemon.js';


export class DisplayGrid extends Component {
    renderHTML() {
        return /*html*/ `
            <ul id="results">
            </ul>
        `;
    }

    onRender(dom) {
        const pokemons = this.props.pokemons.sort((a, b) => a.id - b.id);

        pokemons.forEach(pokemon => {
            const props = { pokemon : pokemon };
            const pokemonCard = new PokemonCard(props);
            const pokemonCardDOM = pokemonCard.renderDOM();
            dom.appendChild(pokemonCardDOM);
        });
    }
}



