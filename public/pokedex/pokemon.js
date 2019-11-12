import Component from '../Component.js';

export class PokemonCard extends Component {
    renderHTML() {
        const pokemons = this.props.pokemons;

        return /*html*/`
            <li class="pokemon-item">
                <div class="top">
                    <p>${pokemons.attack}</p>
                    <img class="card"
                        src="${pokemons.url_image}"
                    >
                    <p>${pokemons.type_1}</p>
                </div>
                <div>
                    <h2>${pokemons.pokemon}</h2>
                </div>
            </li>
        `;
    }
}

export default PokemonCard;
