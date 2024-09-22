import bgImageHome from '../img/bg1.png';
const create = (str) => document.createElement(str);


function mainText () {
    const section = document.createElement('section');
    const h3 = document.createElement('h3');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h3.textContent = 'The pure taste of';
    h1.textContent = 'Philippines';
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.';

    section.append(h3, h1, p);
    section.id = 'home-content'
    
    return section;
}

function openingCard() {
    const divCard = create('div');
    const headPara = create('p');
    const sched = function (day, time) {
        const div = create('div');
        const dayP = create('p');
        const timeP = create('p');

        dayP.textContent = day;
        timeP.textContent = time;
        div.append(dayP, timeP);
        return div;
    }

    headPara.textContent = 'Opening Hours'
    divCard.append(headPara, sched('Mon', 'Closed'), sched('Tue - Fri', '4pm -8pm'), sched('Sat - Sun', '5pm - 11pm'));
    divCard.id = 'opening-card';
    return divCard;
}



function homeBg(){
    const bgHolder = document.createElement('div');
    const bgHome = new Image();
    bgHome.src = bgImageHome;
    bgHome.className = 'bg-home';

    bgHolder.className = 'bg-holder';
    bgHolder.appendChild(bgHome);

    return bgHolder;
}

function homeContent() {
    const content = document.querySelector('#content');
    content.className = 'content-center';
    const section = create('section');
    section.append(mainText(), openingCard());
    return section;
}



export { homeBg, homeContent};

