import { create } from './global.js'
import { Starters, Breakfast, Dinner, Drinks } from "./createFood.js";











function menuNavBar(){
    const nav = create('nav');
    const ul = create('ul');
    const menuChoice =  (str) => {
        const li = create('li');
        const a = create('a');
        a.href = `#${str.toLowerCase()}`;
        a.textContent = str;
        li.appendChild(a);
        return li;
    }

    ul.append(menuChoice('Starters'), menuChoice('Lunch'), menuChoice('Dinner'), menuChoice('Wine'), menuChoice('Drinks'));
    nav.appendChild(ul);
    return nav

}

function menuContent(){
    const section = create('section');
    section.append(
        Starters.makeCardAppear(),
        Breakfast.makeCardAppear(),
        Dinner.makeCardAppear(),
        Drinks.makeCardAppear()
    
    );

    return section;
}
export { menuContent , menuNavBar }