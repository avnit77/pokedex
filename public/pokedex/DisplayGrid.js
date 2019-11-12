import Component from '../Component.js';
import PokemonCard from '../pokedex/pokemon.js';


export class DisplayGrid extends Component {
    renderHTML() {
        return /*html*/ `
            <ul id="results">
            </ul>
        `;
    }

    onRender(dom) {
        const pokemons = this.props.pokemons;

        pokemons.forEach(pokemon => {
            const props = { pokemon : pokemon };
            const pokemonCard = new PokemonCard(props);
            const pokemonCardDOM = pokemonCard.renderDOM();
            dom.appendChild(pokemonCardDOM);
        });
    }
}



