import './styles/styles.scss';
import { homeBg, homeContent} from './components/home.js';
import { menuContent, menuNavBar } from './components/menu.js';


function header () {
    const headerComp = document.querySelector('header');
    const navBar = document.querySelector('nav')
    const logo = document.createElement('h3');
    const options = document.createElement('ul');
   
    const list = function (str) {
        const li = document.createElement('li');
        const item = document.createElement('p');
        item.appendChild(document.createTextNode(str));
        li.appendChild(item);
        li.id = str;
        return li;
    }

    logo.appendChild(document.createTextNode('nierque.'));
    options.append(list('Home'), list('Menu'), list('About Us'))
    navBar.appendChild(options);
    headerComp.appendChild(logo);
}

header();



const content = document.querySelector('#content');
document.body.appendChild(homeBg());

//contents ---homeContent(),menuContent(),aboutContent()----
content.append(menuNavBar(), menuContent());



