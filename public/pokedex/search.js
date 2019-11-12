import Component from '../Component.js';

export class Search extends Component {
    renderHTML() {
        return /*html*/ `
        <form class="options">
            <input id="search" type="text" placeholder="Search">
            <fieldset id="type">
                <label>
                    <input type="radio" name="type" value="flying">
                    Flying
                </label>
                <label>
                    <input type="radio" name="type" value="ground">
                    Ground
                </label>
                <label>
                    <input type="radio" name="type" value="water">
                    Water
                </label>
                <label>
                    <input type="radio" name="type" value="grass">
                    Grass
                </label>
                <label>
                    <input type="radio" name="type" value="electric">
                    Electric
                </label>
                <label>
                    <input type="radio" name="type" value="ice">
                    Ice
                </label>
                <label>
                    <input type="radio" name="type" value="rock">
                    Rock
                </label>
                <label>
                    <input type="radio" name="type" value="steel">
                    Steel
                </label>
                <label>
                    <input type="radio" name="type" value="fire">
                    Fire
                </label>
                <label>
                    <input type="radio" name="type" value="bug">
                    Bug
                </label>
            </fieldset>
                <button id="search-button"></button>
        </form>
        `;
    }

    onRender(form) {
        // const searchBar = form.querySelector('input[id=search]');
        const filters = form.querySelectorAll('input[name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            // searchBar.value = searchParams.get('pokemon') || '';

            const type = searchParams.get('type_1');
            if (type) {
                filters.forEach(filter => {
                    filter.checked = filter.value === type;
                });
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            // searchParams.set('pokemon', formData.get('search'));
            searchParams.set('type_1', formData.get('type'));

            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }
}