import Component from './Component.js';

export class PokemonCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item">
                <p>${pokemon.attack}</p>
                <img class="card"
                    src="${pokemon.url_image}"
                >
                <p>${pokemon.type}</p>
                <h2>${pokemon.pokemon}</h2>
            </li>
        `;
    }
}

export default PokemonCard;
