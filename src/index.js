import './styles/styles.scss';
import bgImageHome from './img/bg1.png';



console.log("hello world from console")
const bgHolder = document.createElement('div');
const bgHome = new Image();

bgHome.src = bgImageHome;
bgHome.className = 'bg-home';

bgHolder.className = 'bg-holder';


bgHolder.appendChild(bgHome);
document.body.appendChild(bgHolder);