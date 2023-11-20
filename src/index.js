import _ from 'lodash';
import './style/main.css'
import home from './pages/home'
import headerDiv from './pages/header';
import initialLoad from './landingPage';



function component(){
  const element = document.querySelector('#container');



  return element; 
} 

document.body.appendChild(component());
home();
headerDiv();
initialLoad();