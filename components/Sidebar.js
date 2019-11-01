import Component from './Component.js';

class Sidebar extends Component {

    renderHTML() {
        return /*html*/`
            <div class="options">
                <form class="search">
                    <input id="search" type="text" placeholder="Search">
                    <button id="search-button"></button>
                </form>
                <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="flying">
                        Flying
                    </label>
                    <label>
           b             <input type="radio" name="type" value="ground">
                        Ground
                    </label>
                    <label>
                        <input type="radio" name="type" value="water">
                        Water
                    </label>
                </fieldset>
            </div>
        `;
    }
}

export default Sidebar;