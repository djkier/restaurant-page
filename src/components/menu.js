import { create } from './global.js'
import { Starters, Breakfast, Dinner, Drinks } from "./createFood.js";











function menuNavBar(){
    const nav = create('nav');
    const ul = create('ul');
    const menuChoice =  (str) => {
        const li = create('li');
        const a = create('a');
        a.href = str === 'Wine' ? '#drinks' : `#${str.toLowerCase()}`;
        a.textContent = str;
        li.appendChild(a);
        return li;
    }

    ul.append(menuChoice('Starters'), menuChoice('Breakfast'), menuChoice('Dinner'), menuChoice('Wine'), menuChoice('Drinks'));
    nav.id = 'menu-nav'
    nav.appendChild(ul);
    return nav

}

function menuContent(){
    const section = create('section');
    section.id = 'menu-content';
    section.append(
        Starters.makeCardAppear(),
        Breakfast.makeCardAppear(),
        Dinner.makeCardAppear(),
        Drinks.makeCardAppear()
    );

    return section;
}
export { menuContent , menuNavBar }