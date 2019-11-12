import Component from '../Component.js';

class PokemonCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <li class="pokemon-item">
                <div class="top">
                    <p>${pokemon.attack}</p>
                    <img class="card"
                        src="${pokemon.url_image}"
                    >
                    <p>${pokemon.type_1}</p>
                </div>
                <div>
                    <h2>${pokemon.pokemon}</h2>
                </div>
            </li>
        `;
    }
}

export default PokemonCard;
