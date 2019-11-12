import Component from '../Component.js';


export class Footer extends Component {
    renderHTML() {
        return /*html*/ `
        <footer class="mobile">
            <div id="search-bar">
                <input id="search2" type="text" placeholder="Search">
                <button id="search-button2"></button>
            </div>
            <select id="filter">
                <option value="flying">flying</option>
                <option value="ground">ground</option>
                <option value="water">water</option>
            </select>
        </footer>
        `;
    }
}