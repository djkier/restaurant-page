import bgImageHome from '../img/bg1.png';



function homeBg(){
    const bgHolder = document.createElement('div');
    const bgHome = new Image();
    bgHome.src = bgImageHome;
    bgHome.className = 'bg-home';

    bgHolder.className = 'bg-holder';
    bgHolder.appendChild(bgHome);

    return bgHolder;
}


function home() {
    console.log("Hello World!");
}

export { home, homeBg };

